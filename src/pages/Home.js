import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [tshirtButton, setTshirtButton] = useState(false);
  const [pantsButton, setPantsButton] = useState(false);

  function updateCart(item) {
    setCart([...cart, item]);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Form practice!</h1>
      </div>

      {checkout ? (
         <div
         style={{
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
         }}
       >
        <h3>Items in your cart:</h3>
        {cart.map((item) => 
          <div style={{marginBottom: '8px', border: '1px solid black', padding: '8px'}}>
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
          </div>
          )}

          <Button onClick={() => setCheckout(false)}>Cancel</Button>
          <Button onClick={() => console.log('Submitting cart....')}>Continue</Button>
       </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart.length > 0 && (
            <>
              <p>Items in the cart: {cart.length} </p>
            </>
          )}
          <Item itemName={"tshirt"} price={20} addToCartFunction={updateCart} buttonValue={tshirtButton} setButtonValue={setTshirtButton} />
          <Item itemName={"pants"} price={30} addToCartFunction={updateCart} buttonValue={pantsButton} setButtonValue={setPantsButton} />
          <Button onClick={() => setCheckout(true)}>Proceed to checkout</Button>
        </div>
      )}
    </div>
  );
}
