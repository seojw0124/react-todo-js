import React from 'react';
import * as Todo from './todo.styled';
import { todoZustandStore } from '../store/todoZustandStore.js';

const TodoCardZustand = ({ id, content, isCompleted, date }) => {
  const { removeTodo, toggleCompletedTodo, updateTodo } = todoZustandStore();
  return (
    <Todo.TodoWrapper onClick={() => toggleCompletedTodo(id)}>
      <Todo.TodoContent isCompleted={isCompleted}>{content}</Todo.TodoContent>
      <div>
        <Todo.TodoButton onClick={() => updateTodo(id, content)}>
          수정하기
        </Todo.TodoButton>
        <Todo.TodoButton onClick={() => removeTodo(id)} className={'remove'}>
          삭제하기
        </Todo.TodoButton>
      </div>
    </Todo.TodoWrapper>
  );
};

export default TodoCardZustand;
