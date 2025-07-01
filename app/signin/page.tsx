"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ import router

export default function SignInPage() {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const router = useRouter(); // ✅ useRouter

    const handleSubmit = async () => {
        setStatus("Loading...");
        const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
        const res = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        if (!res.ok) {
            setStatus(data.error || "Something went wrong");
        } else {
            setStatus(data.message);

            // ✅ store email to localStorage and redirect
            localStorage.setItem("userEmail", email);
            router.push("/profile");
        }
    };

    return (
        <main className="min-h-screen p-8 bg-black text-white">
            <h1 className="text-3xl font-bold mb-4">
                {isRegister ? "🔐 Register" : "🔑 Sign In"}
            </h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="space-y-4 max-w-md"
            >
                {/* email */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full border px-3 py-2 rounded-md"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* password */}
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full border px-3 py-2 rounded-md"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* submit */}
                <button
                    type="submit"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                    {isRegister ? "Register" : "Sign In"}
                </button>

                {/* toggle */}
                <p
                    onClick={() => {
                        setIsRegister(!isRegister);
                        setStatus("");
                    }}
                    className="text-sm underline cursor-pointer mt-2"
                >
                    {isRegister
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Register"}
                </p>

                {/* status message */}
                {status && <p className="text-sm text-orange-600">{status}</p>}
            </form>
        </main>
    );
}

// "use client";
// import { useState } from "react";

// export default function SignInPage() {
//     const [isRegister, setIsRegister] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [status, setStatus] = useState("");

//     const handleSubmit = async () => {
//         setStatus("Loading...");
//         const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
//         const res = await fetch(endpoint, {
//             method: "POST",
//             body: JSON.stringify({ email, password }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const data = await res.json();
//         if (!res.ok) {
//             setStatus(data.error || "Something went wrong");
//         } else {
//             setStatus(data.message);
//         }
//     };

//     return (
//         <main className="min-h-screen p-8 bg-black text-white">
//             <h1 className="text-3xl font-bold mb-4">
//                 {isRegister ? "🔐 Register" : "🔑 Sign In"}
//             </h1>

//             <form
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                     handleSubmit();
//                 }}
//                 className="space-y-4 max-w-md"
//             >
//                 <div>
//                     <label className="block text-sm font-medium">Email</label>
//                     <input
//                         type="email"
//                         className="mt-1 block w-full border px-3 py-2 rounded-md"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium">Password</label>
//                     <input
//                         type="password"
//                         className="mt-1 block w-full border px-3 py-2 rounded-md"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
//                 >
//                     {isRegister ? "Register" : "Sign In"}
//                 </button>

//                 <p
//                     onClick={() => {
//                         setIsRegister(!isRegister);
//                         setStatus("");
//                     }}
//                     className="text-sm underline cursor-pointer mt-2"
//                 >
//                     {isRegister
//                         ? "Already have an account? Sign in"
//                         : "Don't have an account? Register"}
//                 </p>

//                 {status && <p className="text-sm text-orange-600">{status}</p>}
//             </form>
//         </main>
//     );
// }
