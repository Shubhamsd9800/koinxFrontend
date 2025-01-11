import React, { memo } from 'react';
import Img1 from "../assets/sandeep.png"
import Img2 from "../assets/Girl.png"
import Img3 from "../assets/CEO.png"

const TeamMember = memo(({ member }) => (
  <div className="bg-[#E8F4FD] rounded-lg p-3 md:p-4">
    <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4">
      <div className="text-center md:text-left">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover mx-auto md:mx-0"
        />
        <h3 className="font-semibold mt-2 md:mt-3">{member.name}</h3>
        <p className="text-gray-500 text-xs md:text-sm">{member.designation}</p>
      </div>
      
      <div className="flex-1">
        <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
          {member.description}
        </p>
      </div>
    </div>
  </div>
));

const Team = memo(() => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      image: Img1,
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: Img2,
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: Img3,
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Team</h2>
      <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
});

export default Team;
