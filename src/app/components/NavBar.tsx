"use client";

const NavBar = () => {
  return (
    <nav className="nav-container flex justify-center items-center mx-20">
      <ul className="nav-links text-white flex justify-evenly gap-50 w-full mt-6 p-8 border-2 border-gray-600 rounded-lg m-auto bg-black">
        <li className="name">Jason</li>
        <div className="nav-item-container flex gap-5">
          <li className="nav-items">Home</li>
          <li className="nav-items">Projects</li>
          <li className="nav-items">Journey</li>
          <li className="nav-items">Contact</li>
        </div>
        <div>
          <button className="text-white">Switch</button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
