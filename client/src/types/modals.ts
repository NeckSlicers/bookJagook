/** review: 별점/한줄평, report: 독후감 */
export type ModalProps = {
  modalType?: 'review' | 'report';
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};
