import React from 'react';

const TodoItems = ({ text, id, iscomplete, onToggleComplete, onDelete }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={() => onToggleComplete(id)}>
        <img
          src={iscomplete ? "src/assets/assets/tick-checked.png" : "src/assets/assets/tick.png"}
          alt=""
          className='w-7'
        />
        <p className={`text-slate-700 ml-4 text-[17px] ${iscomplete ? 'line-through' : ''}`}>
          {text}
        </p>
      </div>
      <div onClick={() => onDelete(id)}>
        <img src="src/assets/assets/delete.png" alt="" className='w-3.5 cursor-pointer' />
      </div>
    </div>
  );
};

export default TodoItems;
