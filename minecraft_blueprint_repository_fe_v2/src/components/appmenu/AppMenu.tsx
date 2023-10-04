import * as React from "react";
import { Menu, MenuItemProps, MenuProps } from "@chakra-ui/react";

interface IAppMenuProps extends MenuProps {
  menuItems: Array<MenuItemProps>
}

export class AppMenu extends React.Component<IAppMenuProps, {}> {
  constructor(props: any) {
    super(props);
  }


  render(): JSX.Element {
    return (
      <div {...this.props}>
        {this.props.menuItems ? this.props.menuItems.map((menuItemProps: MenuItemProps, index: number) => <div key={index}>{menuItemProps.children}</div>) : null}
      </div>
    );
  }
}



