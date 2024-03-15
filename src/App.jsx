import React, {useState} from "react"
import { FaPlus } from "react-icons/fa";

import Todo from './Todo.jsx';

const style = {
  bg: `h-screen w-screen bg-[#0F103F] p-10`,
  container: `bg-transparent-blue max-w-[700px] w-full m-auto rounded-md p-4`,
  title: `text-white text-3xl font-bold text-center p-2 mb-5`,
  form: `flex justify-between mb-5`,
  input: `w-full p-2 text-xl border px-6`,
  button: `ml-3 border p-4 bg-white`,
  count: `text-center p-2 text-[#6083FF]`
}

function App() {
  const [todos, setTodos] = useState(['Clean the house', 'Buy shampoo']);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h2 className={style.title}>TODO App</h2>
        <form className={style.form}>
          <input className={style.input} placeholder="Add TODO" type="text" />
          <button className={style.button}><FaPlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => 
            <Todo key={index} todo={todo} />
          )}
        </ul>
        <p className={style.count}>Todos left: 2</p>
      </div>
    </div>
  )
}

export default App
