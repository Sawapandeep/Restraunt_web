'use client';

import {
    FaCcAmex,
    FaCcMastercard,
    FaCcPaypal,
    FaCcVisa,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!subscriberEmail) {
            setStatusMessage("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setStatusMessage("");

        const templateParams = {
            to_email: subscriberEmail,
            discount_code: "WELCOME20"
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_WELCOME!, // separate template for welcome
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatusMessage("🎉 Welcome! Discount code sent to your email.");
            setSubscriberEmail("");
        } catch (error) {
            console.error("Email send error:", error);
            setStatusMessage("❌ Failed to send email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 text-sm font-sans">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand & Newsletter */}
                <div>
                    <h2 className="text-2xl font-extrabold text-orange-600 mb-2">
                        <img src="logo.svg" alt="FoodieHUB" className="h-6 w-auto" />
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        Sign up for delicious updates and get <strong>20% off</strong> your first order!
                    </p>
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center border border-neutral-300 dark:border-neutral-600 rounded overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            value={subscriberEmail}
                            onChange={(e) => setSubscriberEmail(e.target.value)}
                            className="flex-1 px-3 py-2 text-sm bg-transparent focus:outline-none dark:text-white"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-black text-white px-4 py-2 hover:bg-neutral-800 transition"
                        >
                            {loading ? "Sending..." : <HiArrowRight />}
                        </button>
                    </form>
                    {statusMessage && (
                        <p className="text-sm mt-2 text-orange-500">{statusMessage}</p>
                    )}
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-white mb-3">Explore</h3>
                    <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                        {['Menu', 'Deals & Offers', 'Franchise', 'Delivery Info', 'Gift Cards'].map((item) => (
                            <li key={item} className="hover:text-orange-600 transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-white mb-3">Support</h3>
                    <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                        {['Help Center', 'Contact Us', 'Track Order', 'Returns', 'Privacy Policy'].map((item) => (
                            <li key={item} className="hover:text-orange-600 transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-neutral-500 dark:text-neutral-400 text-xs space-y-4 md:space-y-0">
                <p>©2025 FoodieHuB. All rights reserved.</p>
                <div className="flex flex-wrap gap-4">
                    <FaCcVisa size={24} />
                    <FaCcPaypal size={24} />
                    <FaCcMastercard size={24} />
                    <FaCcAmex size={24} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
