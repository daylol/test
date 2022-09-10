import { useState } from 'react';
import style from './App.module.scss';
import { CreateTodo } from './components/CreateTodo';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { v4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (name, desc) => {
    if (name && desc) {
      const dateInfo = new Date()
      const day = dateInfo.getDate()
      const month = dateInfo.getMonth()
      const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
      const currentMonth = months[month]
      const min = dateInfo.getMinutes()
      const hours = dateInfo.getHours()

      const time = `${day} ${currentMonth} ${hours} часов ${min} минута`
      const newTodo = {
        id: v4(),
        complete: false,
        name,
        desc,
        time
      }
      setTodos([...todos, newTodo])
    } else {
      alert('Поля не могут быть пустыми!')
    }
  }
  console.log(todos);

  const removeTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const toggleTodo = (id) => {
    setTodos([...todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })])
  }

  const saveTodo = (id, desc, time) => {
    setTodos((prevState) => {
      const ind = prevState.findIndex(item => item.id === id)
      const oldItem = prevState[ind]
      const newTodo = { ...oldItem, desc, time }
      return [...prevState.slice(0, ind), newTodo, ...prevState.slice(ind + 1)]
    })
  }

  return (
    <div className={style.App}>
      <Header todos={todos} />
      <CreateTodo addTodo={addTodo} />
      <div className={style.items}>
        {
          todos.map(todo => <TodoItem key={todo.id} todo={todo} todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} saveTodo={saveTodo} />)
        }
      </div>
    </div>
  );
}

export default App;
