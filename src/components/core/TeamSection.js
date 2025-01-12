import React from 'react';
import profile1 from "../../assets/profile1.jpg"
import profile2 from "../../assets/profile2.jpg"
import profile3 from "../../assets/profile3.jpg"

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: profile1 // Replace with actual image URL
    },
    {
      id: 2,
      name: "Elina Williams",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: profile2 // Replace with actual image URL
    },
    {
      id: 3,
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: profile3 // Replace with actual image URL
    },
  ];

  return (
    <section className='bg-white p-6 rounded-lg shadow-lg'>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Team</h2>
        <p className="text-black mb-8">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
        <div className='flex flex-col gap-4'>
          {teamMembers.map((member) => (
            <div key={member.id} className="flex gap-6 bg-blue-50 p-3 rounded-lg shadow-md">
              <div className='flex flex-col gap-2'>
                <img src={member.image} alt={member.name} className='h-[110px] w-[120px] rounded-lg' />
                <div className='flex flex-col items-center'>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
                </div>
              </div>
              <div className='w-[770px] my-auto'>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
