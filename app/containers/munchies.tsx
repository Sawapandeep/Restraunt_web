"use client";

import { useCart } from "@/context/CartContext";
import { Marquee } from "@/app/components/ui/magic/marquee";
import Image from "next/image";

const products = [
    {
        name: "Classic Cheeseburger",
        price: "$5.99",
        image:
            "https://images.pexels.com/photos/18713425/pexels-photo-18713425/free-photo-of-fast-food-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Double Cheeseburger",
        price: "$9.00",
        image:
            "https://images.pexels.com/photos/21820165/pexels-photo-21820165/free-photo-of-cheeseburger-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Pasta",
        price: "$10.00",
        image:
            "https://images.pexels.com/photos/12800961/pexels-photo-12800961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Mac and Cheese",
        price: "$9.50",
        image:
            "https://images.pexels.com/photos/806357/pexels-photo-806357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "French Fries",
        price: "$3.00",
        image:
            "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Onion Rings",
        price: "$4.00",
        image:
            "https://images.pexels.com/photos/1797171/pexels-photo-1797171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Chicken Nuggets",
        price: "$6.00",
        image:
            "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Crispy Chicken Sandwich",
        price: "$8.50",
        image:
            "https://images.pexels.com/photos/1600732/pexels-photo-1600732.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        name: "Spicy Chicken Burger",
        price: "$9.00",
        image:
            "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Loaded French Fries",
        price: "$5.00",
        image:
            "https://images.pexels.com/photos/30204394/pexels-photo-30204394/free-photo-of-delicious-loaded-fries-with-toppings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Veggie Burger",
        price: "$8.00",
        image:
            "https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        name: "Chicken Wrap",
        price: "$7.50",
        image:
            "https://images.pexels.com/photos/15010305/pexels-photo-15010305/free-photo-of-close-up-photo-of-a-burrito.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export function Munchies() {
    const { addToCart } = useCart()
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                FEATURED MUNCHIES
            </h2>
            <p className="text-sm sm:text-base text-orange-600 mb-8">
                Best Seller Product This Season!
            </p>
            <Marquee className="w-full overflow-hidden" pauseOnHover reverse>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative group flex flex-col items-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] mx-2 sm:mx-4  rounded p-2"
                    >
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover  rounded-lg"
                            />
                        </div>
                        <h3 className="mt-3 font-medium text-black dark:text-white text-sm">
                            {product.name}
                        </h3>
                        <p className="text-orange-600 font-bold text-sm">
                            {product.price}
                        </p>

                        {/* ➕ Button, now always visible and correctly placed */}
                        <button
                            onClick={() =>
                                addToCart({
                                    name: product.name,
                                    image: product.image,
                                    price: parseFloat(product.price.replace("$", "")),
                                })
                            }
                            className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm transition-opacity group-hover:opacity-100 opacity-100"
                            title="Add to cart"
                        >
                            +
                        </button>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
{/* <Marquee className="w-full overflow-hidden" pauseOnHover>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative group flex flex-col items-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] mx-2 sm:mx-4 rounded p-2"
                    >
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 ">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain "
                            // rounded-lg
                            />
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-medium text-black dark:text-white text-xs sm:text-sm lg:text-base">
                            {product.name}
                        </h3>
                        <p className="text-orange-600 font-bold mt-1 text-xs sm:text-sm lg:text-base">
                            {product.price}
                        </p>
                        <button
                            className="absolute top-2 right-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
                            onClick={() =>
                                addToCart({
                                    name: product.name,
                                    image: product.image,
                                    price: parseFloat(product.price.replace("$", "")),
                                })
                            }
                            title="Add to Cart"
                        >
                            +
                        </button>
                    </div>
                ))}
            </Marquee>
        </section>
    );
} */}
