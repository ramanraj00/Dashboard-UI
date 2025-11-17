


const App = () => {


  
  return (

    <div className="min-h-screen bg-pink-50 py-12">

      <div className="w-9/12 mx-auto flex items-center justify-between ">

      <div className="flex items-center">
        <img src="school.png" alt="" className="h-20 w-20" />
        <h1 className="text-4xl text-black font-bold border border-rose-200 rounded-4xl bg-red-200 p-1.5 ">Craft Your Pattern</h1>
      </div>

        <div className="flex gap-10 items-center justify-end ">
          <input 
          className="border border-black  rounded-lg  w-[100px] text-black font-bold focus:outline-0 bg-red-50 h-10 pl-3 "
          placeholder="12"
          />

          <select className="border border-black bg-red-200 rounded-lg w-[100px] text-black focus:outline-0  h-10 ">
            <option>Linear</option>
            <option>Radial</option>
          </select>

        </div>

      </div>

    </div>

  )
}

export default App