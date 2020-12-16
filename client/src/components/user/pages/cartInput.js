import React, { useState } from "react";
import { cartIncrement } from "../../../redux/_actions/cartAction";

const CartInput = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={quantity}
        className="border-right-0"
        
      />
      <div className="AdjustQuantity">
        <i className="fa fa-plus border-bottom-0" onClick={() => setQuantity((quantity) => quantity + 1)}/>
        <i className="fa fa-minus" onClick={() => setQuantity((quantity) => quantity - 1)}/>
      </div>
    </div>
  );
};

export default CartInput;
