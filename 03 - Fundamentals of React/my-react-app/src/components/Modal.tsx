import React from 'react';
import Button from './Button.tsx'

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    rating: number;
};

const Modal: React.FC<ModalProps> = ({isOpen, onClose, rating}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2> Thank You</h2>
                <p>
                    You rated us {rating} star{rating > 1 ? 's' : ''}
                </p>
                <Button className="close-btn" onClick={onClose}>asd
                    Close
                </Button>
            </div>
        </div>
    );
};

export default Modal;
