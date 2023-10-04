import * as React from "react";
import { useState } from "react";

const BlockContext = React.createContext({
  createModal: (content: React.ReactNode) => {}
});

function BlockProvider(props: { children: React.ReactNode }) {
  const [modalContents, setModalContents] = useState<React.ReactNode[]>([]);

  return (
    <BlockContext.Provider value={ this.blocks }>
      {props.children}
    </BlockContext.Provider>
  );
}

export { BlockProvider, BlockContext };
