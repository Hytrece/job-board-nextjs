import Container from "@/components/container";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Container>
      {children}
      <Footer/>
    </Container>
    <Toaster/>
    </>
  );
}
