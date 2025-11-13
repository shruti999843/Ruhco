// import ContactMain from "../_components/Frontend/contactus/ContactMain";

// export default function Index(){
//     return (
//         <ContactMain />
//     );
// }




import ContactMain from "../_components/Frontend/contactus/ContactMain.jsx";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title:
      "Start Your Leadership Transformation Journey | RuhCo",
    description:
    "Contact RuhCo founder, Shruti Sonthalia, for tailored Executive Coaching India programs. Achieve Leadership Development breakthrough and strategic Coaching Culture change.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",
       alternates: {
      canonical: "https://ruhco.org/contact-us",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <ContactMain />
    </>
  );
}
