'use client';

import Image from 'next/image';
import Link from 'next/link';

type PopupProps = {
    content: {
        title: string;
        text: string;
        image?: string;
        button?: {
            label: string;
            link: string;
        };
    };
    onClose: () => void;
};

const Popup = ({ content, onClose }: PopupProps) => {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 p-6 rounded-2xl shadow-xl max-w-md w-full relative space-y-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold text-neutral-500 hover:text-red-500"
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold">{content.title}</h2>
                <p className="text-sm leading-relaxed">{content.text}</p>

                {content.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={400}
                            height={200}
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                )}

                {content.button && (
                    <div className="mt-4">
                        <Link
                            href={content.button.link}
                            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 text-sm"
                        >
                            {content.button.label}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;
