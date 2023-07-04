import React, { useState, useEffect } from "react";
import { AccordionHeader } from "./AccordionHeader";

import {
    AccordionContent,
    AccordionWrapper,
    ClickableHeader,
    ContentContainer,
    AngleUp,
} from "./Accordion.styled";
import { InputField } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
    expandCollapseBirthdate,
    expandCollapseInsurances,
    expandCollapseName,
    expandCollapseNumber,
    expandCollapseGender,
    expandCollapseEmployment,
} from "../../../features/form/formSlice";

interface AccordionProps {
    children: React.ReactNode;
    inputField: InputField;
}

export const Accordion = ({ children, inputField }: AccordionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { name, gender, birthdate, employment, insurances, number } =
        useSelector(({ form }) => form);
    const dispatch = useDispatch();

    const handleClick = (inputField: InputField): void => {
        if (inputField === InputField.Name)
            dispatch(expandCollapseName(!isExpanded));
        if (inputField === InputField.Gender)
            dispatch(expandCollapseGender(!isExpanded));
        if (inputField === InputField.Birth)
            dispatch(expandCollapseBirthdate(!isExpanded));
        if (inputField === InputField.Insurances)
            dispatch(expandCollapseInsurances(!isExpanded));
        if (inputField === InputField.Employment)
            dispatch(expandCollapseEmployment(!isExpanded));
        if (inputField === InputField.PhoneNumber)
            dispatch(expandCollapseNumber(!isExpanded));
        setIsExpanded(!isExpanded);
    };

    const handleExpansion = (inputField: InputField): boolean => {
        return inputField === InputField.Name
            ? name.isExpanded
            : inputField === InputField.Gender
            ? gender.isExpanded
            : inputField === InputField.Birth
            ? birthdate.isExpanded
            : inputField === InputField.Insurances
            ? insurances.isExpanded
            : inputField === InputField.Employment
            ? employment.isExpanded
            : inputField === InputField.PhoneNumber
            ? number.isExpanded
            : false;
    };

    useEffect(() => {
        const state = handleExpansion(inputField);
        setIsExpanded(state);
    }, []);

    return (
        <AccordionWrapper>
            <ClickableHeader onClick={() => handleClick(inputField)}>
                <AccordionHeader
                    isExpanded={isExpanded}
                    inputField={inputField}
                />
            </ClickableHeader>
            <ContentContainer>
                <AccordionContent isExpanded={handleExpansion(inputField)}>
                    {children}
                </AccordionContent>
                {isExpanded && <AngleUp onClick={() => handleClick(inputField)} />}
            </ContentContainer>
        </AccordionWrapper>
    );
};
