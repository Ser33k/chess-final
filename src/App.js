import logo from "./logo.svg";
import "./App.css";
import { Chessboard } from "react-chessboard";
import circle from "./red-circle.svg";
import Board from "./components/Board";

const image =
  '<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="47.4" height="40.65" viewBox="21 18.5 158 135.5"><path d="M25,50 l150,0 0,100 -150,0 z" stroke-width="4" stroke="black" fill="rgb(128,224,255)" fill-opacity="1" ></path><path d="M25,50 L175,150 M25,150 L175,50" stroke-width="4" stroke="black" fill="black" ></path><g transform="translate(0,0)" stroke-width="4" stroke="black" fill="none" ><circle cx="100" cy="30" r="7.5" fill="black" ></circle><circle cx="70" cy="30" r="7.5" fill="black" ></circle><circle cx="130" cy="30" r="7.5" fill="black" ></circle></g></svg>';
console.log(circle);
function App() {
  return (
    <div>
      <Board />
      {/* <Chessboard
        boardWidth={1200}
        customDropSquareStyle={{
          boxShadow: "inset 0 0 2px 6px #000",
        }}
        customDarkSquareStyle={{
          backgroundColor: "#999",
        }}
        customLightSquareStyle={{
          backgroundColor: "#bbb",
        }}
        // customPieces={{
        //   wP: () => (
        //     // <div
        //     //   style={{
        //     //     width: "60px",
        //     //     height: "60px",
        //     //     backgroundColor: "#000",
        //     //     margin: "40px",
        //     //     display: "flex",
        //     //     alignItems: "center",
        //     //   }}
        //     // ></div>
        //     <div
        //       style={{
        //         display: "flex",
        //         alignItems: "center",
        //       }}
        //     >
        //       <img alt="chess" src={circle}></img>
        //     </div>
        //   ),
        // }}
        id="BasicBoard"
      /> */}
    </div>
  );
}

export default App;
