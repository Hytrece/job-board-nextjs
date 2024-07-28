import Container from "@/components/container";
import Footer from "@/components/footer";

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      {children}
      <Footer/>
    </Container>
  );
}
