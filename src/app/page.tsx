import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsRibbon />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <BookingForm />
      <Gallery />
      <Footer />
    </main>
  );
}
