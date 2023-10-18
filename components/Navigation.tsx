//Kilde: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
import "tailwindcss/tailwind.css"; // Importert Tailwind CSS. 
import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Hjem</button>
      </Link>
      {" | "}
      <Link href="/questions">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Spørsmål</button>
      </Link>
    </nav>
  );
};

export default Navigation;
