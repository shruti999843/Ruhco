// import CaseStudies from "../_components/Frontend/case-studies/CaseStudies";

// export default function Page (){
//     return <CaseStudies/>
// }



import CaseStudies from "../_components/Frontend/case-studies/CaseStudies";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Case Studies for Change, Organisational Growth and Agility | RuhCo",
    description:
      "Explore transformational Case-studies from RuhCo & Shruti Sonthalia on Executive Coaching impact. See success in CXO coaching, Women Leadership, and Change Management.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
       alternates: {
      canonical: "https://ruhco.org/Case-studies",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <CaseStudies />
    </>
  );
}

