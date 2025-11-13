
import About from "../_components/Frontend/about/About";


export const dynamic = "force-dynamic"; 

export async function generateMetadata() {
  return {
    title:
      "Executive Coaching and Leadership Development for C-Suite Leaders  | RuhCo",
    description:
      "Meet Shruti Sonthalia, the RuhCo founder, your Business Coach and Top Coaches India. Explore Executive Coaching, expertise in Women in Leadership and C-suite coaching.",
    keywords:
      "Executive coaching, leadership development, organizational culture, change management, coaching supervision, coaching skills for leaders, coaching in India, transformational leadership, coaching for founders, coaching for CXOs, vision and strategy alignment, social impact and inclusion",

    alternates: {
      canonical: "https://ruhco.org/about_me",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <About />
    </>
  );
}
