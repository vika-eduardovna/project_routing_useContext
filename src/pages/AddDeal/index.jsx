import React from 'react'
import s from './style.module.sass'
import Button from '../../components/UI/Button'


export default function AddDeal() {

  const submit = e => {
    e.preventDefault();
    const {title, day} = e.target;
    console.log(title.value, day.value);
    title.value = '';
    day.value = '';
  }
  return (
    <div className={s.container}>
      <form onSubmit={submit} className={s.form}>
        <input type="text" name='title' placeholder='title' />
        <select name="day" placeholder='The day of he week'>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
      </select>
      <Button>Add</Button>
    </form>
    <div className={s.deals_box}>

    </div>
    </div>
  )
}
