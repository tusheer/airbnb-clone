'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLockedBody } from '../../hooks';

const drawerVariants: Variants = {
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
            delay: 0.3,
            duration: 0.2,
        },
    },
};

export interface IDrawer {
    position: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT';
    onClose: () => void;
    open: boolean;
    className?: string;
    backdropClassName?: string;
}

export const Drawer: React.FC<React.PropsWithChildren<IDrawer>> = ({
    children,
    className = '',
    backdropClassName = '',
    position = 'LEFT',
    onClose,
    open,
}) => {
    const [isBrowser, setIsBrower] = useState<boolean>(false);
    const domref = useRef<HTMLBodyElement | null>(null);

    useLockedBody(open, '__next');

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

    const initialPostion = useMemo(() => {
        const positionStyles = {
            LEFT: { left: '-100%', top: 0, bottom: 0 },
            RIGHT: { right: '-100%', top: 0, bottom: 0 },
            BOTTOM: { bottom: '-100%', left: 0, right: 0 },
            TOP: { top: '-100%', left: 0, right: 0 },
        };
        return positionStyles[position];
    }, [position]);

    const afterPosition = useMemo(() => {
        const afterStyles = {
            LEFT: { left: 0, top: 0, bottom: 0 },
            RIGHT: { right: 0, top: 0, bottom: 0 },
            BOTTOM: { bottom: 0, left: 0, right: 0 },
            TOP: { top: 0, left: 0, right: 0 },
        };
        return afterStyles[position];
    }, [position]);

    const DrawerElement = (
        <AnimatePresence>
            {open ? (
                <>
                    <motion.div
                        aria-hidden={!open}
                        variants={drawerVariants}
                        style={{ zIndex: '900' }}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onClick={onClose}
                        role="navigation"
                        className={`fixed inset-0 ${backdropClassName}`}
                    ></motion.div>
                    <motion.div
                        style={{ zIndex: '910' }}
                        onClick={(e) => e.stopPropagation()}
                        className={`${className} fixed `}
                        initial={{
                            ...initialPostion,
                        }}
                        exit={{
                            ...initialPostion,
                            transition: { duration: 0.4, ease: 'easeIn' },
                        }}
                        animate={{
                            ...afterPosition,
                            transition: { duration: 0.4, ease: 'easeOut' },
                        }}
                    >
                        {children}
                    </motion.div>
                </>
            ) : null}
        </AnimatePresence>
    );

    if (isBrowser && domref.current) {
        return ReactDOM.createPortal(DrawerElement, domref.current);
    } else return null;
};
