// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const coachingSections = [
//   {
//     title: "Psychometric Assessments (360-Degree Feedback)",
//     content:
//       "Psychometric assessments, such as Hogan and 360-degree feedback, provide valuable insights for deeper self-awareness. These tools help individuals understand their strengths, areas for growth, and behavioral impact on others.",
//   },
//   { title: "Tripartite Alignment Sessions", content: "" },
//   { title: "Individual Development Plan", content: "" },
//   { title: "Personalized One-on-One Coaching Sessions", content: "" },
//   { title: "Consistent Tracking and Monitoring", content: "" },
//   { title: "Ongoing Organizational Integration", content: "" },
//   {
//     title: "Culturally Relevant Coaching for Indian Organizations",
//     content: "",
//   },
//   { title: "World-Class Coaches", content: "" },
// ];

// export default function Executive() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-900">
//         OUR EXECUTIVE COACHING INTEGRATES:
//       </h2>
//       <div className="mt-4 space-y-4">
//         {coachingSections.map((section, index) => (
//           <div key={index} className="border-b border-gray-300 pb-2">
//             <button
//               className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 p-2 hover:bg-gray-100 rounded"
//               onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             >
//               {section.title}
//               {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
//             </button>
//             {openIndex === index && section.content && (
//               <p className="mt-2 text-gray-700 text-sm p-2 bg-gray-50 rounded">
//                 {section.content}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import upimage from "../assets/12.png"
const coachingSections = [
  {
    title: "Psychometric Assessments (360-Degree Feedback)",
    content:
      "Psychometric assessments, such as Hogan and 360-degree feedback, provide valuable insights for deeper self-awareness. These tools help individuals understand their strengths, areas for growth, and behavioral impact on others.",
  },
  {
    title: "Tripartite Alignment Sessions",
    content:
      "Tripartite Alignment Sessions foster seamless collaboration between employees, managers, and organizational goals. These sessions enhance communication, align expectations, and ensure mutual growth by addressing strengths, development areas, and strategic objectives, ultimately driving performance, engagement, and workplace harmony.",
  },
  {
    title: "Individual Development Plan",
    content:
      "Individual Development Plan (IDP) is a personalized roadmap for growth, helping individuals identify strengths, areas for improvement, and career aspirations. It sets clear goals, aligns with organizational needs, and fosters continuous learning, ensuring professional development and long-term success.",
  },
  {
    title: "Personalized One-on-One Coaching Sessions",
    content:
      "Personalized One-on-One Coaching Sessions provide tailored guidance to enhance individual growth, skills, and performance. These sessions focus on specific goals, strengths, and challenges, offering actionable insights and support to maximize potential, boost confidence, and drive professional success.",
  },
  {
    title: "Consistent Tracking and Monitoring",
    content:
      "Consistent Tracking and Monitoring ensures continuous progress by evaluating performance, identifying improvement areas, and aligning efforts with goals. Regular check-ins and data-driven insights help individuals stay on track, make informed decisions, and achieve long-term success effectively.",
  },
  {
    title: "Ongoing Organizational Integration",
    content:
      "⁠Ongoing Organizational Integration ensures seamless alignment of employees with company culture, values, and goals. Through continuous engagement, support, and adaptation, it fosters collaboration, enhances productivity, and strengthens long-term organizational success while promoting a cohesive work environment.",
  },
  {
    title: "Culturally Relevant Coaching for Indian Organizations",
    content:
      " ⁠Culturally Relevant Coaching for Indian Organizations tailors leadership and development strategies to India's unique work culture, values, and business dynamics. It integrates traditional wisdom with modern methodologies, fostering effective communication, employee engagement, and leadership growth while aligning with organizational goals.",
  },
  {
    title: "World-Class Coaches",
    content:
      "World-Class Coaches bring extensive expertise, proven methodologies, and personalized strategies to drive individual and organizational growth. They provide valuable insights, mentorship, and guidance, empowering professionals to enhance leadership skills, overcome challenges, and achieve excellence in their careers.",
  },
];

export default function ExecutiveCoaching() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:mt-12">
      <div className="relative">
        <Image
          src={upimage}
          alt="Executive Coaching"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-5">
        <h2 className=" tracking-widest font-normal text-2xl md:text-3xl text-[#E53935] capitalize  ">
       Our executive coaching encompasses:
        </h2>
        <p className="text-[#151582]">
          Our Approach: Multi-Touchpoint Learning for Sustainable Impact
        </p>
        <div className="mt-4 space-y-4">
          {coachingSections.map((section, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                className={`flex justify-between items-center w-full text-left text-lg font-medium p-2 hover:bg-gray-100 rounded ${
                  openIndex === index ? "text-[#151583]" : "text-gray-800"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {section.title}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openIndex === index && section.content && (
                <p className="mt-2 text-gray-700 text-sm p-2 bg-gray-50 rounded">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
