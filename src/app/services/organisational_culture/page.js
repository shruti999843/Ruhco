// import Organsiational_culture from "@/app/_components/Frontend/organisational_culture/Organsiational_culture";

import Organsiational_culture from "@/app/_components/Frontend/organisational_culture/Organsiational_culture";

// export default function organsiational_culture() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Organsiational_culture />
//     </h2>
//   );
// }



export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Learning & Coaching Culture for Change | RuhCo, Shruti Sonthalia",
    description:
      " Build a resilient Learning Culture & Coaching Culture with RuhCo and Shruti Sonthalia. Foster Leadership Learning to strengthen organizational alignment and ownership. ",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
        alternates: {
      canonical: "https://ruhco.org/services/organisational_culture",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Organsiational_culture />
    </>
  );
}
