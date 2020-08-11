import React from 'react';
import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (!alert) return null;

    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            {alert.text}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert;