import {cleanup, render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
afterEach(cleanup);

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});

    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}});
        fireEvent.click(buttonElement);
    })

}


describe("Todo", () => {

    test("should create mulitple tasks according to input value", async () =>{
        render(<MockTodo />);
        addTask(["111", "222", "333"]);
        const taskElements = screen.getAllByTestId("task-testID");
        expect(taskElements.length).toBe(3);

    })

    test("task should have default styles", async () => {
        render(<MockTodo />)
        addTask(['111'])
        const oneTask = screen.getByText("111");
        expect(oneTask).not.toHaveStyle('text-decoration: line-through');
        expect(oneTask).not.toHaveClass("todo-item-active");
    })

    test("task should change style after clicking", async () => {
        render(<MockTodo />)
        addTask(['111'])
        const oneTask = screen.getByText("111");
        fireEvent.click(oneTask);
        expect(oneTask).toHaveClass("todo-item-active");
    })


})