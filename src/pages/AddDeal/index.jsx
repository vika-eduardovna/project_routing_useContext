import React from 'react'

export default function AddDeal() {

  const submit = e => {
    e.preventDefault();
    const {title, day} = e.target;
    console.log(title.value, day.value);
    title.value = '';
    day.value = '';
  }
  return (
    <form onSubmit={submit}>
      <input type="text" name='title' placeholder='title' />
      <select name="day">
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
      </select>
      <button>Add</button>
    </form>
  )
}
