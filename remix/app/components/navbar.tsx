import { Link } from "@remix-run/react";

export default function Navbar() {
  const links = ["Talks", "Workshops"];

  return (
    <div className="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul className="relative">
        {links.map((link, index) => (
          <li className="relative" key={index}>
            <Link
              to={link.toLowerCase()}
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
