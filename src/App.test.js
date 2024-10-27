import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = await screen.findByText(/scan form/i); // Automatically waits until the element appears
  expect(linkElement).toBeInTheDocument();
});


