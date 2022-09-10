import React from 'react'
import { useState } from 'react'
import style from './CreateTodo.module.scss'

export const CreateTodo = ({ addTodo }) => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(name.trim(), desc.trim())
        setName('')
        setDesc('')
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }


    return (
        <form onSubmit={handleSubmit} className={style.form}>

            <div className={style.inputs}>
                <input
                    className={style.inputName}
                    type="text"
                    value={name}
                    placeholder='Введите ваше имя...'
                    onChange={e => setName(e.target.value)}
                />

                <textarea
                    className={style.textarea}
                    type="text"
                    value={desc}
                    placeholder='Введите задачу...'
                    onChange={e => setDesc(e.target.value)}
                />
            </div>
            <button className={style.btn}>
                добавить задачу
            </button>
        </form>
    )
}
