import React, { useRef, useState } from 'react';
import TodoItems from './TodoItems';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      iscomplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, iscomplete: !item.iscomplete } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded x2'>
      {/*--title--*/}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src="src/assets/assets/todo_icon.png" alt="" />
        <h1 className='text-3xl font-semibold'>To-DO List</h1>
      </div>

      {/*--input box--*/}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add your task'
        />
        <button
          onClick={add}
          className='bg-orange-600 border-0 outline-none rounded-full w-32 h-14 text-white text-large font-medium cursor-pointer'
        >
          ADD +
        </button>
      </div>

      {/*--todoitems--*/}
      <div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            iscomplete={item.iscomplete}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
