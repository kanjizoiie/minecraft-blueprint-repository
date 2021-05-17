import * as React from "react";
import { Icon } from "../icon/icon";

import "./modal.scss";

interface ModalProps {
  isModalOpen: boolean;
  onClose?: (
    ev: React.MouseEvent<HTMLElement, MouseEvent> | MouseEvent | KeyboardEvent
  ) => void;
}

export default class Modal extends React.Component<ModalProps, {}> {
  modal: React.RefObject<HTMLDivElement>;

  closeButton: HTMLElement;

  constructor(props: any) {
    super(props);

    // Get Ref to modal
    this.modal = React.createRef();

    // Bind functions
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "Escape") {
      this.props.onClose(ev);
    }
  }

  handleClickOutside(ev: MouseEvent) {
    if (this.modal !== null && this.props.isModalOpen) {
      if (
        this.modal.current &&
        ev.target instanceof Node &&
        !this.modal.current.contains(ev.target)
      ) {
        this.props.onClose(ev);
      }
    }
  }

  render() {
    return this.props.isModalOpen ? (
      <div className="modal">
        <div className="modal__window" ref={this.modal}>
          <span className="modal__window__close" onClick={this.props.onClose}>
            <Icon>clear</Icon>
          </span>
          <div className="modal__window__content">{this.props.children}</div>
        </div>
      </div>
    ) : null;
  }
}
