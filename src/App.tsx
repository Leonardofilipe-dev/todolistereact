import { useState } from 'react'

import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import style from './app.module.css'
import TaskForm from './components/form/taskForm'
import TaskList from './components/list/taskList'

function App() {
  const [] = useState(0)

  return (
    <>
      <div>
    <Header/>
    <main className={style.main}>
    <div className={style.input_container}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Create task'/>
    </div>
    <div className={style.input_container}>
      <h2>Suas tarefas</h2>
      <p><TaskList/></p>
    </div>
    </main>
    <Footer/>
      </div>
   
    </>
  )
}

export default App
