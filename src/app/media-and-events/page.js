// import Media from "../_components/Frontend/media/Media.jsx";

// export default function organsiational_culture() {
//   return (
//     <h2 className="w-full h-full bg-white text-[#282927] ">
//       <Media />
//     </h2>
//   );
// }





import Media from "../_components/Frontend/media/Media.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Podcasts, Media & Thought Leadership | Shruti Sonthalia | RuhCo ",
    description:
      " Discover the RuhCo thought leadership with Shruti Sonthalia, covering global coaching, DEI, burnout recovery, and mission-driven organisations through media features, podcasts, and event highlights.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
      alternates: {
      canonical: "https://ruhco.org/media-and-events",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Media />
    </>
  );
}
