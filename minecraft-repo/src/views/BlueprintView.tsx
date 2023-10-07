import * as React from "react";
import { EmptyContainer } from "../components/EmptyContainer";

interface IBlueprintViewState {
  blueprintData: Array<any>
}

export class BlueprintView extends React.Component<{}, IBlueprintViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      blueprintData: []
    }
  }


  render(): JSX.Element {
    return (
      <div>
        {this.state.blueprintData.length > 0 ? null : <EmptyContainer />}
      </div>
    );
  }
}