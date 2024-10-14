import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({id, variant, children}) {
  const {dismissToast} = React.useContext(ToastContext)
  const variantStyle = `${styles[variant]} ${styles.toast}`
  const Icon = ICONS_BY_VARIANT[variant]
  const toastRef = React.useRef()

  

  return (
    <div className={variantStyle}>
      <div className={styles.iconContainer}>
        <Icon size={25} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      <button aria-label='Dismiss Message' ref={toastRef} className={styles.closeButton} onClick={() => dismissToast(id)}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
