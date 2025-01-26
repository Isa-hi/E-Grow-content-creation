import EmailCapture from "./components/EmailCapture";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Freebies from "./components/Freebies";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import ValueProposition from "./components/ValueProposition";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Testimonials />
      <Freebies />
      <EmailCapture />
      <FinalCTA />
      <Footer />
    </main>
  )
}

