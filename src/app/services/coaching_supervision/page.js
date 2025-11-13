// import Coaching_supervision from "../../_components/Frontend/coaching_supervision/Coaching_supervision.jsx";

import Coaching_supervision from "@/app/_components/Frontend/coaching_supervision/Coaching_supervision";

// export default function coaching_supervision() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Coaching_supervision />
//     </h2>
//   );
// }

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Coaching Supervision for impact and growth | RuhCo",
    description:
      "Elevate coaching with Coaching Supervision from RuhCo. Founder Shruti Sonthalia provides ICF guidance for professional development and ethical practice.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
        alternates: {
      canonical: "https://ruhco.org/services/coaching_supervision",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Coaching_supervision />
    </>
  );
}
