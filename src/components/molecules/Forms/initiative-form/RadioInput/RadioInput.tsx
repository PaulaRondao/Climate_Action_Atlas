'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ResponseOptionsEnums } from '@/constants';
import { StyledRadio, Label } from './radioInput.styles';
import {
  Fieldset,
  InputContainer,
  InputWrapper,
  Legend,
} from '../initiativeCreationForm.styles';
import { fr } from '@faker-js/faker/.';

interface RadioInputProps {
  ResponseOption: { label: string; value: ResponseOptionsEnums }[];
  name: string;
  onClick?: (e: any) => void;
}

const RadioInput = ({
  ResponseOption,
  name,
  onClick = () => ({}),
}: RadioInputProps): JSX.Element => {
  const { register } = useFormContext();
  return (
    <Fieldset
      id="radio-spokenLanguages"
      aria-labelledby="radio-spokenLanguages-legend radio-inline-messages"
    >
      <Legend as="legend" id="radio-spokenLanguages-legend">
        Sélectionner la réponse de votre choix&nbsp;:
      </Legend>
      {ResponseOption.map((option) => (
        <InputContainer key={option.value.toString()}>
          <InputWrapper>
            <StyledRadio
              type="radio"
              value={option.value}
              id={`radio-${name}-${option.value}`}
              onClick={onClick}
              {...register(name)}
            />
            <Label htmlFor={`radio${name}-${option.value}`}>
              {option.label}
            </Label>
          </InputWrapper>
        </InputContainer>
      ))}
    </Fieldset>
  );
};

export default RadioInput;
