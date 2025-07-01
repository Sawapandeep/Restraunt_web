import { cn } from "@/lib/util";
import { Marquee } from "@/app/components/ui/magic/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The pizza was piping hot and perfectly cheesy. Best delivery ever!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Delivered in 20 minutes and the food was still fresh. Amazing service!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "From burgers to desserts, everything was top-notch. Highly recommended.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sophie",
    username: "@sophie",
    body: "My kids loved the pasta! Fast, fresh, and delicious.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Liam",
    username: "@liam",
    body: "Great portion sizes and the flavors were authentic. Will order again.",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "Smooth experience, easy checkout, and great customer support!",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Noah",
    username: "@noah",
    body: "They remembered my special instructions. That’s rare and awesome.",
    img: "https://avatar.vercel.sh/noah",
  },
  {
    name: "Olivia",
    username: "@olivia",
    body: "Best biryani I’ve had delivered. Perfect spice and aroma!",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Elijah",
    username: "@elijah",
    body: "Really impressed with how hot and tasty everything was on arrival.",
    img: "https://avatar.vercel.sh/elijah",
  },
  {
    name: "Ava",
    username: "@ava",
    body: "Fast delivery, beautiful packaging, and yummy food. Five stars!",
    img: "https://avatar.vercel.sh/ava",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "I’m seriously addicted to their garlic bread. So good!",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Isabella",
    username: "@isabella",
    body: "Tasted like a five-star restaurant at home. Wow!",
    img: "https://avatar.vercel.sh/isabella",
  },
  {
    name: "Mason",
    username: "@mason",
    body: "Ordered late at night and it still came fresh. Love this app!",
    img: "https://avatar.vercel.sh/mason",
  },
  {
    name: "Mia",
    username: "@mia",
    body: "Exceptional flavors and super friendly delivery guy.",
    img: "https://avatar.vercel.sh/mia",
  },
  {
    name: "Logan",
    username: "@logan",
    body: "Even my picky toddler loved the food. That says a lot!",
    img: "https://avatar.vercel.sh/logan",
  },
  {
    name: "Amelia",
    username: "@amelia",
    body: "App UI is smooth and intuitive, and food is always great.",
    img: "https://avatar.vercel.sh/amelia",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "I order weekly. Reliable, consistent, and very tasty.",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Harper",
    username: "@harper",
    body: "Food arrived faster than expected and was beautifully packed.",
    img: "https://avatar.vercel.sh/harper",
  },
  {
    name: "Alexander",
    username: "@alex",
    body: "The butter chicken is just next level. So rich and flavorful.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Charlotte",
    username: "@charlotte",
    body: "Easy to track delivery and food was right on time.",
    img: "https://avatar.vercel.sh/charlotte",
  },
  {
    name: "Daniel",
    username: "@daniel",
    body: "Had a small issue with the app and support resolved it in minutes.",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Ella",
    username: "@ella",
    body: "I tried their dessert box and I’m hooked! Everything’s delicious.",
    img: "https://avatar.vercel.sh/ella",
  },
  {
    name: "Henry",
    username: "@henry",
    body: "Consistently amazing food. These folks know how to deliver quality.",
    img: "https://avatar.vercel.sh/henry",
  },
  {
    name: "Chloe",
    username: "@chloe",
    body: "I can’t believe how fast it got here. And still warm!",
    img: "https://avatar.vercel.sh/chloe",
  },
  {
    name: "Matthew",
    username: "@matt",
    body: "Big fan of their healthy bowls. Fresh and filling every time.",
    img: "https://avatar.vercel.sh/matt",
  },
  {
    name: "Zoe",
    username: "@zoe",
    body: "Loved the eco-friendly packaging. Tasty and thoughtful!",
    img: "https://avatar.vercel.sh/zoe",
  },
  {
    name: "Sebastian",
    username: "@seb",
    body: "Hands down the best food delivery in the city.",
    img: "https://avatar.vercel.sh/seb",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-orange-600">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      id="Testimonials"
    >
      <Marquee pauseOnHover className="[--duration:150s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:150s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
