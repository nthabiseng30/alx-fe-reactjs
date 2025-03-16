// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  expect(screen.getByText('Do laundry')).toBeInTheDocument();
});
