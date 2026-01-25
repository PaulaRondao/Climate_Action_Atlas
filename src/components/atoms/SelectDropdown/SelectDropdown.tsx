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

const SelectDropdown: React.FC<SelectDropdownProps> = ({ name, placeholder }) => {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLDivElement | null>(null);

  const dropdownStyles = {
    control: (styles: any) => ({
      ...styles,
      width: '100%',
      height: '40px',
      paddingLeft: '12px',
      ':hover': {
        borderColor: 'var(--color-black)',
      },
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      textDecoration: 'none',
      backgroundColor: state.isFocused ? 'var(--color-light-grey)' : '',
      color: state.isSelected ? 'var(--foreground-dark-blue)' : 'var(--color-dark-grey)',
    }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  };

  const fetchAddress = async (inputValue: string): Promise<ResponseAddress[]> => {
    try {
      if (!inputValue) return [];
      return await searchAddresses(inputValue);
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
            value={value ?? null}
            loadOptions={fetchAddress}
            onChange={(selected: ResponseAddress | null) => {
              if (!selected) {
                onChange(null);
                return;
              }
              const transformedAddress = {
                label: selected.label,
                city: selected.city,
                zipCode: selected.zipCode,
                street: selected.street,
                gps: selected.gps || [0, 0],
              };
              onChange(transformedAddress);
            }}
            ref={ref}
          />
        </div>
      )}
    />
  );
};

export default SelectDropdown;
