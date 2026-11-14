
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import SectionTitle from "../../common/SectionTitle";
import Breadcrumb from "../../common/Breadcrumb";

export default function OurServiceHero() {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col justify-between overflow-hidden bg-gray-600 text-white sm:min-h-[440px] md:min-h-[330px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-105"
        style={{
          backgroundImage: "url('/images/Serv1.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/55 pointer-events-none" />

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-24">
        <SectionTitle title="What Do We Fix" />
        <SectionHeading title="Our Services" />
        
        </Container>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Services" }]} />

    </section>
  );
}
