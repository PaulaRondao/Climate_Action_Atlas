import React from 'react';
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form';;
import { ResponseOptionsEnums } from '@/constants';
import { RadioContainer, StyledRadio, Label } from './radioInput.styles';

interface RadioInputProps {
  ResponseOption: { label: string; value: ResponseOptionsEnums }[];
  name: string,
  onClick?: (e: any) => void,
  register: UseFormRegister<any>,
}

const RadioInput = ({
  ResponseOption,
  name,
  onClick = () => ({}),
  register,
}: RadioInputProps): JSX.Element => {

  return (
    <>
      {ResponseOption.map((option) => (
        <RadioContainer key={option.value.toString()}>
          <StyledRadio
            type="radio"
            value={option.value}
            id={`radio-${name}-${option.value}`}
            onClick={onClick}
            {...register(name)}
          />
          <Label htmlFor={`radio${name}-${option.value}`}>{option.label}</Label>
        </RadioContainer>
      ))}
    </>
  );
};

export default RadioInput;
