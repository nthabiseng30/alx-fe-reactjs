// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('deletes todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');
  const deleteButton = screen.getByText('Delete');

  expect(todo).toBeInTheDocument();

  fireEvent.click(deleteButton);

  expect(todo).not.toBeInTheDocument();
});
