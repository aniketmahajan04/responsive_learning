
import { useState } from "react";
import { Menu } from "lucide-react";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white h-full p-5 transition-all duration-300 ${isOpen ? "w-60" : "w-16"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="mb-6">
          <Menu />
        </button>
        <ul className="space-y-4">
          <li className="hover:bg-blue-700 p-2 rounded">Dashboard</li>
          <li className="hover:bg-blue-700 p-2 rounded">Profile</li>
          <li className="hover:bg-blue-700 p-2 rounded">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p>Here goes the content...</p>
      </div>
    </div>
  );
}
