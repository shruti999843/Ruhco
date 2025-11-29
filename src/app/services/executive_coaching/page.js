// import Services from "../../_components/Frontend/services/Services.jsx";

import Services from "@/app/_components/Frontend/services/Services";

// export default function services() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Services />
//     </h2>
//   );
// }




export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Executive  and Business Coaching for C-Suite Leaders | RuhCo",
    description:
      "RuhCo, by Shruti Sonthalia, offers Executive Coaching India for C-suite coaching/CXO coaching. Boost executive presence, manage burnout, and master delegation.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
         alternates: {
      canonical: "https://ruhco.org/services/executive_coaching",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Services />
    </>
  );
}
