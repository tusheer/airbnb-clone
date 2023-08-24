'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';

export interface IUnmountDelayProps extends PropsWithChildren {
    delay: number;
    unmount: boolean;
}

export const UnmountDelay: React.FC<IUnmountDelayProps> = ({ children, delay, unmount }) => {
    const [isUnmount, setIsUnmount] = useState(unmount);

    useEffect(() => {
        if (unmount === false) {
            setTimeout(() => {
                setIsUnmount(false);
            }, delay);
            return;
        }
        setIsUnmount(true);
    }, [unmount, delay]);

    return isUnmount ? <>{children}</> : null;
};
