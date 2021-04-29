import {Fragment} from 'react';

import Button from './Button';
import Card from './Card';

import './Modal.css';

const Modal = (props) => {
    let buttons = []
    if (props.onConfirm && props.onConfirm.text) {
        const onConfirm = props.onConfirm
        buttons.push(<Button key="confirm" onClick={onConfirm.action}>{onConfirm.text}</Button>)
    }
    if (props.onCancel && props.onCancel.text) {
        const onCancel = props.onCancel
        buttons.push(<Button key="cancel" onClick={onCancel.action}>{onCancel.text}</Button>)
    }

    return (
        <Fragment>
            <div className="backdrop" onClick={props.onCancel.action}/>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    {props.children}
                </div>
                <footer className="actions">
                    {buttons}
                </footer>
            </Card>
        </Fragment>
    )
};

export default Modal;
