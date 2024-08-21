import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="fixed inset-0 bg-green-950">
        <img
          src="/assets/sprites/main_menu_background.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[15%] left-[10%] transform">
        <h1 className="md:text-6xl sm:text-5xl text-4xl text-white font-Matemasie">
          Classic 8 Ball Pool
        </h1>
      </div>
      <div className="grid w-full h-screen grid-cols-2 place-items-center place-content-center md:gap-2 sm:gap-4 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-8 items-start justify-center w-96">
          <Link
            to="/game"
            className=" p-4 bg-green-500 hover:bg-green-600 hover:scale-x-105 hover:scale-y-110 hover:translate-x-5 duration-200 z-10 text-white font-bold text-2xl rounded-lg mx-auto w-full"
          >
            Play New Game ( P v P )
          </Link>
          <Link
            to="/game"
            className=" p-4 bg-green-500 hover:bg-green-600 hover:scale-x-105 hover:scale-y-110 hover:translate-x-5 duration-200 z-10 text-white font-bold text-2xl rounded-lg mx-auto w-full"
          >
            Play New Game ( P v AI )
          </Link>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-8 items-start justify-center w-96">
          <Link
            to="/game"
            className=" p-4 bg-green-500 hover:bg-green-600 hover:scale-x-105 hover:scale-y-110 hover:translate-x-5 duration-200 z-10 text-white font-bold text-2xl rounded-lg mx-auto w-full"
          >
            Resume Game
          </Link>
          <Link
            to="/game"
            className=" p-4 bg-green-500 hover:bg-green-600 hover:scale-x-105 hover:scale-y-110 hover:translate-x-5 duration-200 z-10 text-white font-bold text-2xl rounded-lg mx-auto w-full"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
