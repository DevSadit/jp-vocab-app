// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const Banner = () => {
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const bannerImages = [
//     {
//       src: "/andre-benz-cATZ2eHu5ys-unsplash.jpg",
//       title: "Dynamic Landscapes",
//     },
//     {
//       src: "/ash-edmonds-uztw2giebSc-unsplash.jpg",
//       title: "Urban Exploration",
//     },
//     {
//       src: "/chris-yang-LA57RXF1mSI-unsplash.jpg",
//       title: "Cultural Moments",
//     },
//     {
//       src: "/premium_photo-1661429571803-32c647db5a14.avif",
//       title: "Natural Wonders",
//     },
//     {
//       src: "/richard-tao-XGvFfx25j7A-unsplash.jpg",
//       title: "Modern Architecture",
//     },
//     {
//       src: "/vista-wei-OiERUvVrioU-unsplash.jpg",
//       title: "Artistic Expressions",
//     },
//   ];

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden bg-gray-100">
//       <div className="absolute inset-0 grid grid-cols-6 gap-0">
//         {bannerImages.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden group"
//             onMouseEnter={() => setHoveredImage(index)}
//             onMouseLeave={() => setHoveredImage(null)}
//           >
//             <div className="absolute inset-0 z-10 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
//             <Image
//               fill
//               src={image.src}
//               alt={image.title}
//               quality={90}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className={`w-full h-full object-cover transition-transform duration-500
//                 ${
//                   hoveredImage === index
//                     ? "scale-110 brightness-110"
//                     : hoveredImage !== null
//                     ? "brightness-50 scale-90"
//                     : ""
//                 }`}
//             />
//             {hoveredImage === index && (
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
//                 <h3 className="text-lg font-bold">{image.title}</h3>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const Banner = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const bannerImages = [
    {
      src: "/andre-benz-cATZ2eHu5ys-unsplash.jpg",
      title: "Dynamic Landscapes",
    },
    {
      src: "/ash-edmonds-uztw2giebSc-unsplash.jpg",
      title: "Urban Exploration",
    },
    {
      src: "/chris-yang-LA57RXF1mSI-unsplash.jpg",
      title: "Cultural Moments",
    },
    {
      src: "/premium_photo-1661429571803-32c647db5a14.avif",
      title: "Natural Wonders",
    },
    {
      src: "/richard-tao-XGvFfx25j7A-unsplash.jpg",
      title: "Modern Architecture",
    },
    {
      src: "/vista-wei-OiERUvVrioU-unsplash.jpg",
      title: "Artistic Expressions",
    },
  ];

  return (
    <div className="w-full h-screen min-h-[400px] max-h-[800px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group h-full w-full"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div
              className="absolute inset-0 z-10 bg-black bg-opacity-0 
              group-hover:bg-opacity-20 transition-all duration-300"
            />
            <div className="relative w-full h-full">
              <Image
                fill
                src={image.src}
                alt={image.title}
                priority={index < 2}
                quality={90}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out
                  ${
                    hoveredImage === index
                      ? "scale-110 brightness-110"
                      : hoveredImage !== null
                      ? "brightness-50 scale-90"
                      : ""
                  }`}
              />
            </div>

            {/* Title Overlay */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 
              bg-black bg-opacity-50 text-white transition-all duration-300
              ${
                hoveredImage === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold truncate">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
