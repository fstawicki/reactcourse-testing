import {fireEvent, render, screen} from '@testing-library/react';
import AddInput from '../AddInput';


const mockedSetTodo = jest.fn();

describe("AddInput", () => {

    test("should render input element", async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })

    test("should render button element", async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const buttonElement = screen.getByText("Add");
        expect(buttonElement).toBeInTheDocument();
    })

    test("should be able to type in input", async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}});
        expect(inputElement.value).toBe("Go grocery shopping");
    } )

    test("should clear input element after adding task", async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByText("Add");
        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}});
        fireEvent.click(buttonElement, {});
        expect(inputElement.value).not.toBe("Go grocery shopping");
    })


})
