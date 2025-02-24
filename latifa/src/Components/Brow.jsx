
import React from "react";

const brands = ["Web-Development", "Software Development", "Cybersecurity", "Mobile App Development"];

const fontStyles = {
  "Web-Development": "font-berlin-sans-fb",
  "Software Development": "font-algerian",
  "Cybersecurity": "font-arial-narrow",
  "Mobile App Development": "font-apotos",
};

const Brow = () => {
  return (
    <div className="bg-gray-950 py-4 overflow-hidden">
      <div className="flex space-x-8 whitespace-nowrap items-center justify-center">
        {brands.map((brand, index) => (
          <span key={index} className={`text-gray-300 text-xl uppercase ${fontStyles[brand]}`}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brow;



