import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should reneder same text passed into title prop', async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//specyficzny - znajdz dokładnie header h3 a nie header h1
test('should reneder header element', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", {name: "ddd"})
    expect(headingElement).toBeInTheDocument();
  });

//using Find
test("should find rendered header element", async () =>{
    render(<Header />);
    const headingElement = await screen.findByTitle("header-h1")
    expect(headingElement).toBeInTheDocument();
})

//using query
test("should query rendered header element", async () =>{
    render(<Header />);
    const headingElement = screen.queryByTitle("header-h1")
    expect(headingElement).toBeInTheDocument();
})

//using query
test("should query NOT rendered header element", async () =>{
    render(<Header />);
    const headingElement = screen.queryByText(/aaaaaaaa/i)
    expect(headingElement).not.toBeInTheDocument();
})

test("should getByAll rendered heading", async () => {
    render(<Header />);
    const testedElements = screen.getAllByRole("heading");
    expect(testedElements.length).toBe(2);
})