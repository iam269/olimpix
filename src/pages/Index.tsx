import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import WhySection from "@/components/home/WhySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SubjectsSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
