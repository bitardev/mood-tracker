import { Fugaz_One } from "next/font/google";
import React from "react";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Button(props) {
  const { text, dark } = props;
  return (
    <button
      className={`border-solid rounded-full overflow-hidden border-2 border-indigo-600 duration-200 hover:opacity-60 ${
        dark ? "text-white bg-indigo-600 " : "text-indigo-600 "
      }`}
    >
      <p
        className={`${fugaz.className} px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3`}
      >
        {text}
      </p>
    </button>
  );
}
