import React, { useContext } from 'react'
import { Context } from '../../context'
import s from './style.module.sass'
import Select from 'react-select'
import ToDoItem from '../../components/ToDoItem'



export default function AddDeal() {

  const { addDeals, deals } = useContext(Context);

  const day_options = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 7, label: 'Sunday' },
  ];

  const submit = e => {
    e.preventDefault();
    const { title, day } = e.target;
    addDeals(title.value, day.value);
    title.value = '';
    day.value = '';
    
  }
  return (
    <form onSubmit={submit} className={s.container}>
      <div className={s.form} >
        <input type="text" name='title' placeholder='title' />
        <Select
          className={s.select}
          placeholder='Choose the day...'
          name='day'
          options={day_options} />
        <button className={s.button}>Add</button>
      </div>
      <div className={s.deals_box}>
        {
          deals.map(el => <ToDoItem key={el.day} {...el}/>)
        }

      </div>
    </form> 
    
  )
}
