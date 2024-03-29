import React from "react";
import { Linkdata } from "../data/Linkdata";

const Links = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      {Linkdata &&
        Linkdata.map((data, idx) =>
          (
            <a
              href={data.site}
              target="_blank"
              rel="noreferrer"
              key={idx}
              id={data.id}
              className=" bg-cartBg flex text-sm md:text-base items-center justify-center hover:bg-gray-300 text-black py-2 px-4 border border-gray-200 hover:border-transparent rounded w-2/3"
            >
              {data.name}
            </a>
          )
        )}
    </div>
  );
};

export default Links;
