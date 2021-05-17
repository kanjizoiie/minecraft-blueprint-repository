import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Navbar, Dropdown, Item } from "./navbar";

describe("Class: Navbar", () => {
  it("should render properly", () => {
    const navbar: ShallowWrapper<Navbar> = shallow(
      <Navbar>
        <p>Test</p>
      </Navbar>
    );

    const expected = shallow(
      <div className="nav">
        <p>Test</p>
      </div>
    );
    expect(navbar.html()).toBe(expected.html());
  });

  it("should be able to have children", () => {
    const navbar: ShallowWrapper<Navbar> = shallow(
      <Navbar>
        <p>Test</p>
      </Navbar>
    );
    expect(navbar.children()).toHaveLength(1);
  });

  it("should be able to have multiple children", () => {
    const navbar: ShallowWrapper<Navbar> = shallow(
      <Navbar>
        <p>Test</p>
        <p>Test</p>
      </Navbar>
    );
    expect(navbar.children()).toHaveLength(2);
  });
});

describe("Class: Item", () => {
  it("should render properly", () => {
    const item: ShallowWrapper<Item> = shallow(
      <Item>
        <p>Test</p>
      </Item>
    );

    const expected = shallow(
      <div className="nav__item">
        <p>Test</p>
      </div>
    );
    expect(item.html()).toBe(expected.html());
  });
  it("should be able to have children", () => {
    const item: ShallowWrapper<Item> = shallow(
      <Item>
        <p>Test</p>
        <p>Test</p>
      </Item>
    );
    expect(item.children()).toHaveLength(2);
  });
  it("should be able to have multiple children", () => {
    const item: ShallowWrapper<Item> = shallow(
      <Item>
        <p>Test</p>
        <p>Test</p>
      </Item>
    );
    expect(item.children()).toHaveLength(2);
  });
});

describe("Class: Dropdown", () => {
  it("should be clickable", () => {
    const dropdown: ShallowWrapper<Dropdown> = shallow(
      <Dropdown>
        <Item>
          <p>Test</p>
        </Item>
      </Dropdown>
    );
  });
});
