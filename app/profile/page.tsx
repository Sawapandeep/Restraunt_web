"use client";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [name, setName] = useState("");

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        if (email) {
            const username = email.split("@")[0];
            setName(username.charAt(0).toUpperCase() + username.slice(1));
        }
    }, []);

    return (
        <main className="min-h-screen p-8 bg-black text-white">
            <h1 className="text-3xl font-bold mb-4">👤 My Profile</h1>
            <p className="text-orange-600">Welcome, {name || "Guest"}!</p>
        </main>
    );
}

// export default function ProfilePage() {
//     return (
//         <main className="min-h-screen p-8 bg-black text-white">
//             <h1 className="text-3xl font-bold mb-4">👤 My Profile</h1>
//             <p className="text-orange-600">User details will be shown here.</p>
//         </main>
//     );
// }
