'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked: initialChecked = false, onChange }) => {
    const [checked, setChecked] = useState(initialChecked);

    const handleCheckboxChange = () => {
        const newChecked = !checked;

        if (onChange) {
            onChange(newChecked);
            setChecked(newChecked);
        }
    };

    return (
        <label className="relative">
            <motion.div
                className={`flex h-5 w-5 items-center justify-center rounded-md border-2 ${
                    checked ? 'bg-brand-600 border-brand-600' : 'border-brand-600'
                }`}
                onClick={handleCheckboxChange}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence>
                    {checked ? (
                        <motion.svg
                            key="check"
                            initial={{ opacity: 0, scale: 0.9, rotate: 300 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            exit={{ opacity: 0, scale: 0.9, rotate: 300 }}
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    ) : null}
                </AnimatePresence>
            </motion.div>
            <input
                type="checkbox"
                className="absolute h-full w-full opacity-0"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <span className="sr-only ml-2">{label}</span>
        </label>
    );
};
