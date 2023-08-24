'use client';

import { MouseEvent, RefObject, TouchEvent, createContext, useContext, useEffect, useRef, useState } from 'react';
import { useInterval } from '../../hooks';
import Slider, { ISliderProps } from './Slider';

interface IOverflowSlider {
    children: (props: ISiderContext) => React.ReactNode;
    slidesToShow?: number;
    onSliderEnd?: () => void;
    autoPlay?: boolean;
    autoPlayDuration?: number;
    duration?: number;
}

export interface ISiderContext {
    ref: RefObject<HTMLDivElement> | null;
    duration: number;
    positionX: number;
    mousePostiionX: number;
    isMouseDown: boolean;
    handlePrevious: () => void;
    handleNext: () => void;
    handleMouseMove: (event: MouseEvent | TouchEvent) => void;
    handleMouseUp: (event: MouseEvent | TouchEvent) => void;
    handleMouseDown: (event: MouseEvent | TouchEvent) => void;
    handleSlideTo: (index: number) => void;
    activeNext: boolean;
    activePrevious: boolean;
    totalSlideCount: number;
    calculateNodes: () => void;
    activeIndex: number;

    // toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSliderContext = () => useContext(SliderContext);

export const SliderContext = createContext<ISiderContext>({
    ref: null,
    duration: 500,
    positionX: 0,
    activeIndex: 1,
    mousePostiionX: 0,
    isMouseDown: false,
    handleMouseMove: () => undefined,
    handleMouseUp: () => undefined,
    handleMouseDown: () => undefined,
    handlePrevious: () => undefined,
    handleNext: () => undefined,
    activeNext: true,
    activePrevious: false,
    handleSlideTo: () => undefined,
    totalSlideCount: 1,
    calculateNodes: () => undefined,
});

export const OverflowSlider: React.FC<IOverflowSlider> & {
    Slider: React.FC<ISliderProps>;
} = ({ children, slidesToShow = 1, autoPlayDuration = 2000, onSliderEnd, autoPlay = false, duration = 500 }) => {
    const [activeItem, setActiveItem] = useState(1);
    const [positionX, setPostionX] = useState(0);
    const [extraPostionX, setExtraPostitionX] = useState(0);
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(false);
    const [isMouseDown, setIsMoiseDown] = useState(false);
    const [mousePosition, setMousePosition] = useState(0);
    const [mousePostiionX, setMousePositionX] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [totalSlideCount, setTotalSlideCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const calculateNodes = () => {
        if (!ref.current) return;
        setTotalSlideCount(ref.current.children.length);
        const totalSliderAvaialbeWidht = ref.current?.offsetWidth;
        const tatalSliderElementsWidth = calculateNodesWidth(Array.from(ref.current?.childNodes) as HTMLElement[]);
        if (tatalSliderElementsWidth <= totalSliderAvaialbeWidht) {
            onSliderEnd && onSliderEnd();
            setNext(false);
        } else {
            setNext(true);
        }
    };

    const handleAutoSlide = () => {
        if (next) {
            handleNextSlide(activeItem + slidesToShow);
            return;
        }
        if (prev) {
            handlePreviousSlide(1);
        }
    };

    useInterval(handleAutoSlide, autoPlay && !isMouseOver ? autoPlayDuration : null);

    useEffect(() => {
        window.addEventListener('resize', calculateNodes);
        return () => window.removeEventListener('resize', calculateNodes);
    }, []);

    //calculate  html  elements width
    const calculateNodesWidth = (nodes: HTMLElement[]): number =>
        nodes.reduce((acc: number, curr: HTMLElement) => {
            return curr.offsetWidth + acc;
        }, 0);

    //slice html elements
    const sliceNodes = (nodes: HTMLElement[], start: number, end: number): HTMLElement[] => nodes.slice(start, end);

    const handleNextSlide = (slideTo: number): void => {
        if (!next) return;

        const childNodes = Array.from(ref.current?.childNodes || []) as HTMLElement[];
        const avaiableElementWidthForThisSlideAction: number = calculateNodesWidth(
            sliceNodes(childNodes, activeItem - 1, slideTo - 1)
        );

        const nextAvailbeElemenetsWidthAfterThisSlideAction: number = calculateNodesWidth(
            sliceNodes(childNodes, slideTo - 1, childNodes.length)
        );
        const totalSliderOffsetWidth: number = Number(ref.current?.offsetWidth) || 0;

        if (!!avaiableElementWidthForThisSlideAction && !!nextAvailbeElemenetsWidthAfterThisSlideAction) {
            const avaialbeMoveForNextSlide: number = positionX - avaiableElementWidthForThisSlideAction;

            if (nextAvailbeElemenetsWidthAfterThisSlideAction <= totalSliderOffsetWidth) {
                setNext(false);
                onSliderEnd && onSliderEnd();
            }

            setPostionX(avaialbeMoveForNextSlide);
            setPrev(true);
            setActiveItem(slideTo);
            return;
        }

        if (avaiableElementWidthForThisSlideAction > totalSliderOffsetWidth && next) {
            setPostionX((leftX) => leftX - (avaiableElementWidthForThisSlideAction - totalSliderOffsetWidth));
            setExtraPostitionX(avaiableElementWidthForThisSlideAction - totalSliderOffsetWidth);
            setNext(false);
            setPrev(true);
            onSliderEnd && onSliderEnd();
        }
    };

    const handlePreviousSlide = (slideTo: number) => {
        if (!prev) return;

        const childNodes = Array.from(ref.current?.childNodes || []) as HTMLElement[];
        const avaiableElementWidthForThisSlideAction = calculateNodesWidth(
            sliceNodes(childNodes, slideTo - 1, activeItem - 1)
        );

        if (extraPostionX) {
            positionX + extraPostionX === 0 && setPrev(false);
            setPostionX(positionX + extraPostionX);
            setExtraPostitionX(0);
            return;
        }

        slideTo === 1 && setPrev(false);

        setPostionX(positionX + avaiableElementWidthForThisSlideAction);
        setActiveItem(slideTo);
        setNext(true);
    };

    const handleMouseDown = (event: MouseEvent | TouchEvent) => {
        const screenXPostion = 'changedTouches' in event ? event.changedTouches[0].pageX : event.screenX;

        setMousePosition(screenXPostion);
        setIsMoiseDown(true);
    };

    const handlePositionAdjustmentAfterMouseMove = (totalMouseMove: number) => {
        if (totalMouseMove === 0) return;

        let slideCount = 1;
        let sliderRequiredPostiion = 0;
        const isRightMovement = totalMouseMove > 0 ? false : true;
        const childNodes = Array.from(ref.current?.childNodes || []) as HTMLElement[];
        const avaibleElementForMove = sliceNodes(
            childNodes,
            !isRightMovement ? 0 : activeItem - 1,
            !isRightMovement ? activeItem - 1 : childNodes.length
        );

        while (avaibleElementForMove.length > 0) {
            if (isRightMovement) {
                sliderRequiredPostiion += calculateNodesWidth(sliceNodes(avaibleElementForMove, 0, slidesToShow));
                avaibleElementForMove.splice(0, slidesToShow);
            } else {
                const reverseAvaibleElementForMove = avaibleElementForMove.reverse();
                sliderRequiredPostiion += calculateNodesWidth(
                    sliceNodes(reverseAvaibleElementForMove, 0, slidesToShow)
                );
                avaibleElementForMove.splice(avaibleElementForMove.length - slidesToShow, slidesToShow);
            }

            if (sliderRequiredPostiion > Math.abs(totalMouseMove)) {
                break;
            }

            slideCount++;
        }

        isRightMovement
            ? handleNextSlide(activeItem + slideCount * slidesToShow)
            : handlePreviousSlide(activeItem - slideCount * slidesToShow);
    };

    const handleMouseUp = () => {
        setMousePosition(0);
        setMousePositionX(0);
        setIsMoiseDown(false);
        handlePositionAdjustmentAfterMouseMove(mousePostiionX);
    };

    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
        event.stopPropagation();
        if (!('changedTouches' in event)) {
            event.preventDefault();
        }
        if (!isMouseDown) return;
        const screenXPostion = 'changedTouches' in event ? event.changedTouches[0].pageX : event.screenX;
        setMousePositionX(screenXPostion - mousePosition);
    };

    const handleMouseEnter = () => setIsMouseOver(true);

    const handleMouseLeave = () => setIsMouseOver(false);

    const handleSlideTo = (index: number) => {
        if (index < activeItem) {
            return handlePreviousSlide(index);
        }

        handleNextSlide(index);
    };

    return (
        <SliderContext.Provider
            value={{
                duration,
                ref,
                handleMouseMove,
                handleMouseUp,
                handleMouseDown,
                isMouseDown,
                mousePostiionX,
                positionX,
                handlePrevious: () => handlePreviousSlide(activeItem - slidesToShow),
                handleNext: () => handleNextSlide(activeItem + slidesToShow),
                activeNext: prev,
                activePrevious: next,
                handleSlideTo,
                totalSlideCount,
                calculateNodes,
                activeIndex: activeItem,
            }}
        >
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative w-full">
                {children({
                    duration,
                    ref,
                    handleMouseMove,
                    handleMouseUp,
                    handleMouseDown,
                    isMouseDown,
                    mousePostiionX,
                    positionX,
                    handlePrevious: () => handlePreviousSlide(activeItem - slidesToShow),
                    handleNext: () => handleNextSlide(activeItem + slidesToShow),
                    activeNext: next,
                    activePrevious: prev,
                    handleSlideTo,
                    totalSlideCount,
                    calculateNodes,
                    activeIndex: activeItem,
                })}
            </div>
        </SliderContext.Provider>
    );
};

OverflowSlider.defaultProps = {
    slidesToShow: 1,
    autoPlay: false,
};

OverflowSlider.Slider = Slider;
