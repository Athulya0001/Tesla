import React from "react";

const Header = () => {
  return (
    <div className="flex">
      <header className="flex justify-center gap-x-2 items-center w-full bg-amber-100 py-3">
        <div>
          <h3 className="text-sm"> Inventory Model Y Available Now Explore Reduced Pricing</h3>
        </div>
        <div>
          <button className="text-sm bg-black rounded-md text-white px-2 py-1">View Inventory</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
