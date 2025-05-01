import styles from './Modal.module.css';

type ActionLabel = "Delete" | "Save";

interface ModalProps {
  isOpen: boolean;
  message: string;
  actionLabel: ActionLabel;
  onCancel: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
}

export function Modal ({ isOpen, message, actionLabel, onCancel, onConfirm, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        {children}
        <div className={styles.actionContainer}>
          <button
            onClick={onCancel}
          >
              Cancel
          </button>
          <button
            className={actionLabel === 'Delete' ? styles.delete : styles.edit}
            onClick={onConfirm}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};