import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hardik Shah',
    role: 'Sr. Developer',
    image: '/hardik.jpg',
  },
  {
    name: 'Kishor Chate',
    role: 'Sr. QA Engineer',
    image: '/kishorchate.jpg',
  },
  {
    name: 'Sandesh Uttarwar',
    role: 'Tech Lead',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Paridhi Shah',
    role: 'Junior Associate',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Darshana Shah',
    role: 'Junior Associate',
    image: 'https://via.placeholder.com/150',
  },
];

const TeamCarousel: React.FC = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = 'https://via.placeholder.com/150';
  };

  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-gray-100 rounded-xl shadow-lg p-4 w-64 text-center hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              onError={handleImageError}
              className="w-32 h-32 mx-auto object-cover mb-4" // removed 'rounded-full'
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;