import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import meghlaImg from "../assets/web_meghla.png";
import arifImg from "../assets/arif.png";
import samihaImg from "../assets/smaia.png";

const teamMembers = [
  {
    name: "Mubaswira Rahman Samiha",
    role: "Team Lead & Web Developer",
    image:samihaImg,
    description:
      "Experienced leader with 10+ years in tech, specializing in full-cycle solutions, clean architecture, and seamless project coordination.",
  },
  {
    name: "Md. Arif Hassan",
    role: "Web Developer",
    image: arifImg,
    description: "Builds scalable full-stack apps with React, Next.js, and Firebase, focusing on clean code, Web Developer, and seamless user experiences."
  },
  
  {
    name: "Meghla Biswas",
    role: "Junior Developer",
    image:meghlaImg,
    description:
      "Focused on crafting responsive, user-friendly interfaces with modern tools like React.js and Tailwind CSS.",
  },
];

const TeamPage = () => {
  return (
    <div className="w-10/12 mx-auto max-lg:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <JackInTheBox key={index}>
            <div className="text-center shadow-lg p-6 rounded-lg border border-gray-300 border-primary transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_20px_theme(colors.primary.DEFAULT)] hover:cursor-pointer min-h-[425px] ">
              <img
                src={member?.image}
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
