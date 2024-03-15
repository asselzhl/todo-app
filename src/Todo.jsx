import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

let style = {
    listItem: `flex justify-between p-4 my-2 bg-transparent-gray`,
    listItemCompleted: `flex justify-between p-4 my-2 bg-slate-400`,
    row: `flex`,
    listText: `ml-4 cursor-pointer text-lg`,
    listTextCompleted: `ml-4 cursor-pointer text-lg line-through`
}

const Todo = ({todo}) => {
  return (
    <li className={style.listItem}>
        <div className={style.row}>
            <input type="checkbox" />
            <p className={style.listText}>{todo}</p>
        </div>
        <button><FaRegTrashAlt size={30} /></button>
    </li>
  )
}

export default Todo