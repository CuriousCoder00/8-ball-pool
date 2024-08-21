import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-screen justify-between items-center px-12 py-[3.5px] text-white border-b">
      <Link to={"/"} className="text-xl font-bold">
        Classic 8 Ball Pool
      </Link>

      <div className="flex items-center justify-center gap-3">
        <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">player1</span>
        <span>vs</span>
        <span className="border-2 border-white hover:border-green-500 px-3 py-1 rounded-lg">player2</span>
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
