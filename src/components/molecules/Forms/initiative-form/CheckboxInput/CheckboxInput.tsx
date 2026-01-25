import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Fieldset, InputContainer, InputWrapper, Legend } from '../initiativeCreationForm.styles';
import { Checkbox } from './CheckboxInput.styles';
import { Label } from '../RadioInput/radioInput.styles';

interface CheckboxInputProps {
  options: { label: string; value: string }[];
  name: string;
}

const CheckboxInput = ({ options, name }: CheckboxInputProps): JSX.Element => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = [], onChange } }) => (
        <Fieldset>
          <Legend as="legend" id={name}>
            Possibilité de choix multiples
          </Legend>
          {options.map((option) => (
            <InputContainer key={option.value}>
              <InputWrapper>
                <Checkbox
                  id={`checkbox-${name}-${option.value}`}
                  checked={value.includes(option.value)}
                  onChange={() => {
                    if (value.includes(option.value)) {
                      onChange(value.filter((v: string) => v !== option.value));
                    } else {
                      onChange([...value, option.value]);
                    }
                  }}
                />
                <Label htmlFor={`checkbox-${name}-${option.value}`}>{option.label}</Label>
              </InputWrapper>
            </InputContainer>
          ))}
        </Fieldset>
      )}
    />
  );
};

export default CheckboxInput;
