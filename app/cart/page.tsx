"use client";

import { useCart } from "@/context/CartContext";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
    const { cart, clearCart, updateQuantity } = useCart();
    const [userEmail, setUserEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal > 0 ? 3.5 : 0;
    const total = subtotal + delivery;
    const estimate = subtotal > 0 ? Math.floor(Math.random() * 20) + 20 : 0;

    const sendEmail = async () => {
        if (!userEmail) return alert("Please enter your email.");

        setSending(true);
        setSuccessMessage(""); // Reset message on new attempt

        const cartContents = cart
            .map((item) => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
            .join("\n");

        const emailParams = {
            to_email: userEmail,
            cart_contents: cartContents,
            subtotal: subtotal.toFixed(2),
            delivery: delivery.toFixed(2),
            total: total.toFixed(2),
            eta: estimate,
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setSuccessMessage("✅ Order placed successfully! Receipt sent to your email.");
            clearCart();
            setUserEmail("");
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("❌ Failed to send receipt. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="min-h-screen p-8 bg-black text-white max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

            {cart.length === 0 && !successMessage ? (
                <p className="text-gray-500">No items added yet.</p>
            ) : (
                <>
                    {cart.length > 0 && (
                        <>
                            <ul className="space-y-4">
                                {cart.map((item, index) => (
                                    <li key={index} className="flex items-center justify-between border rounded p-4">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={60}
                                                height={60}
                                                className="rounded"
                                            />
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                        className="px-2 bg-gray-200 text-black rounded hover:bg-gray-300 disabled:opacity-50"
                                                    >
                                                        −
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                                        className="px-2 bg-gray-200 text-black rounded hover:bg-gray-300"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 space-y-2 text-sm border-t pt-4">
                                <p>Subtotal: <span className="float-right">${subtotal.toFixed(2)}</span></p>
                                <p>Delivery: <span className="float-right">${delivery.toFixed(2)}</span></p>
                                <p className="text-lg font-bold">Total: <span className="float-right">${total.toFixed(2)}</span></p>
                                <p className="text-green-600">Estimated Delivery: {estimate} minutes</p>
                            </div>

                            <div className="mt-6">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    className="w-full p-2 rounded text-orange-500 mb-4"
                                    required
                                />

                                <button
                                    onClick={sendEmail}
                                    disabled={sending}
                                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold w-full"
                                >
                                    {sending ? "Sending..." : "Email Me My Order & Checkout"}
                                </button>

                                {successMessage && (
                                    <p className="mt-4 text-green-400 font-medium text-center">
                                        {successMessage}
                                    </p>
                                )}
                            </div>
                        </>
                    )}

                    {successMessage && (
                        <p className="mt-10 text-center text-xl font-semibold text-green-400">
                            🎉 {successMessage}
                        </p>
                    )}
                </>
            )}
        </main>
    );
}
