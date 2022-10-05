import React from 'react'
import s from './style.module.sass'

export default function Button({ children }) {
    return (
        <div className={s.button}>{children}</div>
    )
}
