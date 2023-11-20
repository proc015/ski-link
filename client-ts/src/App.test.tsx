import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
  SwiperSlide: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null
}));

jest.mock('swiper/css', () => jest.fn());

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('render login', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const getLogin = screen.getByText(/Login/i);
  const getRegister = screen.getByText(/Register/i);

  expect(getLogin).toBeInTheDocument();
  expect(getRegister).toBeInTheDocument();
});
