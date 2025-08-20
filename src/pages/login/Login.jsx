import "./login.css"
import Navbar from "../../components/navbar/Navbar"
import Bottom from "../../components/bottom/Bottom"
import LoginSignin from "../../components/loginSignin/LoginSignin.jsx"

export default function Login() {
  return (
    <div>
      <Navbar/>
      <LoginSignin/>
      <Bottom/>
    </div>
  )
}
