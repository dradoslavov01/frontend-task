import React from 'react'
import { Modal as AntModal } from 'antd'

import styles from './Modal.module.scss';

const Modal = ({ config, value, onChange }) => {
    return (
        <AntModal title={config?.title}
            open={config?.isVisible}
            okText={config?.okText}
            onCancel={config.onCancel}
            onOk={config?.onOk}
        >
            {config?.isEdit ?
                <div className={styles.editContainer}>
                    <span>Title</span>
                    <input value={value} onChange={(e) => onChange(e.target.value)} />
                </div>
                : <span>Are you sure you want to delete this article?</span>
            }
        </AntModal>
    )
}

export default Modal;
