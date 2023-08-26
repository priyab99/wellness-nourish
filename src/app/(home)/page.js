import Image from "next/image";
import Slider from "./Slider";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";


 const HomePage= ()=> {
  return (
    <main>
      <Slider></Slider>
      <Section></Section>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
    </main>

  
   
  )
}

export default HomePage;
