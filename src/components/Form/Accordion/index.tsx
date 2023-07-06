import React from "react";
import { AccordionHeader } from "./AccordionHeader";

import {
    AccordionContent,
    AccordionWrapper,
    ClickableHeader,
} from "./Accordion.styled";
import { InputField } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
    closeExpandedButSelected,
    setLastOpened,
} from "../../../features/form/formSlice";

interface AccordionProps {
    children: React.ReactNode;
    inputField: InputField;
}

export const Accordion = ({ children, inputField }: AccordionProps) => {
    const { name, gender, birthdate, employment, insurances, number } =
        useSelector(({ form }) => form.fields);
    const dispatch = useDispatch();

    const handleClick = (inputField: InputField): void => {
        dispatch(setLastOpened(null));
        if (inputField === InputField.Name)
            name.answer && dispatch(closeExpandedButSelected(inputField));
        if (inputField === InputField.Gender)
            gender.answer && dispatch(closeExpandedButSelected(inputField));
        if (inputField === InputField.Birth)
            birthdate.answer && dispatch(closeExpandedButSelected(inputField));
        if (inputField === InputField.Insurances)
            insurances.answer && dispatch(closeExpandedButSelected(inputField));
        if (inputField === InputField.Employment)
            employment.answer && dispatch(closeExpandedButSelected(inputField));
        if (inputField === InputField.PhoneNumber)
            number.answer && dispatch(closeExpandedButSelected(inputField));
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

    return (
        <AccordionWrapper>
            <ClickableHeader onClick={() => handleClick(inputField)}>
                <AccordionHeader
                    isExpanded={handleExpansion(inputField)}
                    inputField={inputField}
                />
            </ClickableHeader>
            <AccordionContent isExpanded={handleExpansion(inputField)}>
                {children}
            </AccordionContent>
        </AccordionWrapper>
    );
};
