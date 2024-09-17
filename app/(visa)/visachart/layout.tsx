import Container from "@/components/container";
import Footer from "@/components/footer";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@clerk/nextjs/server";
import BarforHeader from "@/components/barforheader";
export default async function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const db = await connectToDB();
  const {userId} = auth().protect();
  
  let firstName=null;
  let lastName=null;
  let photourl=null;

  if(userId){
    console.log(userId);
    const currentUser = await User.findOne({clerkId:userId});
    firstName = currentUser.firstName;
    lastName = currentUser.lastName;
    photourl = currentUser.photo;
  }
  return (
    <>
    <Container>
      <BarforHeader firstName = {firstName}  lastName = {lastName} photo = {photourl} />
      {children}
      <Footer/>
    </Container>
    <Toaster/>
    </>
  );
}
