import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([])

  function addPlus(){
    setArr(prevArr => 
        [...prevArr, "+"]
    )
  }

  function addMinus(){
    setArr(prevArr => 
        [...prevArr, "-"]
    )
  }

  return (
    <>
      <div>
        <button onClick={() => {
            addMinus()
        }}>-</button>

        <button onClick={() => {
            addPlus()
        }}>+</button>
        {arr.toString()}
      </div>
    </>
  );
}
export default Counter;

//
/*const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1);
  } 

  const [cart, setCart] = useState({item: "apple", quantity: 0})
  
  function addApple() {
    setCart(prevCart => ({
        ...prevCart, 
        quantity: prevCart.quantity + 1,
    }))
  }

  function subApple() {
    // 1. Use callBack to get the previous value
    // 2. spread out all properties of the previous state using ...
    // 3. only change the property that you want to change by using previousstate.property in this case prevCart.quantity with quantity being the property
    setCart(prevCart => ({
        ...prevCart, 
        quantity: prevCart.quantity - 1,
    }))
  }

*/

