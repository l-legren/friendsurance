import React from "react";
import { Answer, HeaderWrapper, Title, Marker } from "./AccordionHeader.styled";
import { useSelector } from "react-redux";

interface AccordionHeaderProps {
    isExpanded: boolean;
}

export const AccordionHeader = ({ isExpanded }: AccordionHeaderProps) => {
    const inputName = useSelector(({ form }) => form.name);
    return (
        <>
            <HeaderWrapper isExpanded={isExpanded}>
                <Title>Question 1</Title>
                <Answer>{inputName}</Answer>
                <Marker />
            </HeaderWrapper>
        </>
    );
};
