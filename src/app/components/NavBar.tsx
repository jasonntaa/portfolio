"use client";

const NavBar = () => {
  return (
    <nav className="nav-container flex justify-center items-center mx-20 mt-6 p-8 border-2 border-gray-600 rounded-lg m-auto">
      <ul className="nav-links flex justify-evenly gap-100">
        <li className="name">Jason</li>
        <div className="nav-item-container flex gap-5">
          <li className="nav-items">Home</li>
          <li className="nav-items">Projects</li>
          <li className="nav-items">Journey</li>
          <li className="nav-items">Contact</li>
        </div>
        <div></div>
      </ul>
    </nav>
  );
};

export default NavBar;
