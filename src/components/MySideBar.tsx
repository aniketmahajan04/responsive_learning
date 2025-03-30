import { Menu } from "lucide-react"
import { useState } from "react"


export const MySideBar = () => {
  const [isOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen">
      <div className={`${isOpen ? "bg-blue-900" : "bg-transparent"} text-white flex flex-col p-5 h-full transition-all duration-300 ${isOpen ? "w-60" : "w-16"}  shadow-md`}>
        <button className={`mb-6 ${isOpen ? "text-gray-100" : "text-blue-900"}`} onClick={() => setSidebarOpen(!isOpen)}>
          <Menu />
        </button>
        <ul className={`space-y-4 ${isOpen ? "block" : "hidden"}`}>
          <li className="hover:bg-blue-700 transition-all ease-in-out duration-300 rounded-sm p-2">Dashboard</li>
          <li className="hover:bg-blue-700 transition-all ease-in-out duration-300 rounded-sm p-2" >Profile</li>
          <li className="hover:bg-blue-700 transition-all ease-in-out duration-300 rounded-sm p-2">Setting</li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <h3 className="text-2xl font-bold">Main Content Area</h3>
        <p>Here goes the content...</p>
      </div>
    </div>
  )
}
