import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () => <div data-testid="ItemCounter" />,
// }));


const mockItemCounter = vi.fn( (props: unknown)=>{
    return (
      <div
        data-testid="ItemCounter"        
      />
    );
})

vi.mock("./shopping-cart/ItemCounter", () => ({
default: (props: unknown) => mockItemCounter(props),
}));


// vi.mock("./shopping-cart/ItemCounter", () => ({
//   default: (props: unknown) => <div data-testid="ItemCounter"
//                     name={props.name}
//                     quantity={props.quiantity} />,
// }));

describe("FirstStepsApp", () => {

    afterEach(()=>{
        vi.clearAllMocks()
    })

    test('Should match snpashot', () =>{
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();

        // screen.debug()
    })


    test('Shoould render the correct number of ItemCounter Components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(3);

        // screen.debug();
    })

    test('Should render ItemCounter with correct props ', ()=>{
        render(<FirstStepsApp/>)
        
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
          name: "Manzana",
          quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
          name: "Pan",
          quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
          name: "Leche",
          quantity: 3,
        });
    })

});