import Container from "@/components/container";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import BarforHeader from "@/components/barforheader";
export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Container>
      <BarforHeader/>
      {children}
      <Footer/>
    </Container>
    <Toaster/>
    </>
  );
}
