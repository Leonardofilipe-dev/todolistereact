import React, {useState, formEvent, useEffect, ChangeEvent, FormEvent, SetStateAction} from "react";
import styles from "./taskForm.module.css"
import { ITask } from '../../interface/Task'

interface Props {
    btnText: string;
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  }
  
  const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficuty] = useState<number>(0)
    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = {id, title, difficulty}

      setTaskList!([...taskList, newTask])

      setTitle("")
      setDifficuty(0)

      console.log(taskList)
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
  