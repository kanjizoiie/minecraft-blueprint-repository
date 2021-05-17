import classNames = require("classnames");
import * as React from "react";
import { Icon } from "../icon/icon";
import "./navbar.scss";

interface NavbarProps {
  resizable?: boolean;
}

interface ItemProps { }

interface DropdownProps {
  label?: React.ReactNode;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

interface DropdownState {
  active: boolean;
}


export class Navbar extends React.Component<NavbarProps, {}> {
  render() {
    return (
      <div
        className={classNames("nav")}
      >
        {this.props.children}
      </div>
    );
  }
}


export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  shouldComponentUpdate(
    nextProps: DropdownProps,
    nextState: DropdownState,
    _nextContext: any
  ): boolean {
    return this.state.active !== nextState.active;
  }

  toggle(event: React.MouseEvent) {
    this.setState({ active: !this.state.active });
    this.props.onClick(event);
  }

  render() {
    return (
      <div>
        <div
          className={classNames("nav__dropdown", { active: this.state.active })}
          onClick={this.toggle}
        >
          <div className="nav__dropdown__label">
            <div className="nav__dropdown__label__title">
              {this.props.label}
            </div>
            <div className="nav__dropdown__label__chevron">
              {
                this.state.active ?
                  (<Icon>expand_more</Icon>) :
                  (<Icon>chevron_right</Icon>)
              }
            </div>
          </div>
        </div>
        {
          this.state.active ?
            (
              <div className="nav__dropdown__content">
                {this.props.children}
              </div>
            ) :
            null
        }
      </div>
    );
  }
}

export class Item extends React.Component<ItemProps, {}> {
  render() {
    return this.props.children ? (
      <div className="nav__item">
        {this.props.children}
      </div>
    ) : null;
  }
}

interface IconItemProps {
  icon: string;
  label: string;
}

export class IconItem extends React.Component<IconItemProps, {}> {
  render() {
    return (
      <div className="nav__icon active">
        <div className="nav__icon__icon">
          <Icon>
            {this.props.icon}
          </Icon>
        </div>
        <div className="nav__icon__text">
          {this.props.label}
        </div>
      </div>
    );
  }
}



