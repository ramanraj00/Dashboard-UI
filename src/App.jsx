import { useEffect, useState } from "react"
import {ToastContainer,toast} from 'react-toastify'


const App = () => {

  const [value,setValue] = useState(12)
  const [type,setType] = useState("Linear")
  const [gradient , setGradient] = useState([])

  const getHexColorCode = () => {

   const rgb = 255 * 255 * 255
   const random = Math.random() * rgb
   const int = Math.floor(random)
   const hexCode = int.toString(16)
   const colorHex = hexCode.padEnd(6,"0")
   return `#${colorHex}`

  }

  const genrateGradient = () => {
  const colors = []
    for ( let i= 0;  i<value;  i++ )
    {
      const color1 = getHexColorCode()
      const color2 = getHexColorCode()
      const degree = Math.floor(Math.random() * 360)
      const degreeString = `${degree}deg`

      colors.push({
        gradient:`linear-Gradient(${degreeString},${color1},${color2})`,
        css:`background: 'linear-gradient(${degreeString},${color1},${color2})'`,
      })

    }

    setGradient(colors)

  }

  const onCopy = (css) => {
    navigator.clipboard.writeText(css)
    toast.success("Gradient Code Copied !")
  }

  useEffect(()=>{
    genrateGradient()
  },[value])
  
  return (

<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
   <div className="min-h-screen bg-[#EAEFF7] py-12  ">

      <div className="w-9/12 mx-auto space-y-12">

      <div className="flex justify-between">
        <div className="flex items-center">
        <img src="school.png" alt="" className="h-20 w-20" />
        <h1 className="text-4xl text-black font-bold  border-black border-2 rounded-4xl bg-[#EAEFF7] p-1.5 ">Craft Your Pattern </h1>
        <p className="font-bold text-2xl ml-8"> {value} {type} </p>
      </div>

        <div className="flex gap-10 items-center justify-end ">
          <input 
          value={value}
          onChange={(e)=>setValue(Number(e.target.value))}
          className="border-2 border-black  rounded-lg  w-[100px] text-black font-bold focus:outline-0  h-10 pl-3  "
          placeholder="12"
          />

          <select value={type} onChange={(t)=>setType(t.target.value)} className="border-2 border-black rounded-lg w-[100px] text-black focus:outline-0  h-10 font-medium ">
            <option >Linear</option>
            <option>Radial</option>
          </select>
      </div>

      </div>

      <div className="grid grid-cols-4 gap-6 space-y-4 "> 

      {gradient.map((item, index)=>(
        <div key={index} className="h-[180px] bg-red-500 rounded-2xl   border-2 relative " style={{background:item.gradient}}>
        <button onClick={()=>onCopy(item.css)} className="absolute bottom-3 right-2 text-white bg-black/50 hover:bg-black rounded-md p-1 border border-white">Copy</button>
      </div>
      ))}

    </div>

    </div>
    </div>

    <ToastContainer/>
     
</div>

  )
};

export default  App;