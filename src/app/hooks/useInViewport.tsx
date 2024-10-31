"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useInViewport(className: string) {
    const [inViewStates, setInViewStates] = useState<boolean[]>([]);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(`.${className}`));
        const newInViewStates = Array(elements.length).fill(false);

        elements.forEach((element, index) => {
            ScrollTrigger.create({
                trigger: element,
                start: 'center 80%',
                onEnter: () => {
                    newInViewStates[index] = true;
                    setInViewStates([...newInViewStates]);
                },
                onLeaveBack: () => {
                    newInViewStates[index] = false;
                    setInViewStates([...newInViewStates]);
                },
            });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, [className]);

    return inViewStates;
}