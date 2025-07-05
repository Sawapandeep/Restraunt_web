"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/acernity/bento-grid";
import items from "@/app/data/items.json";

// Ensure we handle mixed category keys (e.g. "=%category" and "category")
const normalizedItems = items.map((item: any) => ({
  ...item,
  category: item.category || item["=%category"],
}));

const Menu = () => {
  const categories = Array.from(new Set(normalizedItems.map(item => item.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const filteredItems = normalizedItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mx-auto mb-8 py-2 w-[90%]  rounded-xl bg- border border-amber-400">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg font-semibold px-4 py-2 border-b-2 transition duration-200 ${
              selectedCategory === category
                ? "border-lime-400 text-lime-400"
                : "border-transparent text-neutral-400 hover:text-lime-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Items */}
      <BentoGrid className="max-w-5xl mx-auto">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            image={
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-102 md:hover:scale-105 "
              />
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Menu;

// "use client";

// import React from "react";
// import Image from "next/image";
// import { BentoGrid, BentoGridItem } from "@/app/components/ui/acernity/bento-grid";
// import items from "@/app/data/items.json";

// const Menu: React.FC = () => {
//   return (
//     <BentoGrid className="max-w-1xl mx-auto my-8">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           image={
//             <img
//               src={item.image}
//               alt={item.title}
             
//               className="rounded-lg w-auto justify-self-center-safe object-cover "
//             />
//           }
//         />
//       ))}
//     </BentoGrid>
//   );
// };

// export default Menu;
