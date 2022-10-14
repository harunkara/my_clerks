import { render, screen } from '@testing-library/react';
import React from 'react';
import UserCard from '../components/UserCard';
import '@testing-library/jest-dom';

beforeEach(()=>{
    render(<UserCard />);
});
test('renders user-card-container', () => {
    const element= screen.getByTestId(/user-card-container/i);
    expect(element).toBeInTheDocument();
});
test('renders div-user-card', () => {
    const element= screen.getByTestId(/div-user-card/i);
    expect(element).toBeInTheDocument();
});
test('renders user-card-picture', () => {
    const element= screen.getByTestId(/user-card-picture/i);
    expect(element).toBeInTheDocument();
});
test('renders person-icon', () => {
    const element= screen.getByTestId(/person-icon/i);
    expect(element).toBeInTheDocument();
});
test('renders name-surname-span', () => {
    const element= screen.getByTestId(/name-surname-span/i);
    expect(element).toBeInTheDocument();
});
test('renders mail-icon', () => {
    const element= screen.getByTestId(/mail-icon/i);
    expect(element).toBeInTheDocument();
});
test('renders email-span', () => {
    const element= screen.getByTestId(/email-span/i);
    expect(element).toBeInTheDocument();
});
test('renders phone-iphone-icon', () => {
    const element= screen.getByTestId(/phone-iphone-icon/i);
    expect(element).toBeInTheDocument();
});
test('renders cell-span', () => {
    const element= screen.getByTestId(/cell-span/i);
    expect(element).toBeInTheDocument();
});
test('renders location-on-icon', () => {
    const element= screen.getByTestId(/location-on-icon/i);
    expect(element).toBeInTheDocument();
});
test('renders location-span', () => {
    const element= screen.getByTestId(/location-span/i);
    expect(element).toBeInTheDocument();
});