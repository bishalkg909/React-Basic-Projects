import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "red"}} onClick={()=>{setColor("red")}}>
              Red
            </button>
            
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "green"}} onClick={()=>{setColor("green")}}>
              Green
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "blue"}} onClick={()=>{setColor("blue")}}>
              Blue
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "olive"}} onClick={()=>{setColor("olive")}}>
              Olive
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "Pink"}} onClick={()=>{setColor("pink")}}>
              Pink
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "lavender"}} onClick={()=>{setColor("lavender")}}>
              Lavender
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "purple"}} onClick={()=>{setColor("purple")}}>
              Purple
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "violet"}} onClick={()=>{setColor("violet")}}>
              Violet
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-[1.2] duration-500" style={{backgroundColor : "indigo"}} onClick={()=>{setColor("indigo")}}>
              indigo
            </button>

          </div>
        </div>
    </div>
  )
}

export default App
