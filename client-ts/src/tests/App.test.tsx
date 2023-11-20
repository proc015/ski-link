import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

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

