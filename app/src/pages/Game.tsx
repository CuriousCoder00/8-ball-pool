import Canvas2D from "../components/Canvas"
import Header from "../components/Header"

const Game = () => {
  return (
    <div className="flex flex-col gap-0 bg-slate-950">
      <Header/>
      <Canvas2D/>
    </div>
  )
}

export default Game
