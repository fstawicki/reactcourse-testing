import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import TodoFooter from '../TodoFooter'


const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )

}

test("should render desired number of tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElements = screen.getByText(/5 tasks left/i);
    expect(paragraphElements).toBeInTheDocument();
})

test("should render 'task' when the number of incomplete tasks is one", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElements = screen.getByTestId("para")
    expect(paragraphElements.textContent).toContain("task")
})

test("task element should be a paragraph", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElements = screen.getByText(/1 task left/i);
    expect(paragraphElements).toContainHTML("p");
})
