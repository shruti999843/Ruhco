import React from "react";
import Coaching from "./parts/Coaching.jsx";
import Case_Study from "./parts/Case_Study.jsx";
import Contact_us from "../about/parts/Contact_us.jsx";
import Executive from "./parts/Executive.jsx";
import WhoWeWorkWith from "./parts/WhoWorkWith.jsx";
import Hero from "./parts/Hero.jsx";
import LeadershipProwess from "./parts/BannerwithImage.jsx";
import Testimonials from "./parts/Testimonials.jsx";
import bgimage from "../services/assets/2.jpg"
import bgimagemob from "../services/assets/mob.jpg";
import SeoHiddenText from "../hiddentext/SeoHiddenText.jsx";

const Services = () => {
  return (
    <>
      <Hero />
      <div className="md:p-14 bg-[#FCFCFF]">
        <SeoHiddenText
        title="Our executive coaching encompasses"
        description="RuhCo’s executive coaching  encompasses  personalised CXO coaching as well as business and Women leaders to enhance their influence and decision-making. Our solutions also focus on resilience, clarity, stakeholder management and stress management & burnout while driving organisational growth and achieving professional excellence."
        / >
        <LeadershipProwess />
        <Coaching />
        <Executive />
        <WhoWeWorkWith />
        <Case_Study />
        {/* <Testimonials /> */}
        <Contact_us
          heading="Ready to Transform Your Leadership?"
          line1="Join the growing community of leaders investing in their leadership journey."
          line2="Get in touch today to explore coaching can drive measurable impact or you and your organization."
          bg_image={bgimage}
          mob_bg_image={bgimagemob}
        />
      </div>
    </>
  );
};

export default Services;
