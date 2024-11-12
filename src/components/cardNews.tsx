import { FC } from "react";
import { CardNeswsType } from "../types/types";

export const CardNews: FC<CardNeswsType> = ({ id, image, title }) => {
  return (
    <a
      href={`/promocoes/${id}`}
      className="flex flex-col bg-white h-96 rounded-xl overflow-hidden"
    >
      <div className="w-full h-[12rem]">
        <img
          src={image}
          className={`w-full h-full object-cover ${
            id === 3 ? "object-top" : ""
          }`}
        />
      </div>
      <span className="text-center font-semibold text-lg flex-grow p-5 ">
        {title}
      </span>
    </a>
  );
};
