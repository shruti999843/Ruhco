// import Organisational_vision from "../../_components/Frontend/organisational_vision/Organisational_vision.jsx";

// export default function organisational_vision() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Organisational_vision />
//     </h2>
//   );
// }


import Organisational_vision from "../../_components/Frontend/organisational_vision/Organisational_vision.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Organisational Vision in the world of AI and Digital Transformation | RuhCo",
    description:
      "Develop Organisational Vision with RuhCo. Shruti Sonthalia's facilitation ensures leadership ownership and clarity, relevance, and direction in a VUCA world.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
         alternates: {
      canonical: "https://ruhco.org/services/organisational_vision",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Organisational_vision />
    </>
  );
}
