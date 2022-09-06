import "./GameBox.css";

import React, { useState } from "react";
function GameBox(props) {
//   const [newGameName, setNewGameName] = useState("");
//   const [GameName, setGameName] = useState(props.GameName);
//   const changeHandler = (event) => {
//     setNewGameName(event.target.value);
//   };
//   const clickHandler = () => {
//     setGameName(newGameName);
//   };
  return (

      <div className="GameBox">
        <div className="GameImg">
          <img src={props.Image} height="200" width="350"></img>
        </div>
        <div className="GameDescription">
          <div className="AddToCart">
            <span> Add to cart + </span>
          </div>
          <div className="Price">
            <span>{props.Price}</span>
          </div>
        </div>
        <div className="GameName">
          <span>{props.GameName}</span>
        </div>
        {/* <input type="text" value={newGameName} onChange={changeHandler} />
        <button onClick={clickHandler}>Change Game Name</button> */}
      </div>

  );
}

export default GameBox;
