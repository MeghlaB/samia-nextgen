import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

const teamMembers = [
  {
    name: "Mubaswira Rahman Samiha",
    role: "Team Lead & Software Developer",
    image:
      "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Experienced leader with 10+ years in tech, specializing in full-cycle solutions, clean architecture, and seamless project coordination.",
  },
  {
    name: "Meghla Biswas",
    role: "Junior Developer",
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Focused on crafting responsive, user-friendly interfaces with modern tools like React.js and Tailwind CSS.",
  },

  // {
  //     name: "Jane Smith",
  //     role: "CTO",
  //     image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Tech expert driving innovation and technical excellence in all projects."
  // },
  // {
  //     name: "Sarah Brown",
  //     role: "Lead Developer",
  //     image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Passionate about coding and turning complex problems into simple solutions."
  // },
  // {
  //     name: "Michael Johnson",
  //     role: "UI/UX Designer",
  //     image: "https://images.pexels.com/photos/5244025/pexels-photo-5244025.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Designs intuitive user interfaces with a focus on user experience."
  // },
  // {
  //     name: "Emily White",
  //     role: "Project Manager",
  //     image: "https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Experienced in managing projects from concept to completion with precision."
  // },
  // {
  //     name: "Michael Scott",
  //     role: "Senior Developer",
  //     image: "https://images.pexels.com/photos/5257554/pexels-photo-5257554.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Expert in full-stack development, specializing in building scalable web applications with modern technologies."
  // },
  // {
  //     name: "Jessica Parker",
  //     role: "Frontend Developer",
  //     image: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Passionate about creating responsive and interactive user interfaces using React, HTML, and CSS."
  // },
  // {
  //     name: "David Lee",
  //     role: "Backend Developer",
  //     image: "https://images.pexels.com/photos/7606028/pexels-photo-7606028.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Experienced in server-side technologies, specializing in Node.js and API integrations."
  // },
  // {
  //     name: "Sophia Green",
  //     role: "Mobile App Developer",
  //     image: "https://images.pexels.com/photos/4458412/pexels-photo-4458412.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Skilled in building cross-platform mobile applications using React Native and Flutter."
  // },
  // {
  //     name: "Olivia Taylor",
  //     role: "Lead UI/UX Designer",
  //     image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Specializes in user-centered design, crafting beautiful and intuitive interfaces with a focus on usability."
  // },
  // {
  //     name: "Lucas Brown",
  //     role: "UI/UX Designer",
  //     image: "https://images.pexels.com/photos/5244026/pexels-photo-5244026.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Creates visually engaging and user-friendly designs with an eye for detail and creativity."
  // },
  // {
  //     name: "Ava Wilson",
  //     role: "Junior UI/UX Designer",
  //     image: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Passionate about user experience and interface design, helping to bring ideas to life through wireframes and prototypes."
  // },
  // {
  //     name: "Ethan King",
  //     role: "UX Researcher",
  //     image: "https://images.pexels.com/photos/6084178/pexels-photo-6084178.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     description: "Focused on gathering user insights and translating them into actionable design improvements."
  // },
];

const TeamPage = () => {
  return (
    <div className="w-10/12 mx-auto max-lg:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <JackInTheBox key={index}>
            <div className="text-center shadow-lg p-6 rounded-lg border border-gray-300 border-primary transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_20px_theme(colors.primary.DEFAULT)] hover:cursor-pointer min-h-[425px] ">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover border mx-auto border-gray-300 rounded-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
