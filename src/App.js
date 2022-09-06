import Games from "./Games";
import "./App.css";
import InputBox from "./InputBox";
import React, { useState } from "react";

let GameDescription = [
  {
    GameName: "PUBG",
    Price: "Rs. 1000",
    Image: "https://images.indianexpress.com/2020/09/PUBG-mobile-1-1.jpg",
  },
  {
    GameName: "Call of Duty",
    Price: "Rs. 2000",
    Image:
      "https://image.api.playstation.com/cdn/UP0002/CUSA03522_00/2iR9UJ4nCRHgmy43kgACqSx3I0tMZrHlguvGWvDeJjkGq5UJXw1ibERIe0lzt4s3.png",
  },
  {
    GameName: "GTA V",
    Price: "Rs. 1200",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYARxZ9DGqJbOucteAv0gOHDPPUTCxUNMOaAM9frueRA&s",
  },
  {
    GameName: "Minecraft",
    Price: "Rs. 1200",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIT4ffuHPk12gzUef7RiSUgMZilpLzAGpfHXR8zjqc&s",
  },
  {
    GameName: "Among Us",
    Price: "Rs. 1500",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjONx93l3v2jeKjda2d94Uibtl5T0zauewO_FEyfq&s",
  },
  {
    GameName: "Super Mario 3",
    Price: "Rs. 1350",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XMgQQDg7SsWmFhEciMaqhBpCbucsP7muQBd3uKWSsA&s",
  },
];
function App() {
  const [GameData, setGameData] = useState(GameDescription);

  const SaveGameHandler = (enterdGameDetail) => {
    const updatedGameData = [enterdGameDetail, ...GameData];
    console.log(updatedGameData);

    setGameData(updatedGameData);
  };

  return (
    <div className="xyz">
      <h1 className="heading">Welcome to my Game Store</h1>
      <InputBox onSaveGameData={SaveGameHandler} />

      <Games item={GameData} />
    </div>
  );
}

export default App;
