import { Link } from "react-router-dom";
import { redBall, yellowBall } from "../constants";
const RedBalls = () => {
  return (
    <div className="flex gap-2">
      <img src={redBall} alt="redBall" className="w-8 h-8" />
      <img src={redBall} alt="redBall" className="w-8 h-8" />
      <img src={redBall} alt="redBall" className="w-8 h-8" />
      <img src={redBall} alt="redBall" className="w-8 h-8" />
      <img src={redBall} alt="redBall" className="w-8 h-8" />
    </div>
  );
};
const YellowBalls = () => {
  return (
    <div className="flex gap-2">
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex w-screen justify-between items-center px-12 py-[3.5px] text-white border-b">
      <Link to={"/"} className="text-xl font-bold">
        Classic 8 Ball Pool
      </Link>

      <div className="flex items-center justify-center gap-3">
        <RedBalls />
        <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">
          player1
        </span>
        <span>vs</span>
        <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">
          player2
        </span>
        <YellowBalls />
      </div>

      <div className="flex gap-3">
        <button className="border-white border hover:bg-slate-700 text-white font-bold py-1 px-4 rounded">
          New Game
        </button>
        <button className="border-white border hover:bg-slate-700 text-white font-bold py-1 px-4 rounded">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Header;
