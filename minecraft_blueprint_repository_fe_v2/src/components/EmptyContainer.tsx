import * as React from "react";
import { Button, Icon, Heading } from "@chakra-ui/react";

export class EmptyContainer extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <Heading>
          <Icon name='block layout' />
          We don't have any objects matching your query.
        </Heading>
        <div>
          <Button>
            <Icon name='add' />
            Add new item
          </Button>
        </div>
      </div>
    );
  }
}