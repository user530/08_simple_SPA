export const createClosePopup =
  (popupRef: React.RefObject<HTMLElement>, closeHandler: () => void) =>
  (e: React.MouseEvent<HTMLElement>) => {
    const clickedElement = e.target;

    if (
      popupRef.current &&
      !popupRef.current.contains(clickedElement as HTMLElement)
    ) {
      closeHandler();
    }
  };
