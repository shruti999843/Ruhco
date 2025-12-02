import React from "react";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import git from "./assets/git.png";
import mob from "./assets/getmob.jpg";
import Cards from "./parts/Cards";
import SeoHiddenText from "../hiddentext/SeoHiddenText";

const CaseStudies = () => {
  return (
    <div>
      <h1
  style={{
    position: "absolute",
    left: "-9999px",
    top: "0",
    overflow: "hidden",
    height: "1px",
    width: "1px",
    fontSize: "1px",
  }}
>
 Case Studies That Drive Real Change
</h1>
      <Hero />
      <Cards/>

      <div className="md:px-6">
        <Contact_us
          heading="Take the First Step Toward Successful Change"
          line1="Don’t let your change initiatives fall into the 70% that fail. Are you ready to turn change into a competitive advantage?"
          line2="Sign up for Our Change Management Programs Now"
          button_Name="Get In Touch"
          bg_image={git}
          mob_bg_image={mob}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
