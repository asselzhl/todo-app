import React from "react"
import { FaPlus } from "react-icons/fa";

const style = {
  bg: `h-screen w-screen bg-[#0F103F] p-4`,
  container: `bg-transparent-blue max-w-[700px] w-full m-auto rounded-md p-4`,
  title: `text-white text-3xl font-bold text-center p-2 mb-5`,
  form: `flex justify-between`,
  input: `w-full p-2 text-xl border`,
  button: `ml-3 border p-4 bg-white`
}

function App() {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h2 className={style.title}>TODO App</h2>
        <form className={style.form}>
          <input className={style.input} placeholder="Add TODO" type="text" />
          <button className={style.button}><FaPlus size={30} /></button>
        </form>
      </div>
    </div>
  )
}

export default App
