import "./Games.css";
import GameBox from "./GameBox";

function Games(props) {
  return (
    <div className="flexing">
      {
        props.item.map(
          GameData => (
            <GameBox
            GameName={GameData.GameName}
            Price={GameData.Price}
            Image={GameData.Image}
          />
          )
        )
      }
    </div>
  );
}

export default Games;
