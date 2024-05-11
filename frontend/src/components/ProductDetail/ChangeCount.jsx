import { useState } from "react";

const ChangeCount = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex mt-10 justify-start items-center">
      <p className="font-bold">Quantity:</p>
      <div className="flex pl-5">
        <button
          className="font-bold text-[25px] border border-gray-300 w-8 mt-1"
          onClick={decrementQuantity}
        >
          -
        </button>
        <div className="px-5 py-1 text-[25px] border border-gray-300 mt-1">
          {quantity}
        </div>
        <button
          className="font-bold text-[25px] border border-gray-300 w-8 mt-1"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <div className="pl-5">
        <p>{300} products available</p>
      </div>
    </div>
  );
};
export default ChangeCount;