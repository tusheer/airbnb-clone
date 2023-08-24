'use client';

import { Children, useEffect } from 'react';
import { useSliderContext } from '.';

export interface ISliderProps {
    children: React.ReactNode[] | React.ReactNode;
    className?: string;
}

const Slider: React.FC<ISliderProps> = ({ children, className = '' }) => {
    const {
        handleMouseDown,
        duration,
        handleMouseMove,
        handleMouseUp,
        isMouseDown,
        mousePostiionX,
        positionX,
        ref,
        calculateNodes,
        handleSlideTo,
        activeIndex,
    } = useSliderContext();

    const chilrenCount = Children.count(children);

    useEffect(() => {
        !!Children.count(children) && calculateNodes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chilrenCount]);

    const handleSlideWhenWindowResize = () => {
        handleSlideTo(activeIndex);
    };

    useEffect(() => {
        window.addEventListener('resize', handleSlideWhenWindowResize);
        return () => window.removeEventListener('resize', handleSlideWhenWindowResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchStartCapture={handleMouseDown}
            onTouchEnd={handleMouseUp}
            className={`relative w-full  ${className}`}
        >
            <div style={{ overflow: 'clip visible', height: '100%', width: '100%' }}>
                <div
                    style={{
                        height: '100%',
                        display: 'flex',
                        transform: `translateX(${positionX + mousePostiionX}px)`,
                        transition: !isMouseDown ? `${duration}ms transform` : '',
                    }}
                    ref={ref}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Slider;
