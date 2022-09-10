import React from 'react'
import style from './Header.module.scss'

export const Header = ({ todos }) => {
    return (
        <header className={style.header}>
            <h2>Ваш список задач составляет <span>{todos.length}</span></h2>
        </header>
    )
}
