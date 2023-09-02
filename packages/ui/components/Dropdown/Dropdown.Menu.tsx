import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useEventListener from '../../hooks/use-event-listener';
import { IDropdownContext, useDropdownContext } from './index';

export interface IMenuProps {
    children: React.ReactNode;
    className?: string;
}

const modalVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 20,
        opacity: 0,
    },
};

const Menu: React.FC<IMenuProps> = ({ children, className = '' }) => {
    const { label, open, setActiveItemId, setOpen }: IDropdownContext = useDropdownContext();
    const listselements = useRef<HTMLLIElement[]>([]);
    const listboxref = useRef<HTMLUListElement | null>(null);
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    useEffect(() => {
        if (open && listboxref.current) {
            const allElemets = listboxref.current.querySelectorAll('li[role="option"]');
            listselements.current = Array.from(allElemets) as HTMLLIElement[];
        }
    }, [open]);

    const getList = (index: null | number) => {
        if (index === null) return null;
        return listselements.current[index];
    };

    const getListBoxUidAttribute = (list: null | HTMLLIElement) => {
        if (list === null) return null;
        return list.getAttribute('data-uid');
    };

    const handleSelectNextItem = () => {
        const currentIndex =
            activeIndex === null || activeIndex === listselements.current.length - 1 ? 0 : activeIndex + 1;
        const nextList = getList(currentIndex) as HTMLLIElement;
        const nextItemID = getListBoxUidAttribute(nextList);
        setActiveIndex(currentIndex);
        setActiveItemId(nextItemID);
        nextList.focus();
    };

    const handlePreviousItem = () => {
        if (activeIndex === null || activeIndex === 0) return;
        const previousList = getList(activeIndex - 1) as HTMLLIElement;
        const previousItemID = getListBoxUidAttribute(previousList);
        setActiveIndex(activeIndex - 1);
        setActiveItemId(previousItemID);
        previousList.focus();
    };

    const handleEnterItem = () => {
        if (activeIndex !== null) {
            const list = getList(activeIndex) as HTMLLIElement;
            const findAnyLinkTag = list.querySelectorAll('a');
            list.click();
            findAnyLinkTag.forEach((element) => {
                element.click();
            });
        }
    };

    useEventListener(
        'keydown',
        (event) => {
            if (open && listselements.current.length) {
                switch (event.key) {
                    case 'ArrowDown':
                    case 'Tab':
                        event.preventDefault();
                        handleSelectNextItem();
                        break;
                    case 'ArrowUp':
                        event.preventDefault();
                        handlePreviousItem();
                        break;
                    case 'Enter':
                    case ' ': // Space
                        handleEnterItem();
                        break;
                    case 'Escape':
                    case 'Esc':
                        setOpen(false);
                        break;
                    case 'PageUp':
                    case 'Home':
                        setActiveIndex(0);
                        setActiveItemId(getListBoxUidAttribute(getList(0)));
                        break;
                    case 'PageDown':
                    case 'End':
                        setActiveIndex(listselements.current.length - 1);
                        setActiveItemId(getListBoxUidAttribute(getList(listselements.current.length - 1)));
                        break;
                    default:
                }
            } else {
                setActiveIndex(null);
            }
        },
        undefined,
        open
    );

    return (
        <AnimatePresence>
            {open ? (
                <motion.ul
                    variants={modalVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className={className}
                    ref={listboxref}
                    role="listbox"
                    id={`${label}_dropdown`}
                    tabIndex={-1}
                >
                    {children}
                </motion.ul>
            ) : null}
        </AnimatePresence>
    );
};

export default Menu;
