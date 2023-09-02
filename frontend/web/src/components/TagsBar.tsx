'use client';

import { useMotionValueEvent, useScroll } from '@airbnb/ui/components';
import { useState } from 'react';
import { trpc } from '../config/trpc';

const TagsBar = () => {
    const [data] = trpc.property.getTags.useSuspenseQuery();
    const [activeTabId, setActiveTabId] = useState(3);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 6) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <nav
            className={`sticky top-[60px]  z-30 bg-white  ${scrolled ? 'border-b shadow-sm' : ''}`}
            style={{ paddingBlockStart: '20px' }}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between  gap-6">
                    <div className="flex flex-auto justify-between">
                        {data?.tags.map((tag) => (
                            <div
                                key={tag.id}
                                className={` flex cursor-pointer flex-col items-center gap-2 border-b-2 px-1 py-3 ${
                                    activeTabId === tag.id ? 'border-dark-gray' : 'border-transparent'
                                }`}
                            >
                                <img src={tag.image} alt="" className="h-6 w-6" />
                                <span className="text-dark-gray text-xs font-semibold">{tag.name}</span>
                            </div>
                        ))}
                    </div>
                    <button className="flex items-center gap-3 rounded-md border px-4 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
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
