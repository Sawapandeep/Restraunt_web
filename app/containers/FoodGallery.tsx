// 'use client'

// import { BentoGrid } from "../components/ui/acernity/bento-grid";

// 		const FoodGallery = () =>{
// 			return (
// 			<div id="FoodGallery">
//                 <BentoGrid/>
//             </div>
// 			);
// 			};

// 			export default  FoodGallery;


'use client';

import data from "@/app/data/data.json";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import React from 'react';
import { BentoGrid, BentoGridItem } from "../components/ui/acernity/bento-grid";

// Mapping icon string to component
const iconMap: Record<string, React.ReactNode> = {
	IconArrowWaveRightUp: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	IconBoxAlignRightFilled: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
	IconBoxAlignTopLeft: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
	IconClipboardCopy: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
	IconFileBroken: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	IconSignature: <IconSignature className="h-4 w-4 text-neutral-500" />,
	IconTableColumn: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
};

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const FoodGallery = () => {
	return (
		<div id="FoodGallery" className="max-w-5xl mx-auto px-4">
			<BentoGrid>
				{data.map((item, index) => (
					<BentoGridItem
						key={index}
						title={item.title}
						icon={iconMap[item.icon]}
						header={<Skeleton />}
						className={index === 3 || index === 6 ? "md:col-span-2" : ""}
					/>
				))}
			</BentoGrid>
		</div>
	);
};

export default FoodGallery;
