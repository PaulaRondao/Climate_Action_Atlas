'use client';

import React, { useEffect, useRef } from 'react';
import { ResponseAddress } from '@/types/city.interface';
import AsyncSelect from 'react-select/async';
import { Controller, useFormContext } from 'react-hook-form';
import { searchAddresses } from '@/services/address';

export interface SelectDropdownProps {
  name: string;
  placeholder: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  name,
  placeholder,
}: SelectDropdownProps) => {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLDivElement | null>(null);

  const dropdownStyles = {
    control: (styles: any, state: any) => ({
      ...styles,
      borderColor: state.isFocused ? 'blue' : 'gray',
      boxShadow: 'none',
      '&:hover': { borderColor: 'blue' },
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: state.isSelected ? 'blue' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': { backgroundColor: 'lightgray' },
    }),
  };

  const fetchAddress = async (
    inputValue: string,
  ): Promise<ResponseAddress[]> => {
    try {
      if (!inputValue) return [];
      return searchAddresses(inputValue);
    } catch (error) {
      console.error('Error loading options:', error);
      return [];
    }
  };

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      const inputs = inputElement.querySelectorAll('input');
      inputs.forEach((input) => {
        input.setAttribute('aria-required', 'true');
      });
    }
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref } }) => (
        <div ref={inputRef}>
          <AsyncSelect
            styles={dropdownStyles}
            placeholder={placeholder}
            loadingMessage={() => 'chargement en cours...'}
            noOptionsMessage={() => 'Pas de résultat'}
            value={value}
            onChange={onChange}
            loadOptions={fetchAddress}
            ref={ref}
          />
        </div>
      )}
    />
  );
};

export default SelectDropdown;
