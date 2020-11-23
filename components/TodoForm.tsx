import React, {useState} from 'react';
import {TextField, Button}from "@material-ui/core";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('')

  return (
    <>
      <div className="add-task">
        <h3>Добавить задачу</h3>
        <TextField
          required
          className="add-task__field"
          variant="outlined"
          id="add-name-task" 
          label="Название задачи"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <Button 
          className="add-task__button"
          variant="contained" 
          color="primary" 
          disabled={!title}
          onClick={() => props.onAdd(title)}
        >
          Сохранить
        </Button>
      </div>
    </>
  )
}