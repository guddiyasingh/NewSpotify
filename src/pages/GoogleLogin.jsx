import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import { useNavigate } from "react-router-dom"

export default function GoogleLoginButton() {
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/") // redirect to home
    } catch (error) {
      console.error(error.message)
      alert(error.message)
    }
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border border-neutral-600 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  )
}
