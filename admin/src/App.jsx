import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";


export default function App(){
  return(
    <main className="bg-primary text-transparent">
      <Navbar/>
      <Admin />
    </main>
  )
}