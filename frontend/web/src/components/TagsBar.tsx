'use client';

import { OverflowSlider, useMotionValueEvent, useScroll } from '@airbnb/ui/components';
import { ChevronRight } from '@airbnb/ui/icons';
import { useState } from 'react';
import { trpc } from '../config/trpc';
import useQueryParams from '../hooks/usePropertyQuery';

const TagsBar = () => {
    const [data] = trpc.property.getTags.useSuspenseQuery();
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 6) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const { queryParams, setQueryParam } = useQueryParams();

    return (
        <nav
            className={`sticky top-[60px]  z-30 bg-white  ${scrolled ? 'border-b shadow-sm' : ''}`}
            style={{ paddingBlockStart: '20px' }}
        >
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-between   gap-6">
                    <div className="relative w-[calc(100%-110px)]">
                        <OverflowSlider slidesToShow={4}>
                            {({ handleNext, activeNext, activePrevious, handlePrevious }) => {
                                return (
                                    <>
                                        <OverflowSlider.Slider className="flex w-full flex-auto justify-between gap-2 overflow-hidden">
                                            {data?.tags.map((tag) => (
                                                <button
                                                    onClick={() => {
                                                        setQueryParam({
                                                            tags: tag.id,
                                                        });
                                                    }}
                                                    key={tag.id}
                                                    className={` flex shrink-0 cursor-pointer flex-col flex-nowrap items-center gap-2 border-b-2 px-4 py-3 ${
                                                        Number(queryParams.tags) === tag.id
                                                            ? 'border-dark-gray'
                                                            : 'hover:border-dark-gray border-transparent opacity-50 hover:opacity-100'
                                                    }`}
                                                >
                                                    <img src={tag.image} alt="" className="h-6 w-6" />
                                                    <span className="text-dark-gray text-xs font-semibold">
                                                        {tag.name}
                                                    </span>
                                                </button>
                                            ))}
                                        </OverflowSlider.Slider>
                                        {activeNext && (
                                            <div className="absolute right-0 top-0 flex h-full w-10 items-center justify-end bg-gradient-to-r from-transparent to-white">
                                                <button
                                                    onClick={handleNext}
                                                    className="flex  h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white"
                                                >
                                                    <ChevronRight className="rotate-180" height={12} width={12} />
                                                </button>
                                            </div>
                                        )}
                                        {activePrevious && (
                                            <div className="absolute left-0 top-0 flex h-full w-10 items-center justify-end bg-gradient-to-r from-white to-transparent">
                                                <button
                                                    onClick={handlePrevious}
                                                    className="flex  h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white"
                                                >
                                                    <ChevronRight height={12} width={12} />
                                                </button>
                                            </div>
                                        )}
                                    </>
                                );
                            }}
                        </OverflowSlider>
                    </div>

                    <button className="flex items-center gap-3 rounded-xl border px-4 py-3">
                        <svg
                            className="block"
                            width={14}
                            height={14}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                        >
                            <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                        <span className="text-dark-gray text-sm font-semibold">Filter</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TagsBar;
