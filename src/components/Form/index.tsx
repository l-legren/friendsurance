import React from "react";
import { Accordion } from "./Accordion";
import {
    FormContainer,
    Label,
    Input,
    ErrorMessage,
    SubmitButton,
    CancelButton,
    ButtonWrapper,
} from "./Form.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateName, resetName } from "../../features/form/formSlice";

export const FriendsuranceForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const handleSubmitName = () => {
        const name = getValues("name");
        dispatch(updateName(name));
    };
    const handleResetName = () => {
        setValue("name", "");
        dispatch(resetName());
    };

    return (
        <FormContainer>
            <Accordion>
                <Label htmlFor="name">What is your name?</Label>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "Name should be longer than 3 characters",
                        },
                        maxLength: {
                            value: 25,
                            message:
                                "Name should be shorter thatn 25 characters",
                        },
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message as string}</ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton type="submit" onClick={handleSubmitName}>
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={handleResetName}>Clear</CancelButton>
                </ButtonWrapper>
            </Accordion>
        </FormContainer>
    );
};
