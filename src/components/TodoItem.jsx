import React, { useState } from 'react'
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai'
import style from './TodoItem.module.scss'

export const TodoItem = ({ todo, removeTodo, toggleTodo, saveTodo }) => {
    const [editValue, setEditValue] = useState(todo.desc)
    const [editForm, setEditForm] = useState(false)

    const finishTodo = (id, editValue) => {
        const dateInfo = new Date()
        const day = dateInfo.getDate()
        const month = dateInfo.getMonth()
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        const currentMonth = months[month]
        const min = dateInfo.getMinutes()
        const hours = dateInfo.getHours()

        const time = `${day} ${currentMonth} ${hours} часов ${min} минута`
        saveTodo(id, editValue, time)
        setEditForm(false)
    }

    return (

        <div className={style.item}>
            <div className={style.leftSide}>
                {
                    editForm ?
                        <div className={style.edit}>
                            <label>
                                Измените задачу:
                            </label>
                            <textarea
                                type="text" value={editValue}
                                onChange={e => setEditValue(e.target.value)}
                            />
                            <button
                                onClick={() => finishTodo(todo.id, editValue)}
                            >Сохранить
                            </button>
                        </div>
                        :
                        <div className={style.info}>
                            <p>Ваше имя: <span>{todo.name}</span></p>
                            <p>Ваша задача: <span>{todo.desc.slice(0, 75)}</span></p>
                            <span>Ваша задача выполнена?</span>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => toggleTodo(todo.id)} />
                            <p>Время создания: <span>{todo.time}</span></p>
                        </div>
                }
            </div>



            <div className={style.rightSide}>
                <button
                    onClick={() => setEditForm(!editForm)}>
                    <AiOutlineEdit />
                </button>
                <button
                    onClick={() => removeTodo(todo.id)}>
                    <AiTwotoneDelete />
                </button>
            </div>
        </div>
    )
}
