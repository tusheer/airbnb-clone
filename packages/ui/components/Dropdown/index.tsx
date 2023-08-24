'use client';
import { createContext, useContext, useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/use-onclick-outside';
import Button from './Dropdown.Button';
import Item, { IItemProps } from './Dropdown.Item';
import Menu, { IMenuProps } from './Dropdown.Menu';

export interface IDropdownContext {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeItemId: string | null;
    setActiveItemId: React.Dispatch<React.SetStateAction<null | string>>;
    label: string;
}

export const useDropdownContext = () => useContext(DropdownContext);

export const DropdownContext = createContext<IDropdownContext>({
    open: false,
    setOpen: () => undefined,
    activeItemId: null,
    setActiveItemId: () => undefined,
    label: 'stuffpie',
});

type RenderProps = ({ open, setOpen }: { open: boolean; setOpen: (type: boolean) => void }) => React.ReactNode;

interface IDropdown {
    children: React.ReactNode | RenderProps;
    className?: string;
    outSideClick?: boolean;
    onOutsideClick?: () => void;
    label?: string;
}

const DropdownRoot: React.FC<IDropdown> = ({
    children,
    className = '',
    outSideClick = true,
    onOutsideClick,
    label = 'fanbase',
}) => {
    const [open, setOpen] = useState(false);

    const [activeItemId, setActiveItemId] = useState<null | string>(null);

    const ref = useRef(null);

    const providerValue = { open, setOpen, activeItemId, setActiveItemId, label };

    useOnClickOutside(ref, () => {
        if (outSideClick) {
            setOpen(false);
            setActiveItemId(null);
        }
        if (onOutsideClick) {
            onOutsideClick();
        }
    });

    return (
        <DropdownContext.Provider value={providerValue}>
            <div className={`${className} inline-block`} ref={ref}>
                {children !== null ? (typeof children === 'function' ? children({ open, setOpen }) : children) : null}
            </div>
        </DropdownContext.Provider>
    );
};

export const Dropdown: React.FC<IDropdown> & {
    Item: React.FC<IItemProps>;
    Menu: React.FC<IMenuProps>;
    Button: typeof Button;
} = Object.assign(DropdownRoot, { Item, Menu, Button });
