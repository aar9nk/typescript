import { Button } from "@mui/material";

export default function Item({itemName, price, addToCartFunction, buttonValue, setButtonValue}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        border: "1px solid black",
        padding: "16px",
        marginTop: '20px',
      }}
    >
      <div>
        <p>{itemName}</p>
        <p>price: ${price}</p>
      </div>
      <Button
      disabled={buttonValue}
        onClick={() => {
          addToCartFunction({name: itemName, price: price});
          setButtonValue(true);
        }}
      >
        {buttonValue ? 'Already added to the cart' : 'Add' }
      </Button>
    </div>
  );
}
