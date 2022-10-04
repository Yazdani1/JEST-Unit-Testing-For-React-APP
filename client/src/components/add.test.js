import add from "./add";

describe("To do addition", () => {

  it("Addition of two values", () => {
    const result = add(5, 4);
    expect(result).toBe(9);
  });

  it("Addition of two values with wrong data type",()=>{

    const result = add("4","9");

    expect(result).not.toBe(13);

  });


});
