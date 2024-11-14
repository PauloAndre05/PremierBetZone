import { FC } from "react";
import { CardNeswsType } from "../types/types";

export const CardNews: FC<CardNeswsType> = ({ id, image, title }) => {
  return (
    <a
      href={`/promocoes/${id}`}
      className="flex flex-col bg-white h-96 rounded-xl overflow-hidden"
    >
      <div className="w-full h-[45%]">
        <img
          src={image}
          className={`w-full h-full object-cover`}
        />
      </div>
      <span className="p-3 text-justify flex-grow">
        {title}
      </span>
    </a>
  );
};
