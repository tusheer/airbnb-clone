'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export interface IModalProps {
    className?: string;
    children: React.ReactNode;
    onClose: () => void;
    open: boolean;
    backdropClassName?: string;
}

const modalVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            duration: 0.2,
        },
    },
};

export const Modal: React.FC<IModalProps> = ({ className = '', children, onClose, open, backdropClassName = '' }) => {
    const [isBrowser, setIsBrower] = useState<boolean>(false);
    const domref = useRef<HTMLBodyElement | null>(null);
    useEffect(() => {
        setIsBrower(true);
        const appRoot = document.getElementsByTagName('body')[0];
        domref.current = appRoot;

        () => {
            domref.current = null;
        };
    }, []);

    const handleEscapeModal = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isBrowser && open) {
            document.addEventListener('keydown', handleEscapeModal);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeModal);
        };
    }, [handleEscapeModal, isBrowser, open]);

    const DialogElement = (
        <AnimatePresence>
            {open ? (
                <motion.div
                    aria-hidden={!open}
                    aria-modal="true"
                    role="dialog"
                    variants={modalVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onClick={onClose}
                    className={`${backdropClassName} fixed inset-0 flex items-center justify-center bg-[#344054B2]   px-5 backdrop-blur-[8px] transition-all`}
                    style={{ zIndex: '1000' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeOut' } }}
                        onClick={(e) => e.stopPropagation()}
                        className={`max-h-screen w-full overflow-auto bg-white ${className} `}
                        style={{ maxHeight: 'calc(100vh - 50px)' }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );

    if (isBrowser && domref.current) {
        return ReactDOM.createPortal(DialogElement, domref.current);
    } else return null;
};
