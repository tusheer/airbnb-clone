'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';

export const Iframe: React.FC<React.PropsWithChildren & React.IframeHTMLAttributes<HTMLIFrameElement>> = ({
    children,
    srcDoc = '<!DOCTYPE html><html><head></head><body ></body></html>',
    ...props
}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const mountNode = iframeRef.current?.contentDocument?.body;

    return (
        <iframe srcDoc={srcDoc} {...props} ref={iframeRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    );
};
