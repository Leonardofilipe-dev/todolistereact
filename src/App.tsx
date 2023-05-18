import { useState } from 'react'

import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import style from './app.module.css'
import TaskForm from './components/form/taskForm'
import TaskList from './components/list/taskList'
import { ITask } from './interface/Task'
import Modal from './components/modal/Modal'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const [] = useState(0)

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    } else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  return (
    <>
      <div>
        <Modal children={<TaskForm btnText="Editar tarefa" taskList={taskList} task={taskToUpdate}/>}/>
    <Header/>
    <main className={style.main}>
    <div className={style.input_container}>
      <h2>O que você vai fazer?</h2>
      <TaskForm btnText='Create task' taskList={taskList}  setTaskList={setTaskList}/>
    </div>
    <div className={style.input_container}>
      <h2>Suas tarefas</h2>
      <p><TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/></p>
    </div>
    </main>
    <Footer/>
      </div>
   
    </>
  )
}

export default App
