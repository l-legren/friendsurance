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
    InputWrapper,
    RadioCheckboxInput,
    RadioCheckboxLabel,
    FieldHeader,
    StyledSelect,
    StyledOption,
    Divider,
    ResetButton,
    ResetWrapper,
} from "./Form.styled";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
    updateField,
    expandCollapseNext,
    closeExpandedButSelected,
    resetField,
    setLastOpened,
    allFieldsAnswered,
    resetAll,
} from "../../features/form/formSlice";

export enum InputField {
    Name = "name",
    Gender = "gender",
    Birth = "birthdate",
    Insurances = "insurances",
    Employment = "employment",
    PhoneNumber = "number",
}

export const FriendsuranceForm = () => {
    const {
        register,
        getValues,
        setValue,
        reset,
        formState: { errors },
    } = useForm();
    const { name, gender, employment, birthdate, insurances, number } =
        useSelector(({ form }) => form.fields);
    const lastOpened = useSelector(({ form }) => form.lastOpened);
    const dispatch = useDispatch();
    const allAnswered = useSelector(({ form }) => form.allAnswered);

    const handleUpdate = (field: InputField) => {
        if (field === InputField.Name) {
            const name = getValues(InputField.Name);
            dispatch(updateField({ field, input: name }));
        } else if (field === InputField.Gender) {
            const gender = getValues(InputField.Gender);
            dispatch(updateField({ field, input: gender }));
        } else if (field === InputField.Birth) {
            const birthdate = getValues(InputField.Birth);
            dispatch(updateField({ field, input: birthdate }));
        } else if (field === InputField.Insurances) {
            const insurances = getValues(InputField.Insurances);
            dispatch(updateField({ field, input: insurances }));
        } else if (field === InputField.Employment) {
            const employment = getValues(InputField.Employment);
            dispatch(updateField({ field, input: employment }));
        } else if (field === InputField.PhoneNumber) {
            const number = getValues(InputField.PhoneNumber);
            dispatch(updateField({ field, input: number }));
        }
        dispatch(setLastOpened(null));
        dispatch(allFieldsAnswered(null));
        dispatch(expandCollapseNext(field));
    };

    const handleReset = (field: InputField, canceling: string | undefined) => {
        if (field === InputField.Name) {
            setValue(InputField.Name, "");
        } else if (field === InputField.Gender) {
            setValue(InputField.Gender, "");
        } else if (field === InputField.Birth) {
            setValue(InputField.Birth, "");
        } else if (field === InputField.Insurances) {
            setValue(InputField.Insurances, []);
        } else if (field === InputField.Employment) {
            setValue(InputField.Employment, "");
        } else if (field === InputField.PhoneNumber) {
            setValue(InputField.PhoneNumber, "");
        }
        dispatch(resetField(field));

        if (canceling) {
            dispatch(closeExpandedButSelected(lastOpened));
        }
    };

    return (
        <FormContainer>
            <Divider />
            <Accordion inputField={InputField.Name}>
                <Label htmlFor="name">What is your name?</Label>
                <Input
                    type="text"
                    id="name"
                    defaultValue={name.answer}
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "Name should be longer than 3 characters",
                        },
                        maxLength: {
                            value: 25,
                            message:
                                "Name should be shorter than 25 characters",
                        },
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message as string}</ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Name)}
                    >
                        {name.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(InputField.Name, name.answer)
                        }
                    >
                        {name.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            <Accordion inputField={InputField.Gender}>
                <FieldHeader>What is your gender?</FieldHeader>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="radio"
                        id="gender"
                        value="Female"
                        {...register("gender", {
                            required: "Please select one value",
                        })}
                    />
                    <RadioCheckboxLabel htmlFor="Male">
                        Female
                    </RadioCheckboxLabel>
                </InputWrapper>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="radio"
                        id="gender"
                        value="Male"
                        {...register("gender", {
                            required: "Please select one value",
                        })}
                    />
                    <RadioCheckboxLabel htmlFor="Male">Male</RadioCheckboxLabel>
                </InputWrapper>
                {errors.gender && (
                    <ErrorMessage>
                        {errors.gender.message as string}
                    </ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Gender)}
                    >
                        {gender.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(InputField.Gender, gender.answer)
                        }
                    >
                        {gender.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            <Accordion inputField={InputField.Birth}>
                <Label htmlFor="name">When have you been born?</Label>
                <Input
                    type="date"
                    id="birthdate"
                    defaultValue={birthdate.answer}
                    {...register("birthdate", {
                        required: "Please pick your birthdate",
                    })}
                />
                {errors.birthdate && (
                    <ErrorMessage>
                        {errors.birthdate.message as string}
                    </ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Birth)}
                    >
                        {birthdate.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(InputField.Birth, birthdate.answer)
                        }
                    >
                        {birthdate.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            <Accordion inputField={InputField.Insurances}>
                <FieldHeader>How many insurances do you have?</FieldHeader>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="checkbox"
                        id="health"
                        value="Health"
                        {...register(InputField.Insurances, { required: true })}
                    />
                    <RadioCheckboxLabel htmlFor="health">
                        Health Insurance
                    </RadioCheckboxLabel>
                </InputWrapper>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="checkbox"
                        id="car"
                        value="Car"
                        {...register(InputField.Insurances, { required: true })}
                    />
                    <RadioCheckboxLabel htmlFor="car">
                        Car Insurance
                    </RadioCheckboxLabel>
                </InputWrapper>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="checkbox"
                        id="liability"
                        value="Liability"
                        {...register(InputField.Insurances, { required: true })}
                    />
                    <RadioCheckboxLabel htmlFor="liability">
                        Liability Insurance
                    </RadioCheckboxLabel>
                </InputWrapper>
                <InputWrapper>
                    <RadioCheckboxInput
                        type="checkbox"
                        id="second-car"
                        value="Second car"
                        {...register(InputField.Insurances, { required: true })}
                    />
                    <RadioCheckboxLabel htmlFor="second-car">
                        Second Car Insurance
                    </RadioCheckboxLabel>
                </InputWrapper>

                {errors.insurances && (
                    <ErrorMessage>
                        {errors.insurances.message as string}
                    </ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Insurances)}
                    >
                        {insurances.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(
                                InputField.Insurances,
                                insurances.answer
                            )
                        }
                    >
                        {insurances.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            <Accordion inputField={InputField.Employment}>
                <Label htmlFor="employment">Employment Status</Label>
                <StyledSelect
                    id="employment"
                    {...register(InputField.Employment, { required: true })}
                >
                    <StyledOption value="Employed">Employed</StyledOption>
                    <StyledOption value="Unemployed">Unemployed</StyledOption>
                    <StyledOption value="Self-employed">
                        Self-employed
                    </StyledOption>
                    <StyledOption value="Student">Student</StyledOption>
                </StyledSelect>
                {errors.employment && (
                    <ErrorMessage>
                        {errors.employment.message as string}
                    </ErrorMessage>
                )}

                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Employment)}
                    >
                        {employment.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(
                                InputField.Employment,
                                employment.answer
                            )
                        }
                    >
                        {employment.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            <Accordion inputField={InputField.PhoneNumber}>
                <Label htmlFor="number">Phone number</Label>
                <Input
                    type="text"
                    id="number"
                    defaultValue={number.answer}
                    {...register("number", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\d{7,12}$/,
                            message:
                                "Phone number must be between 7 and 12 digits",
                        },
                    })}
                />
                {errors.number && (
                    <ErrorMessage>
                        {errors.number.message as string}
                    </ErrorMessage>
                )}

                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.PhoneNumber)}
                    >
                        {number.answer ? "Edit" : "Submit"}
                    </SubmitButton>
                    <CancelButton
                        onClick={() =>
                            handleReset(InputField.PhoneNumber, number.answer)
                        }
                    >
                        {number.answer ? "Cancel" : "Clear"}
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Divider />
            {allAnswered && (
                <ResetWrapper>
                    <ResetButton
                        onClick={() => {
                            reset();
                            dispatch(resetAll(true));
                        }}
                    >
                        Reset
                    </ResetButton>
                </ResetWrapper>
            )}
        </FormContainer>
    );
};
