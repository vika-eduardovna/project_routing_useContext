import React from 'react'
import s from './style.module.sass';

export default function ToDoItem({title}) {
  return (
    <div className={s.style}>
        <p>{title}</p>
    </div>
  )
}
