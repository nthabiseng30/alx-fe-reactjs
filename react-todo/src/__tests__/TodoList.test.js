// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Buy milk');

  expect(todo).not.toHaveStyle('textDecoration: line-through');

  fireEvent.click(todo);

  expect(todo).toHaveStyle('textDecoration: line-through');

  fireEvent.click(todo);

  expect(todo).not.toHaveStyle('textDecoration: line-through');
});
