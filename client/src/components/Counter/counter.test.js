import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../Counter/Counter";

describe("To test counter", () => {

  it("Counter display counter value", () => {
    const { getByTestId } = render(<Counter intialcount={0} />);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toEqual(0);
  });


  it("Count should increment by 1", () => {
    const { getByTestId, getByRole } = render(<Counter intialcount={0} />);
    const incrementbtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementbtn);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toEqual(1);
  });

  it("Count should decrement by 1", () => {
    const { getByTestId, getByRole } = render(<Counter intialcount={0} />);
    const decrementbtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementbtn);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toEqual(-1);
  });

  it("After reset counter should be 0", () => {
    const { getByTestId, getByRole } = render(<Counter intialcount={50} />);
    const reset = getByRole("button", { name: "Reset" });
    fireEvent.click(reset);
    const countvalue = Number(getByTestId("count").textContent);
    expect(countvalue).toEqual(0);
  });

  // this test is to check whether the same title is there or not...

  it("To check title is available", () => {
    render(<Counter />);
    const titleDetails = screen.getByText(/Counter app/i);
    expect(titleDetails).toBeInTheDocument();
  });

  it("if counter details text available", () => {
    render(<Counter />);
    const textid = screen.getByTestId("counter-details");
    expect(textid).toHaveTextContent("Counter details action");

  });

  // to check if initial value is 0


  it("To Check Initial Value 0",()=>{
    render(<Counter intialcount={0}/>)
    const getInitialValueId = Number(screen.getByTestId("count").textContent);
    expect(getInitialValueId).toEqual(0)
  });




});
