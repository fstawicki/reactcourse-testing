import { screen, fireEvent, render } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";


const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}


describe("Followers list", () => {
 
    test("follower should appear in container", async () => {
        render(<MockFollowersList />);
        const followerCard = await screen.findByTestId("follower-item-0");
        expect(followerCard).toBeInTheDocument();

    })

    test("5 followers should appear in container", async () => {
        render(<MockFollowersList />);
        const followerCards = await screen.findAllByTestId(/follower-item/i);
        expect(followerCards.length).toBe(5);

    })
    
})