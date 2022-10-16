import { render, screen } from '@testing-library/react';
import React from 'react';
import UserCard from '../components/UserCard';
import '@testing-library/jest-dom';
import {getUser} from './commonFunctions';

beforeEach(()=>{
    render(<UserCard color='blue' user={getUser()}/>);
});
  
test('renders user-card-container', () => {
    const element= screen.getByTestId(/user-card-container/i);
    expect(element).toBeInTheDocument();
});

test('renders div-user-card', () => {
    const element= screen.getByTestId(/div-user-card/i);
    expect(element).toBeInTheDocument();
});

test('renders color of card truely', () => {
    const element=screen.getByTestId(/div-user-card/i);
    expect(element).toHaveStyle({backgroundColor: 'blue'});
});

test('renders user-card-picture', () => {
    const element= screen.getByTestId(/user-card-picture/i);
    expect(element).toBeInTheDocument();
});

test('renders name and surname text truely', () => {
    const element= screen.getByTestId(/name-surname-span/i);
    expect(element).toHaveTextContent("Enrique Jones");
});

test('renders person-icon', () => {
    const element= screen.getByTestId(/person-icon/i);
    expect(element).toBeInTheDocument();
});

test('renders image text truely', () => {
    const element= screen.getByTestId(/user-card-picture/i);
    expect(element.src).toContain("https://randomuser.me/api/portraits/men/11.jpg");
});

test('renders name-surname-span', () => {
    const element= screen.getByTestId(/name-surname-span/i);
    expect(element).toBeInTheDocument();
});

test('renders email text truely', () => {
    const element= screen.getByTestId(/email-span/i);
    expect(element).toHaveTextContent("enrique.jones@example.com");
});

test('renders mail-icon', () => {
    const element= screen.getByTestId(/mail-icon/i);
    expect(element).toBeInTheDocument();
});

test('renders email-span', () => {
    const element= screen.getByTestId(/email-span/i);
    expect(element).toBeInTheDocument();
});

test('renders cell phone text truely', () => {
    const element= screen.getByTestId(/cell-span/i);
    expect(element).toHaveTextContent("0461-456-529");
});

test('renders phone-iphone-icon', () => {
    const element= screen.getByTestId(/phone-iphone-icon/i);
    expect(element).toBeInTheDocument();
});

test('renders cell-span', () => {
    const element= screen.getByTestId(/cell-span/i);
    expect(element).toBeInTheDocument();
});

test('renders location text truely', () => {
    const element= screen.getByTestId(/location-span/i);
    expect(element).toHaveTextContent("Tamworth");
})

test('renders location-on-icon', () => {
    const element= screen.getByTestId(/location-on-icon/i);
    expect(element).toBeInTheDocument();
});

test('renders location-span', () => {
    const element= screen.getByTestId(/location-span/i);
    expect(element).toBeInTheDocument();
});