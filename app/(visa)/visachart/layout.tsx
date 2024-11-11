import Container from "@/components/container";
import Footer from "@/components/footer";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/user.model";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@clerk/nextjs/server";
import BarforHeader from "@/components/barforheader";
import { redirect } from "next/navigation";
export default async function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const db = await connectToDB();
  const {userId} = auth().protect();
  
  let firstName="";
  let lastName="";
  let userName = ""
  let photourl="";


  if(userId){
    console.log(userId);
    const currentUser = await User.findOne({clerkId:userId});
    if(!(currentUser?.username || currentUser?.firstName || currentUser?.lastName)){
      redirect("/setinfo");
    }
    firstName = currentUser.firstName ?? "";
    lastName = currentUser.lastName ?? "";
    userName = currentUser.username ?? "";
    photourl = currentUser.photo ?? "";
  }
  return (
    <>
    <Container>
      <BarforHeader firstName = {firstName}  lastName = {lastName} userName={userName} photo = {photourl} />
      {children}
      <Footer/>
    </Container>
    <Toaster/>
    </>
  );
}
