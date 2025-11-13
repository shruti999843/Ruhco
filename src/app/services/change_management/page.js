// import Change from "../../_components/Frontend/change_management/Change-management.jsx";

import Change from "@/app/_components/Frontend/change_management/Change-management";

// export default function change_management() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Change />
//     </h2>
//   );
// }







export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Change Management for Business Growth and Success| RuhCo",
    description:
      "Discover how RuhCo, founded by Shruti Sonthalia, implements Change Management strategies to drive business growth, enhance performance, and ensure smooth Digital transformation & AI transitions.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
          alternates: {
      canonical: "https://ruhco.org/services/change_management",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Change />
    </>
  );
}
