import { useAtom } from 'jotai';
import React from 'react';
import { todoJotalAtom } from '../atoms/todoJotalAtom.js';
import * as Todo from './todo.styled';

const TodoCardJotai = ({ id, content, isCompleted }) => {
  const [todos, setTodos] = useAtom(todoJotalAtom);
  const removeTodo = (id) => {
    const filteredList = todos.filter((todo) => todo.id !== id);
    setTodos(filteredList);
  };
  const updateTodo = (id, content) => {
    const updatedList = todos.map((todo) => {
      // id가 같은 것을 찾아서 완료여부 변경
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        // content가 포함되면 content 업데이트
        if (content) {
          todo.content = content;
        }
      }
      return todo;
    });
    setTodos(updatedList);
  };
  return (
    <Todo.TodoWrapper>
      <Todo.TodoContent
        isCompleted={isCompleted}
        onClick={() => updateTodo(id)}
      >
        {content}
      </Todo.TodoContent>
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

export default TodoCardJotai;
