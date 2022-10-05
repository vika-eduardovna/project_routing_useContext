import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.sass'

export default function NavBar() {
    return (
        <div>
            <nav className={s.container}>
                <Link to="/add">Add</Link>
                <Link to="/list">Show</Link>
            </nav>
        </div>
    )
}
