// import Coaching_skills from "@/app/_components/Frontend/coaching_skills/Coaching_skills";

import Coaching_skills from "@/app/_components/Frontend/coaching_skills/Coaching_skills";

// export default function coaching_skills() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Coaching_skills />
//     </h2>
//   );
// }






export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Leading Executive Coaching Certification Program for Leaders | RuhCo",
    description:
      "Achieve Coaching Certification with RuhCo. Shruti Sonthalia's programs help build psychological safety, boost emotional intelligence, improve delegation, and foster leadership learning.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
       alternates: {
      canonical: "https://ruhco.org/services/coaching_skills",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Coaching_skills />
    </>
  );
}
