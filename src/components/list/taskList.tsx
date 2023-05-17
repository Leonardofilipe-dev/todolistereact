import { ITask } from "../../interface/Task";

import style from "./TaskList.module.css"


interface Props {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) =>(
        <div key={task.id} className={style.task}>
        
          <div className={style.details}>
          <h5>{task.title}</h5>
          <p>{task.difficulty}</p>
          </div>
          <div className={style.actions}>
          <i className="bi bi-pencil"></i>
          <i className="bi bi-trash"></i>
          </div>
        </div>
      ))
      
    ): (
      <p>Não existe tarefas cadastradas!</p>
    )}
    </>
  )

    }

export default TaskList
