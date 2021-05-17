import * as React from "react";
import { useState } from "react";
import { Icon } from "../../components/icon/icon";

import "./modal.scss";
interface ModalProps {
  onClose: () => void;
}

interface ModalState {}

class Modal extends React.Component<ModalProps, ModalState> {
  render() {
    return (
      <div className="modal">
        <div className="modal__window">
          <span onClick={this.props.onClose} className="modal__window__close">
            <Icon>clear</Icon>
          </span>
          <div className="modal__window__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const ModalContext = React.createContext({
  createModal: (content: React.ReactNode) => {}
});

function ModalProvider(props: { children: React.ReactNode }) {
  const [modalContents, setModalContents] = useState<React.ReactNode[]>([]);

  const createModal = (modal: React.ReactNode) => {
    setModalContents([...modalContents, modal]);
  };

  const closeModal = () => {
    setModalContents(modalContents.slice(0, modalContents.length - 1));
  };

  return (
    <ModalContext.Provider value={{ createModal: createModal }}>
      {props.children}
      {modalContents ? (
        <div>
          {modalContents.map((contents, index) => (
            <Modal key={index} onClose={() => closeModal()}>
              {contents}
            </Modal>
          ))}
        </div>
      ) : null}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
