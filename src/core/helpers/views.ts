import { Offcanvas } from "bootstrap";

export const clodeModal = (path: string): void => {
  const offcanvasElement = document.getElementById(path);
  if (offcanvasElement) {
    const offcanvas = Offcanvas.getInstance(offcanvasElement);
    offcanvas?.hide();
  }
};
