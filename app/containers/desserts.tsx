"use client";

import { Marquee } from "@/app/components/ui/magic/marquee";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const desserts = [
    {
        name: "Chocolate Cake",
        price: "$2.50",
        image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Strawberry Cheesecake",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1621955511667-e2c316e4575d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Vanilla Ice Cream",
        price: "$1.80",
        image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Brownie",
        price: "$1.50",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Donuts",
        price: "$1.20",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Cupcake",
        price: "$1.30",
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fruit Tart",
        price: "$2.20",
        image: "https://images.unsplash.com/photo-1600477063726-b6b2473e43f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Macaron",
        price: "$0.95",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Waffles",
        price: "$2.00",
        image: "https://images.unsplash.com/photo-1666052137730-e2c5c87f5671?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Tiramisu",
        price: "$2.75",
        image: "https://images.unsplash.com/photo-1567608286687-394db5f7520a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function Desserts() {
    const { addToCart } = useCart();

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                GOT A SWEET TOOTH?
            </h2>

            <Marquee className="w-full overflow-hidden" pauseOnHover>
                {desserts.map((dessert, index) => (
                    <div
                        key={index}
                        className="relative group flex flex-col items-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] mx-2 sm:mx-4 rounded p-2"
                    >
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                            <Image
                                src={dessert.image}
                                alt={dessert.name}
                                fill
                                className="object-cover  rounded-lg"
                            />
                        </div>
                        <h3 className="mt-3 font-medium text-black dark:text-white text-sm">
                            {dessert.name}
                        </h3>
                        <p className="text-pink-600 font-bold text-sm">{dessert.price}</p>

                        <button
                            onClick={() =>
                                addToCart({
                                    name: dessert.name,
                                    image: dessert.image,
                                    price: parseFloat(dessert.price.replace("$", "")),
                                })
                            }
                            className="absolute top-2 right-2 bg-pink-500 hover:bg-pink-600 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm transition-opacity group-hover:opacity-100 opacity-100"
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
