import { Menu } from "lucide-react"
import { useState } from "react"


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center md:bg-blue-900 bg-blue-500 h-20 ">
      <div className="text-white font-extrabold ml-10">
        Logo
      </div>
      <div className="hidden mr-10 sm:flex justify-between items-center gap-6">
        <div className=" flex items-center gap-6 mr-2">
           <h2 className="text-white">Home</h2>
           <h2 className="text-white">About</h2>
           <h2 className="text-white" >Projects</h2>
        </div>
        <button className="bg-white text-blue-900 rounded-sm p-2">Register</button>
        <button className="bg-white text-blue-900 rounded-sm p-2">Login</button>
      </div>
      <div className="block text-white font-extrabold sm:hidden mr-10 flex items-center ">
        <button onClick={
          () => setMenuOpen(!menuOpen)
        }>
          <Menu />
        </button>
      </div>
        {menuOpen && (
          <div className="h-full absolute top-20 right-0 w-40 bg-gray-100 p-4 flex flex-col items-center sm:hidden
              transition-transform duration-300 ease-in-out ">
            <h2 className="text-blue-500 py-2">Home</h2>
            <h2 className="text-blue-500 py-2">About</h2>
            <h2 className="text-blue-500 py-2">Projects</h2>
            <button className="bg-blue-500 text-white rounded-sm p-2 w-full mt-2">Register</button>
            <button className="bg-blue-500 text-white rounded-sm p-2 w-full mt-2">Login</button>
          </div>
        )}
    </header>
  )
}
