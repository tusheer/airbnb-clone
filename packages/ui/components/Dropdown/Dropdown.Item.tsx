'use client';

import { useId } from 'react';
import { IDropdownContext, useDropdownContext } from './index';

export interface IItemProps {
    children: ({ isActive }: { isActive: boolean }) => React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}

const Item: React.FC<IItemProps> = ({ children, className = '', onClick }) => {
    const uid = useId();

    const { activeItemId, label }: IDropdownContext = useDropdownContext();
    return (
        <li
            tabIndex={-1}
            id={`${label}_element_${uid}`}
            aria-selected={uid === activeItemId}
            role="option"
            data-uid={uid}
            className={className}
            onClick={(event) => {
                event.stopPropagation();
                onClick && onClick(event);
            }}
        >
            {children({ isActive: uid === activeItemId })}
        </li>
    );
};

export default Item;
