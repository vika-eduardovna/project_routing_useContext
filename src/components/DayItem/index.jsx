import React from 'react'
import ToDoItem from '../ToDoItem'

export default function DayItem({deals}) {
  return (
    <div>
        <div>
			{deals.map((elem) => (
				<ToDoItem key={elem.id} {...elem} />
			))}
		</div>
    </div>
  )
}
