import React from 'react';
import { number, object } from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
};

function TodoItem({ todo, index }) {
  return (
    <li style={styles.li}>
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: object.isRequired,
  index: number,
};

export default TodoItem;
