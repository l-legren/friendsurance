import React from "react";
import { Answer, HeaderWrapper, Title, Marker } from "./AccordionHeader.styled";
import { useSelector } from "react-redux";
import { InputField } from "../..";
import { formatArrayToString } from "../../../../tools/formatArrayToString";

interface AccordionHeaderProps {
    isExpanded: boolean;
    inputField: InputField;
}

export const AccordionHeader = ({
    isExpanded,
    inputField,
}: AccordionHeaderProps) => {
    const fields = useSelector(({ form }) => form.fields);
    const allAnswered = useSelector(({ form }) => form.allAnswered);

    return (
        <HeaderWrapper isExpanded={isExpanded}>
            <Title>{fields[inputField].title}</Title>
            <Answer>
                {Array.isArray(fields[inputField].answer)
                    ? formatArrayToString(fields[inputField].answer)
                    : fields[inputField].answer}
            </Answer>
            <Marker
                hasAnswer={fields[inputField].answer ? true : false}
                allAnswered={allAnswered}
            />
        </HeaderWrapper>
    );
};
