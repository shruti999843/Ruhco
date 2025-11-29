import React from "react";
import Hero from "./parts/Hero";
import Contact_us from "../about/parts/Contact_us";
import Program from "./parts/Program";
import Coaching from "./parts/Coaching";
import WhoWeWorkWith from "./parts/WhoWorkWith";
import ExecutiveCoaching from "./parts/Executive";
import Leads from "./parts/Leads";
import LeadershipProwess from "./parts/BannerwithImage";
import cont from "./assets/1.jpg";
import mob from "./assets/getmob.jpg";
import SeoHiddenText from "../hiddentext/SeoHiddenText";

const Coaching_skills = () => {
  return (
    <>
      <Hero />
      <div className="md:p-14 bg-[#FCFCFF]">
        <SeoHiddenText
 title="Master Coaching Skills for Transformational Leaders"
        description="Strengthen your leadership teams with the RuhCo Coaching Skills Programme, built to shape transformational leaders for today’s dynamic workplaces. The programme focuses on enhancing emotional intelligence, improving delegation, and offering the <strong>best coaching certification</strong>, empowering leaders to build collaborative, motivated, and high-performing teams.
"
/>
        <LeadershipProwess />
        <Coaching />
        <ExecutiveCoaching />
        <WhoWeWorkWith />
        <Leads />
        <Contact_us
          bg_image={cont}
          mob_bg_image={mob}
          heading="Ready to Transform Your Leadership?"
          line1="Take the first step toward building a coaching culture in your organization. Join our Coaching Skills Program and become the leader who inspires, empowers, and drives meaningful change."
          line2="Get in Touch Now to book a consultation and explore how this program can elevate your leadership."
        />
      </div>
    </>
  );
};

export default Coaching_skills;
