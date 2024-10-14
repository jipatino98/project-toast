import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const {toasts, dismissToast} = React.useContext(ToastContext)

  return (
    <ol role='region' aria-live='polite' aria-label='notifications' className={styles.wrapper}>
      {toasts.map((toast) => (
      <li key={toast.id} className={styles.toastWrapper}>
        <Toast variant={toast.variant} dismiss={dismissToast} id={toast.id}>{toast.message}</Toast>
      </li>
      ))}
    </ol>
  );
}

      // <li className={styles.toastWrapper}>
      //   <Toast variant="notice">Example notice toast</Toast>
      // </li>
      // <li className={styles.toastWrapper}>
      //   <Toast variant="error">Example error toast</Toast>
      // </li>
export default ToastShelf;
