import { render, screen } from '@testing-library/react';
import React from 'react';
import CarouselContainer from '../containers/CarouselContainer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getRandomUsers} from './commonFunctions';

describe('Mocked Store', () => {
    const initialState = getRandomUsers();
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    let store;
    beforeEach(()=>{
        store = mockStore(initialState);
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
        render(
            <Provider store={store}>
                <CarouselContainer />
            </Provider>
        );
    });
    it('Shows "Card background color:" span', () => {
        expect(screen.getByText('Card background color:')).not.toBeNull();
    });
    it('Shows "My Clerks" h1', () => {
        expect(screen.getByText('My Clerks')).not.toBeNull();
    });
    it('renders 10 usercards in first render', () => {
        const {container}=render(
            <Provider store={store}>
                <CarouselContainer />
            </Provider>
        );
        expect(container.getElementsByClassName('user__card')).toHaveLength(10);
    });
    it('renders 60 mui-icons in first render', () => {
        const {container}=render(
            <Provider store={store}>
                <CarouselContainer />
            </Provider>
        );
        expect(container.getElementsByClassName('mui__icons')).toHaveLength(60);
    });
    it('renders color picker with purple color in first render', () => {
        expect(screen.getByDisplayValue('#554398').id).toBe('color__picker');
    });
});
