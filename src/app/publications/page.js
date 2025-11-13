// import Publications from "../_components/Frontend/publications/Publications.jsx";

// export default function publications() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Publications />
//     </h2>
//   );
// }




import Publications from "../_components/Frontend/publications/Publications.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: " Leadership Research and Thought Leadership Publications | RuhCo",
    description:
      "Access powerful insights and research from RuhCo by Shruti Sonthalia on leadership, systems change, business agility, digital transformation & AI, and coaching for real-world, inclusive impact.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
        alternates: {
      canonical: "https://ruhco.org/publications",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Publications />
    </>
  );
}
