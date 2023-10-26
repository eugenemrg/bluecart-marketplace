
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './component/SearchBar';

test('SearchBar component should trigger the search function with the entered query and receive a response', async () => {
  const mockSearch = jest.fn().mockResolvedValue('Search results'); 

  const { getByPlaceholderText, getByText } = render(
    <SearchBar onSearch={mockSearch} />
  );

  const inputElement = getByPlaceholderText('Search');
  const searchButton = getByText('Search');

  fireEvent.change(inputElement, { target: { value: 'Test Query' } });
  fireEvent.click(searchButton);

  await waitFor(() => expect(mockSearch).toHaveBeenCalledWith('Test Query'));
  const responseElement = getByText('Search results');
  expect(responseElement).toBeInTheDocument();
});
