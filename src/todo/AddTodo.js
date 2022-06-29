import React, { useState } from 'react';
function AddTodo() {
  const [value, setValue] = useState('');
  return (
    <form style={{ marginBottom: '1rem' }}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">addTodo</button>
    </form>
  );
}

export default AddTodo;
