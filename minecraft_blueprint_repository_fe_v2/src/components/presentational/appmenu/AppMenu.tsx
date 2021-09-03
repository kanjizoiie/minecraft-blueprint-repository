import * as React from "react";
import { Menu, MenuItemProps, MenuProps } from "semantic-ui-react";

interface IAppMenuProps extends MenuProps {
    menuItems: Array<MenuItemProps>
}

export class AppMenu extends React.Component<IAppMenuProps, {}> {
    constructor(props: any) {
        super(props);
    }


    render(): JSX.Element {
        return (
            <Menu {...this.props}>
                { this.props.menuItems ? this.props.menuItems.map((menuItemProps: MenuItemProps, index: number) => <Menu.Item key={ index } {...menuItemProps}>{menuItemProps.children}</Menu.Item>) : null}
            </Menu>
        );
    }
}



