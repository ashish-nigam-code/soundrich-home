import SliderSection from "../components/home-components/SliderSection";
import WhyChoose from "../components/home-components/WhyChoose";
import AboutUs from "../components/home-components/AboutUs";
import ServiceSection from "../components/home-components/ServiceSection";
import BannerSection from "../components/home-components/BannerSection";
import Testimonials from "../components/home-components/Testimonials";
import Faqs from "../components/home-components/Faqs";
import Blogs from "../components/home-components/Blogs";
import PriceSection from "../components/home-components/PriceSection";
import StatsSection from "../components/home-components/StatsSection";
import ProductInfo from "../components/home-components/ProductInfo";
import HearingCentre from "../components/home-components/HearingCentre";
import HearingMachineTypes from "../components/home-components/HearingMachineTypes";

export default function Home() {
  return (
    <>

      <SliderSection/>
      <StatsSection/>
      <AboutUs/>
      <ServiceSection/>
      <HearingCentre/>
      <WhyChoose/>
      <HearingMachineTypes/>
      <BannerSection/>
      <PriceSection/>
      <ProductInfo/>
      <Testimonials/>
      <Blogs/>
      <Faqs/>
      
    </>
  );
}
