import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Intro from "../../components/intro/Intro"
import Bottom from "../../components/bottom/Bottom"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Bottom />
    </div>
  )
}
