'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Initiatives } from '@/constants';
import { Checkbox } from './CheckboxInput.styles';
import {
  Fieldset,
  InputContainer,
  InputWrapper,
  Legend,
} from '../initiativeCreationForm.styles';
import { Label } from '../RadioInput/radioInput.styles';

interface CheckboxInputProps {
  options: { label: string; value: keyof typeof Initiatives }[];
  name: string;
  onClick?: (e: any) => void;
}

const CheckboxInput = ({
  options,
  name,
  onClick = () => ({}),
}: CheckboxInputProps): JSX.Element => {
  const { register } = useFormContext();
  return (
    <>
      <Fieldset>
        <Legend as="legend" id="initiativeType">
          Possibilité de choix multiples
        </Legend>
        {options.map((option) => (
          <InputContainer key={option.value.toString()}>
            <InputWrapper>
              <Checkbox
                value={option.value}
                id={`checkbox-${name}-${option.value}`}
                onClick={onClick}
                {...register(name)}
              />
              <Label htmlFor={`checkbox-${name}-${option.value}`}>
                {option.label}
              </Label>
            </InputWrapper>
          </InputContainer>
        ))}
      </Fieldset>
    </>
  );
};

export default CheckboxInput;
