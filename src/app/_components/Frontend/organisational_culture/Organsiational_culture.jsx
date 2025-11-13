import React from "react";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import Importance from "./parts/Importance";
import Why from "./parts/Why";
import Sliders from "./parts/Sliders";
import Who from "./parts/Who";
import Banner from "./parts/Banner";
import Ruhco from "./parts/Ruhco";
// import git from "./assets/git.png";
import SeoHiddenText from "../hiddentext/SeoHiddenText";
const Organsiational_culture = () => {
  return (
    <div>
      <Hero />
      <SeoHiddenText
 title="Organisational Culture"
        description="Building a strong organisational culture is essential for sustainable growth. By fostering a learning culture, companies empower teams to innovate, while leaders learning builds insight-driven, resilient workplaces."
/>
      <Importance />
      <Banner />
      <Why />
      <Sliders />
      <Ruhco />
      <Who />
      <Contact_us
        heading="Take the First Step Toward Successful Change"
        line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into a competitive advantage?"
        line2="Sign up for Our Change Management Programs Now"
        button_Name="Get In Touch"
        //   bg_image={git}
      />
    </div>
  );
};

export default Organsiational_culture;
