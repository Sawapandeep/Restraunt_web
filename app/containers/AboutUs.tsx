"use client";
import React, { useState } from "react";

const AboutUs: React.FC = () => {
  const [isExploreVisible, setIsExploreVisible] = useState(false);

  const handleExploreClick = () => {
    setIsExploreVisible(true);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Culinary Journey</h1>
        <p>
          Discover the passion and heritage behind every dish we create. We
          believe in tradition, quality, and memorable dining experiences.
        </p>
      </section>

      <section
        id="about-us"
        className="bg-green-500 p-8 rounded-lg shadow-lg mb-16 relative overflow-hidden"
      >
        <div
          style={{
            backgroundColor: "#A3D9A5",
            width: "300px",
            height: "300px",
            position: "absolute",
            right: "-150px",
            top: "-150px",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            We are dedicated to bringing you the finest culinary experiences.
            Our team of chefs is passionate about creating dishes that not only
            taste amazing but also tell a story.
          </p>
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
            onClick={handleExploreClick}
          >
            Explore Our Story
          </button>
        </div>
      </section>

      <section
        id="explore"
        className={`text-center ${
          isExploreVisible ? "block" : "hidden"
        } rounded-xl border-customGreen border-2`}
      >
        <h2 className="text-3xl font-bold mb-4">Our Journey & Philosophy</h2>
        <p>
          Our journey began with a simple idea: to share our love for food with
          the world. We believe in using the freshest ingredients and
          traditional cooking methods to create dishes that are both delicious
          and meaningful.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

// "use client";
// import React, { useState } from "react";

// const AboutUs: React.FC = () => {
//   const [isExploreVisible, setIsExploreVisible] = useState(false);

//   const handleExploreClick = () => {
//     setIsExploreVisible(true);
//   };

//   return (
//     <div className="container mx-auto py-16 px-4">
//       <section className="text-center mb-16">
//         <h1 className="text-5xl font-bold mb-4">Our Culinary Journey</h1>
//         <p>
//           Discover the passion and heritage behind every dish we create. We
//           believe in tradition, quality, and memorable dining experiences.
//         </p>
//       </section>

//       <section
//         id="about-us"
//         className="bg-green-500 p-8 rounded-lg shadow-lg mb-16 relative overflow-hidden"
//       >
//         <div
//           style={{
//             backgroundColor: "#A3D9A5",
//             width: "300px",
//             height: "300px",
//             position: "absolute",
//             right: "-150px",
//             top: "-150px",
//           }}
//         />
//         <div className="relative z-10">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="mb-4">
//             We are dedicated to bringing you the finest culinary experiences.
//             Our team of chefs is passionate about creating dishes that not only
//             taste amazing but also tell a story.
//           </p>
//           <button
//             className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
//             onClick={handleExploreClick}
//           >
//             Explore Our Story
//           </button>
//         </div>
//       </section>

//       <section
//         id="explore"
//         className={`text-center ${
//           isExploreVisible ? "block" : "hidden"
//         } rounded-xl border-(--customGreen) border-2`}
//       >
//         <h2 className="text-3xl font-bold mb-4">Our Journey & Philosophy</h2>
//         <p>
//           Our journey began with a simple idea: to share our love for food with
//           the world. We believe in using the freshest ingredients and
//           traditional cooking methods to create dishes that are both delicious
//           and meaningful.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
