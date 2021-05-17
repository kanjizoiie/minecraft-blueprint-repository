import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Button } from "./button";

describe("Class: Button", () => {
  it("should render properly", () => {
    const mockOnClick = jest.fn();
    const button: ShallowWrapper<Button> = shallow(
      <Button onClick={(event) => mockOnClick(event)}>Test</Button>
    );
    const expected = shallow(<a className="button">Test</a>);
    expect(button.html()).toBe(expected.html());
  });

  it("it should fire onClicked when clicked", () => {
    const mockOnClick = jest.fn();
    const button: ShallowWrapper<Button> = shallow(
      <Button onClick={(event) => mockOnClick(event)}>Test</Button>
    );
    button.simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
