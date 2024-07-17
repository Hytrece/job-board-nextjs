import Container from "@/components/container";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      {children}
    </Container>
  );
}
