//Kilde: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor

import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a>Hjem</a>
      </Link>
      {" | "}
      <Link href="/questions">
        <a>Spørsmål</a>
      </Link>
    </nav>
  );
};

export default Navigation;
