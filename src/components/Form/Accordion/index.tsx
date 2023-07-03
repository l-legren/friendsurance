import React, { useState } from "react";
import { AccordionHeader } from "./AccordionHeader";

import {
    AccordionContent,
    AccordionWrapper,
    ClickableHeader,
    ContentContainer,
    AngleUp,
} from "./Accordion.styled";
import { InputField } from "..";

interface AccordionProps {
    children: React.ReactNode;
    inputField: InputField;
}

export const Accordion = ({ children, inputField }: AccordionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return (
        <AccordionWrapper>
            <ClickableHeader onClick={() => setIsExpanded(!isExpanded)}>
                <AccordionHeader
                    isExpanded={isExpanded}
                    inputField={inputField}
                />
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
