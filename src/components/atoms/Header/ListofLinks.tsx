import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";

type props = {
  showSearch: boolean;
};
export const links = [
  { href: "/", label: "Home" },
  { href: "/articles/clothing", label: "Clothing" },
  { href: "articles/shoes", label: "Shoes" },
  { href: "articles/furniture", label: "Furniture" },
  { href: "/articles/electronics", label: "Electronics" },
  { href: "articles/other", label: "other" },
  { href: "/login", label: "Login" },
  { href: "/cart", label: "Cart" },
];

export const ListLinks: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  return (
    <>
      <ul className="flex items-center">
        <li>
          <form onSubmit={handleSearch} className="flex items-center p-4">
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-md border-gray-400"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>
        </li>
        {links.map(({ href, label }) => (
          <li
            key={href}
            className={`mr-8 uppercase border-gray-400 ${
              router.asPath === href ? "underline" : ""
            }`}
          >
            <Link
              href={href}
              className={` hover:text-gray-600 ${
                label === "Login" || label === "Cart"
                  ? "text-[#144FA7]"
                  : "text-gray-800"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
