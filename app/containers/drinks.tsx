"use client";

import { Marquee } from "@/app/components/ui/magic/marquee";
import { useCart } from "@/context/CartContext";
import Image from "next/image";


const products = [
    {
        name: "Coca-Cola",
        price: "$1.10",
        image: "/images/cocacola.png",
    },
    {
        name: "Pepsi",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1531384370597-8590413be50a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fanta",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sprite",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mountain Dew",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Limca",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Red Bull",
        price: "$1.79",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Monster Energy",
        price: "$1.89",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

];

export function Drinks() {
    const { addToCart } = useCart(); // ✅ MUST be declared here

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                NEED REFRESHMENTS!!?
            </h2>

            <Marquee className="w-full overflow-hidden" pauseOnHover >
                {products.map((product, index) => (

                    <div
                        key={index}
                        className="relative group flex flex-col items-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] mx-2 sm:mx-4 rounded p-2"
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