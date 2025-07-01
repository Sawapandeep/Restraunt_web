'use client';

import { cn } from '@/lib/util'; // Optional utility for classNames
import Image from 'next/image';
import { useEffect, useState } from 'react';

type SlideContent = {
  image: string;
  title: string;
  description: string;
};

const slidesData: SlideContent[] = [
  {
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Delicious Pizza Hot from the Oven',
    description: 'Crispy, cheesy, and loaded with fresh toppings. Ready to satisfy your cravings!',
  },
  {
    image: 'https://images.unsplash.com/photo-1703219338561-074c44c34c18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Juicy Burgers & Crispy Fries',
    description: 'Grilled to perfection and served with a side of golden fries.',
  },
  {
    image: 'https://images.unsplash.com/photo-1588238142232-7108fb7dcbb6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Refreshing Drinks & Cool Beverages',
    description: 'From sodas to smoothies – quench your thirst with our wide drink selection.',
  },
  {
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Decadent Desserts to End on a Sweet Note',
    description: 'Indulge in our handcrafted cakes, pastries, and ice creams.',
  },
];

export default function CarouselContainer() {
  const [current, setCurrent] = useState(0);
  const length = slidesData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="relative w-full h-[800px] overflow-hidden rounded-xl shadow-lg">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out',
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow">
              {slide.title}
            </h2>
            <p className="text-grey-600 text-lg mb-6 max-w-xl drop-shadow">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 'use client';

// import { cn } from '@/lib/util'; // Optional utility for classNames
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// type SlideContent = {
//   image: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonHref: string;
// };
// const slidesData: SlideContent[] = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Delicious Pizza Hot from the Oven',
//     description: 'Crispy, cheesy, and loaded with fresh toppings. Ready to satisfy your cravings!'

//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1606756796725-1b57b1d6f21a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Juicy Burgers & Crispy Fries',
//     description: 'Grilled to perfection and served with a side of golden fries.'
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1601315484718-07b7d48069cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Refreshing Drinks & Cool Beverages',
//     description: 'From sodas to smoothies – quench your thirst with our wide drink selection.'
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1551022379-0ef102f0309d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Decadent Desserts to End on a Sweet Note',
//     description: 'Indulge in our handcrafted cakes, pastries, and ice creams.'
//   },
// ];


// export default function CarouselContainer() {
//   const [current, setCurrent] = useState(0);
//   const length = slidesData.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % length);
//     }, +5000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, [length]);

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
//       {slidesData.map((slide, index) => (
//         <div
//           key={index}
//           className={cn(
//             'absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out',
//             index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           )}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             className="object-cover"
//             priority={index === 0}
//           />
//           <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow">
//               {slide.title}
//             </h2>
//             <p className="text-white text-lg mb-6 max-w-xl drop-shadow">
//               {slide.description}
//             </p>
//             {/* <Link
//               href={slide.buttonHref}
//               className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
//             >
//               {slide.buttonText}
//             </Link> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
