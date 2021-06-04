import * as React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

interface IAppMenuProps {
    menuItems: Array<MenuItemProps>
}

export class AppMenu extends React.Component<IAppMenuProps, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <Menu>
                { this.props.menuItems ? this.props.menuItems.map((menuItemProps: MenuItemProps, index: number) => <Menu.Item key={ index } {...menuItemProps}>{menuItemProps.children}</Menu.Item>) : null}
            </Menu>
        );
    }
}



