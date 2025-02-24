
import { useState } from "react";

const Monday = () => {
  const categories = [
    "All",
    "Integration",
    "Responsiveness",
    "Maintenance",
    "nteractivity",
    "SEO",
  ];
  
  const [active, setActive] = useState("All");

  return (
    <div  className="flex space-x-2 bg-black p-3 justify-center items-center">
        <div className="flex space-x-4 bg-gray-950 p-4 rounded-xl justify-center items-center w-2.5/1 mx-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${
            active === category ? "bg-yellow-700 text-black" : "bg-gray-950"
          }`}
        >
          {category}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Monday;
