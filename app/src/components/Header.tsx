import { Link } from "react-router-dom";
import { redBall, yellowBall } from "../constants";
const RedBalls = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={redBall} alt="redBall" className="w-8 h-8" />
      <img src={redBall} alt="redBall" className="w-8 h-8" />
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
    <div className="flex gap-2 items-center">
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
      <img src={yellowBall} alt="yellowBall" className="w-8 h-8" />
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
    <div className="flex flex-col xl:flex-row w-screen justify-between xl:items-center md:items-start items-center px-10 py-[0.52rem] text-white border-b">
      <Link to={"/"} className="text-xl font-bold flex">
        Classic 8 Ball Pool
      </Link>

      <div className="flex max-md:flex-col items-center justify-center md:gap-3">
        <div className="flex">
          <RedBalls />
          <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">
            player1
          </span>
        </div>
        <span>vs</span>
        <div className="flex max-md:flex-row-reverse">
          <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">
            player2
          </span>
          <YellowBalls />
        </div>
      </div>

      <div className="flex flex-row gap-3 justify-end">
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
