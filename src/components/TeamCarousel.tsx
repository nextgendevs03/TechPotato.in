import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const teamMembers = [
  {
    name: "Hardik Shah",
    role: "Sr. Developer",
    image: "/hardik.jpg",
  },
  {
    name: "Kishor Chate",
    role: "Sr. QA Engineer",
    image: "/kishorchate.jpg",
  },
  {
    name: "Sandesh Uttarwar",
    role: "Tech Lead",
    image: "/team/no-image.png",
  },
  {
    name: "Paridhi Shah",
    role: "Junior Associate",
    image: "/team/no-image.png",
  },
  {
    name: "Darshana Shah",
    role: "Junior Associate",
    image: "/team/no-image.png",
  },
];

const TeamCarousel = () => {
  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col transition-transform duration-300 h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover mb-3 rounded-md shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCarousel;