"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/acernity/bento-grid";
import items from "@/app/data/items.json";

const Main: React.FC = () => {
  return (
    <BentoGrid className="max-w-1xl mx-auto my-8">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          image={
            <img
              src={item.image}
              alt={item.title}
             
              className="rounded-lg w-auto justify-self-center-safe object-cover "
            />
          }
        />
      ))}
    </BentoGrid>
  );
};

export default Main;

// "use client";
// import { cn } from "@/lib/util";
// import React from "react";
// import {
//   BentoGrid,
//   BentoGridItem,
// } from "@/app/components/ui/acernity/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// import Image from "next/image";
// import pizza from "@/public/images/pizza.png";
// import {items} from "@/app/data/items.json";
// const Dish = () => (
//   <div className="flex flex-1 w-auto h-auto min-h-[6rem] rounded-xl">
//     <Image src={pizza} alt="req" className="rounded-xl fit" />
//   </div>
// );



// const Main: React.FC = () => {
//   return (
//     <BentoGrid className="max-w-1xl mx-auto my-8">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           // description={item.description}
//           image={item.image}
//           // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// };

// export default Main;
