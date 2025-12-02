"use client";

import React from "react";

export default function Contact() {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        const { error } = await res.json();
        alert("Failed: " + error);
      }
    } catch (err) {
      alert("Request error: " + err.message);
    }
  };

  return (
    <>
      <div className="text-center text-2xl font-semibold mt-12 mb-6">
       <h2> GET IN TOUCH</h2>
      </div>
      <div className="max-w-4xl mx-auto mb-30 p-8 bg-white rounded-3xl shadow-lg">
        <form className="space-y-8" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="full_name" placeholder="Full Name" className="input" />
            <input
              name="profession"
              placeholder="Profession"
              className="input"
            />
            <input
              name="work_title"
              placeholder="Work Title"
              className="input"
            />
            <input
              name="organisation"
              placeholder="Organisation"
              className="input"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone No."
              className=""
            />

            <select name="service" className="input">
              <option>Select Service</option>
              <option>Executive Coaching</option>
              <option>Coaching Skills</option>
              <option>Coaching Supervision</option>
              <option>Change Management</option>
              <option>Organisational Culture</option>
              <option>Organisational Vision</option>
            </select>

            <select name="for_whom" className="input">
              <option>For Whom</option>
              <option>Self</option>
              <option>Team</option>
              <option>Organisation</option>
            </select>

            <select name="start_time" className="input">
              <option>When do you want to start?</option>
              <option>Within 3 months</option>
              <option>Within 6 months</option>
              <option>Within 12 months</option>
            </select>
          </div>

          <textarea
            name="reason"
            rows={4}
            placeholder="Reason for seeking services"
            className="input"
          />
          {/* <input name="goal_1" placeholder="Goal 1" className="input" />
          <input name="goal_2" placeholder="Goal 2" className="input" />
          <input name="goal_3" placeholder="Goal 3" className="input" /> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="border border-[#151583] rounded-full py-3 px-10 hover:bg-[#151583] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
