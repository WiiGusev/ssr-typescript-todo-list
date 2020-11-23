import React from 'react';
import {ITodo} from '../interface';
import {TodoItem} from './TodoItem';

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  }

  return (
    <div className="list">
      {todos.map(item => {
        return (
          <TodoItem
            title={item.title}
            id={item.id}
            completed={item.completed}
            onChange={onToggle}
            onRemove={removeHandler}
          />
        )
      })}
    </div>
  )
}