import React, {useState, useEffect, ChangeEvent, FormEvent} from "react";
import styles from "./taskForm.module.css"
import { ITask } from '../../interface/Task'

interface Props {
    btnText: string;
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id: number, title: string, difficulty: number): void
  }
  
  const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficuty] = useState<number>(0)

    useEffect(() => {
      if(task){
        setId(task.id)
        setTitle(task.title)
        setDifficuty(task.difficulty)
      }

    }, [task])

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if(handleUpdate){
        handleUpdate(id, title, difficulty)
      }else{
        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = {id, title, difficulty}
  
        setTaskList!([...taskList, newTask])
  
        setTitle("")
        setDifficuty(0)
      }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
      if(e.target.name === "title"){
        setTitle(e.target.value)
      }else{
        setDifficuty(parseInt(e.target.value))
      }
     
    }

    return (
      <form onSubmit={addTaskHandle} className={styles.form}>
        <div className={styles.input_container}>
          <label className={styles.input_container.label} htmlFor="title"> Title:  </label>
          <input type="text"
           name="title"
            placeholder="task title"
             onChange={handleChange}
             value={title}
             />
        </div>
  
        <div className={styles.input_container}>
          <label htmlFor="difficulty">Difficulty: </label>
          <input type="text" name="difficulty"
           placeholder="task difficulty"
            onChange={handleChange }
            value={difficulty}
            />
          
        </div>
        
        <input type="submit" value={btnText} />
      </form>
    );
  }
  
  export default TaskForm;
  