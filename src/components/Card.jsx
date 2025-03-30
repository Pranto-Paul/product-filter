import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, reviews, prevPrice, newPrice, company }) => {
  return (
    <section className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img src={img} alt={title} className="w-full h-48 object-contain mb-4" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{company}</p>
        <section className="flex items-center gap-1">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <span className="text-sm text-gray-500 ml-1">{reviews}</span>
        </section>
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <del className="text-gray-400">{prevPrice}</del>
            <span className="font-bold">${newPrice}</span>
          </div>
          <div className="cursor-pointer hover:text-red-500">
            <BsFillBagHeartFill className="text-xl" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
