import React from 'react';
import ReactDOM from 'react-dom';

export enum PortalTarget {
  MODAL = 'modal',
  ROOT = 'root',
}

export interface PortalProps {
  target: PortalTarget;
  children: React.ReactNode;
}

function ModalContainer({ target, children }: PortalProps) {
  const domElement = document.getElementById(target);

  return domElement ? ReactDOM.createPortal(children, domElement) : null;
}

export default ModalContainer;
