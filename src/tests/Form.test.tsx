import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Form} from '../components/Form';
import { Provider } from 'react-redux';
import store from '../store';
import {PrimeReactProvider} from "primereact/api";

test('renders button with correct text', () => {
    const { getByText } = render(
        <Provider store={store}>
            <Form />
        </Provider>
    );
    const buttonElement = getByText(/Отправить/i);
    expect(buttonElement).toBeInTheDocument();
});
