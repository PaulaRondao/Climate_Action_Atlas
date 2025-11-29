'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { StyledRadio, Label } from './radioInput.styles';
import {
  Fieldset,
  InputContainer,
  InputWrapper,
  Legend,
} from '../initiativeCreationForm.styles';
import { Options } from '@/types/Form';

interface RadioInputProps {
  radioList: Options[];
  name: string;
}

const RadioInput = ({ radioList, name }: RadioInputProps): JSX.Element => {
  const { register } = useFormContext();
  return (
    <Fieldset
      id="radio-spokenLanguages"
      aria-labelledby="radio-spokenLanguages-legend radio-inline-messages"
    >
      <Legend as="legend" id="radio-spokenLanguages-legend">
        Sélectionner la réponse de votre choix&nbsp;:
      </Legend>
      {radioList.map((radio) => (
        <InputContainer key={radio.value.toString()}>
          <InputWrapper>
            <StyledRadio
              type="radio"
              value={radio.value}
              id={`radio-${name}-${radio.value}`}
              {...register(name)}
            />
            <Label htmlFor={`radio-${name}-${radio.value}`}>
              {radio.label}
            </Label>
          </InputWrapper>
        </InputContainer>
      ))}
    </Fieldset>
  );
};

export default RadioInput;
