import {
  faFontAwesome,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div
      className="flex justify-center items-start pb-12 pt-12
  "
    >
      <div className="grid grid-cols-2 gap-4 w-4/5 max-w-4xl">
        <Link
          className="bg-zinc-200 shadow p-3 rounded-md w-full h-full flex flex-row  justify-center items-center gap-4"
          href="https://github.com"
          target="blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
          <p>Git Hub</p>
        </Link>
        <Link
          className="bg-zinc-200 shadow p-3 rounded-md w-full h-full flex flex-row  justify-center items-center gap-4"
          href="https://react.dev/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faReact} className="h-10 w-10" />
          <p>React</p>
        </Link>
        <Link
          className="bg-zinc-200 shadow p-3 rounded-md w-full h-full flex flex-row  justify-center items-center gap-4"
          href="https://fontawesome.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFontAwesome} className="h-10 w-10" />
          <p>Font Awesome</p>
        </Link>
        <Link
          className="bg-zinc-200 shadow p-3 rounded-md w-full h-full flex flex-row  justify-center items-center gap-4"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquare} className="h-10 w-10" />
          <p>Vercel</p>

          {/* <Image src="/vercel.svg" width="120" height="120" alt="vercel-logo" />  */}
          {/* Above is an example of importing an SVG into a component */}
        </Link>
      </div>
    </div>
  );
};

export default Links;
