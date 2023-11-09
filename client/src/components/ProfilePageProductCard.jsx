import axios from "axios";
import React from "react";

const ProfilePageProductCard = ({
  id,
  category,
  desc,
  image,
  isApproved,
  name,
  price,
}) => {
  const deleteProduct = () => {
    // console.log(id);
    axios
      .post("http://localhost:3000/deleteProductById", {
        id: id,
      })
      .then((res) => {
        alert("Product Has Been Deleted!");
        window.location.reload();
      })
      .catch((err) => {
        alert("Product could not be deleted");
      });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-2 sm:m-4 lg:m-6 xl:m-8 flex gap-4">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded-md"
        />
      </div>
      <div className="mt-2 flex-1">
        <div className="text-gray-600 text-sm">{category}</div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-700 mt-2">{desc}</p>
        <div className="mt-4 w-full flex justify-between items-center gap-5">
          <div className="text-lg font-semibold text-indigo-600">${price}</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 text-end">
              {isApproved ? (
                <span className="bg-slate-400 text-white rounded-full px-2 py-1 text-sm">
                  Approved
                </span>
              ) : (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                  Not Approved
                </span>
              )}
            </div>
            <button
              onClick={deleteProduct}
              className="bg-red-500 text-white rounded-full px-2 py-1 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageProductCard;
