// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('adds new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New todo')).toBeInTheDocument();
});
