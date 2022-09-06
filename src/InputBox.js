import "./InputBox.css";

import React, {useState} from "react";
function InputBox(props) {
    const [enteredImageURL, setEnteredImageURL]=useState("");
    const [enteredPrice, setEnteredPrice]=useState("");
    const [enteredGameName, setEnteredGameName]=useState("");

    const ImageURLChangeHandle=(event)=>{
        setEnteredImageURL(event.target.value);
    }
    const PriceChangeHandle=(event)=>{
        setEnteredPrice(event.target.value);
    }
    const GameNameChangeHandle=(event)=>{
        setEnteredGameName(event.target.value);
    }

    const clickHandler=()=>{
      setEnteredImageURL(enteredImageURL);
      setEnteredPrice(enteredPrice);
      setEnteredGameName(enteredGameName);
    }

    const SubmitHandler=(event)=>{
      event.preventDefault();

      const GameData={
        Image: enteredImageURL,
        Price: enteredPrice,
        GameName: enteredGameName
      }
      props.onSaveGameData(GameData);
      setEnteredImageURL('');
      setEnteredPrice(" ");
      setEnteredGameName(" ");
      console.log(GameData);
    }
  return (
    <form className="FormBox" onSubmit={SubmitHandler}>
      <div className="InputBox">
        <div>
            <label>Image Url</label>
            <input type="text"  className="TextBox" placeholder="Image Url"  onChange={ImageURLChangeHandle}  value={enteredImageURL}></input>
        </div>
        <div>
            <label>Price</label>
            <input type="text" className="TextBox" placeholder="Price" onChange={PriceChangeHandle} value={enteredPrice} ></input>
        </div>
        <div>
            <label>Game Name</label>
            <input type="text" className="TextBox" placeholder="Game Name" onChange={GameNameChangeHandle} value={enteredGameName} ></input>
        </div>
      </div>
      <button type="submit" className="SubmitButton" onClick={clickHandler}>
        Add Game
      </button>
    </form>
  );
}

export default InputBox;
