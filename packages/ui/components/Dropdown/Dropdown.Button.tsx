'use client';

import { IDropdownContext, useDropdownContext } from './index';

export type ButtonType = React.ElementType;

export type IButtonProps<T extends ButtonType, E = React.ComponentPropsWithoutRef<T>> = {
    as?: T;
    children: React.ReactNode;
    className?: string;
    label?: string;
} & React.PropsWithChildren<E>;

const Button = <T extends ButtonType>({ children, className = '', as, ...rest }: IButtonProps<T>): JSX.Element => {
    const { open, setOpen, activeItemId, label }: IDropdownContext = useDropdownContext();
    const DefaultTag = as || 'button';
    return (
        <DefaultTag
            {...rest}
            role={'combobox'}
            aria-autocomplete="none"
            aria-haspopup="listbox"
            aria-controls={`${label}_dropdown`}
            aria-expanded={open}
            className={`${className}`}
            onClick={() => setOpen(!open)}
            aria-activedescendant={activeItemId ? `${label}_element_${activeItemId}` : ''}
        >
            {children}
        </DefaultTag>
    );
};

export default Button;
