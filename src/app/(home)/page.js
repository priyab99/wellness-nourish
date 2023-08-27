import Image from "next/image";
import Slider from "./Slider";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";


 const HomePage= ()=> {
  return (
    <main>
      <Slider></Slider>
      <Section></Section>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
       <SectionSix></SectionSix>
    </main>

  
   
  )
}

export default HomePage;
