import React, { useState } from "react";
import { AccordionHeader } from "./AccordionHeader";

import {
    AccordionContent,
    AccordionWrapper,
    ClickableHeader,
    ContentContainer,
    AngleUp,
} from "./Accordion.styled";

interface AccordionProps {
    children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return (
        <AccordionWrapper>
            <ClickableHeader onClick={() => setIsExpanded(!isExpanded)}>
                <AccordionHeader isExpanded={isExpanded} />
            </ClickableHeader>
            <ContentContainer>
                <AccordionContent isExpanded={isExpanded}>
                    {children}
                </AccordionContent>
                {isExpanded && <AngleUp onClick={() => setIsExpanded(false)} />}
            </ContentContainer>
        </AccordionWrapper>
    );
};
