import React, { useState } from "react";
import { AccordionHeader } from "./AccordionHeader";

import { AccordionContent, AccordionWrapper } from "./Accordion.styled";

interface AccordionProps {
    children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return (
        <AccordionWrapper>
            <div onClick={() => setIsExpanded(!isExpanded)}>
                <AccordionHeader />
            </div>
            <AccordionContent isExpanded={isExpanded}>
                {children}
            </AccordionContent>
        </AccordionWrapper>
    );
};
