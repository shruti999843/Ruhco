// import Home from "./_components/Frontend/home/Home";
// export default function home() {
//   return (
//       <Home />
//   );
// }



import Home from "./_components/Frontend/home/Home";


export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title:
      "RuhCo | Executive Coaching Leadership Development for Growth and Change ",
      
    description:
      "RuhCo, by Shruti Sonthalia, offers Executive Coaching & Leadership Development. We provide C-suite coaching , foster a Learning Culture , and drive Change Management.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",

       alternates: {
      canonical: "https://ruhco.org/",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
