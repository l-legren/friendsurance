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
} from "./Form.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    updateName,
    resetName,
    updateGender,
    resetGender,
    updateBirthdate,
    resetBirthdate,
    updateInsurances,
    resetInsurances,
    updateEmployment,
    resetEmployment,
    updateNumber,
    resetNumber,
} from "../../features/form/formSlice";

export enum InputField {
    Name = "name",
    Gender = "gender",
    Birth = "birthdate",
    Insurances = "insurances",
    Employment = "employment",
    PhoneNumber = "phoneNumber",
}

export const FriendsuranceForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const handleUpdate = (field: InputField) => {
        if (field === InputField.Name) {
            const name = getValues(InputField.Name);
            dispatch(updateName(name));
        } else if (field === InputField.Gender) {
            const gender = getValues(InputField.Gender);
            dispatch(updateGender(gender));
        } else if (field === InputField.Birth) {
            const birthdate = getValues(InputField.Birth);
            dispatch(updateBirthdate(birthdate));
        } else if (field === InputField.Insurances) {
            const insurances = getValues(InputField.Insurances);
            dispatch(updateInsurances(insurances));
        } else if (field === InputField.Employment) {
            const employment = getValues(InputField.Employment);
            dispatch(updateEmployment(employment));
        } else if (field === InputField.PhoneNumber) {
            const number = getValues(InputField.PhoneNumber);
            dispatch(updateNumber(number));
        }
    };

    const handleReset = (field: InputField) => {
        if (field === InputField.Name) {
            setValue(InputField.Name, "");
            dispatch(resetName());
        } else if (field === InputField.Gender) {
            setValue(InputField.Gender, "");
            dispatch(resetGender());
        } else if (field === InputField.Birth) {
            setValue(InputField.Birth, "");
            dispatch(resetBirthdate());
        } else if (field === InputField.Insurances) {
            setValue(InputField.Insurances, []);
            dispatch(resetInsurances());
        } else if (field === InputField.Employment) {
            setValue(InputField.Employment, "");
            dispatch(resetEmployment());
        } else if (field === InputField.PhoneNumber) {
            setValue(InputField.PhoneNumber, "");
            dispatch(resetNumber());
        }
    };

    return (
        <FormContainer>
            <Accordion inputField={InputField.Name}>
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
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={() => handleReset(InputField.Name)}>
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
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
                        Submit
                    </SubmitButton>
                    <CancelButton
                        onClick={() => handleReset(InputField.Gender)}
                    >
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Accordion inputField={InputField.Birth}>
                <Label htmlFor="name">When have you been born?</Label>
                <Input
                    type="date"
                    id="birthdate"
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
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={() => handleReset(InputField.Birth)}>
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
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
                        Submit
                    </SubmitButton>
                    <CancelButton
                        onClick={() => handleReset(InputField.Insurances)}
                    >
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
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
                        Submit
                    </SubmitButton>
                    <CancelButton
                        onClick={() => handleReset(InputField.Employment)}
                    >
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Accordion inputField={InputField.PhoneNumber}>
                <Label htmlFor="number">Phone number</Label>
                <Input
                    type="text"
                    id="number"
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
                        Submit
                    </SubmitButton>
                    <CancelButton
                        onClick={() => handleReset(InputField.PhoneNumber)}
                    >
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
        </FormContainer>
    );
};
