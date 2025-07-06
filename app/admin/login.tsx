import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function LoginPage() {
  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;
    if (email !== 'admin@example.com') {
      alert("Access Denied");
      await auth.signOut();
    } else {
      // redirect to dashboard
      window.location.href = "/admin/dashboard";
    }
  };

  return <button onClick={login}>Login as Admin</button>;
}
