import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import ContactSection from "../components/Home/ContactSection";
import StatsSection from "../components/Home/StatsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <StatsSection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
      <ContactSection />
    </>
  );
};

export default Home;
