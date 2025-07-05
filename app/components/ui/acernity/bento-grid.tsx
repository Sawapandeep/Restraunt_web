import { cn } from "@/lib/util";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-3 gap-4 md:auto-rows-[18rem] md:grid-cols-4 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  //   description,
  // header,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  //   description?: string | React.ReactNode;
  // header?: React.ReactNode;
  image?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-amber-400 p-2 md:p-4  "
        // "bg-white p-2 md:p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
        ,
        className
      )}
    >
      {/* {header} */}
      <div className="transition duration-200 ">
        {image}
        <div className="mt-2 mb-2 text-nowrap font-bold text-amber-400">
          {title}
        </div>
        {/* <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div> */}
      </div>
    </div>
  );
};
