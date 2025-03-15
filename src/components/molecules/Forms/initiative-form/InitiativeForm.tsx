'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/atoms';
import {
  ErrorMessage,
  FieldLabel,
  FormContainer,
  FormGroup,
  GlobalError,
  Input,
  Label,
  TextareaRow,
} from './initiativeCreationForm.styles';
import RadioInput from './RadioInput/RadioInput';
import { ResponseOptions } from '@/constants';

const initiativeCreationSchema = z.object({
  initiativeName: z.string().min(1, "Le nom de l'initiative est requis"),
  description: z
    .string()
    .min(10, 'La description doit contenir au moins 10 caractères'),
  initiativeType: z.array(z.string()),
  spokenLanguages: z.enum(['Oui', 'Non', 'Je ne sais pas']),
  associationName: z.string().min(1, "Le nom de l'association est requis"),
  address: z.string().min(1, 'Veuillez indiquer une adresse'),
  postcode: z.string().min(1, 'Veuillez indiquer un code postal'),
  city: z.string().min(1, 'Veuillez indiquer une ville'),
  country: z.string().min(1, 'Veuillez sélectionner un pays'),
  email: z.string().optional(),
  webSite: z.string().url().optional(),
});

type InitiativeCreationFormData = z.infer<typeof initiativeCreationSchema>;

// interface InitiativeCreationFormProps {
//   onClick?: (e: any) => void;
// }
const InitiativeCreationForm = () => {
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InitiativeCreationFormData>({
    resolver: zodResolver(initiativeCreationSchema),
  });

  const onSubmit = async (data: InitiativeCreationFormData) => {
    try {
      setGlobalError(null);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(
          result.error || "Une erreur est survenue lors de l'inscription",
        );
        return;
      }

      // Redirection vers la page d'accueil après inscription réussie
      window.location.href = '/';
    } catch (error) {
      console.error('Erreur:', error);
      setGlobalError('Une erreur est survenue lors de la connexion au serveur');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {globalError && <GlobalError>{globalError}</GlobalError>}

      <FormGroup>
        <Label htmlFor="initiativeName">Nom de l&nbsp;initiative *</Label>
        <Input
          id="initiativeName"
          type="text"
          {...register('initiativeName')}
          placeholder="Le nom de l'initiative"
        />
        {errors.initiativeName && (
          <ErrorMessage>{errors.initiativeName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">Description *</Label>
        <span>Fournissez une courte description de l&nbsp;initiative.</span>
        <TextareaRow
          id="description"
          {...register('description')}
          placeholder="Description de l'initiative"
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <FieldLabel as="legend" id="spokenLanguages">Langues parlées *</FieldLabel>
        <RadioInput
          ResponseOption={ResponseOptions}
          name="spokenLanguages"
          register={register} 
        />
        {errors.spokenLanguages && (
          <ErrorMessage>{errors.spokenLanguages.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="associationName">Le nom de l&nbsp;association *</Label>
        <Input
          id="associationName"
          type="text"
          {...register('associationName')}
          placeholder="Le nom de l'association"
        />
        {errors.associationName && (
          <ErrorMessage>{errors.associationName.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="address">Adresse *</Label>
        <Input
          id="address"
          type="text"
          {...register('address')}
          placeholder="Nom de la rue"
        />
        {errors.address && (
          <ErrorMessage>{errors.address.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="postcode">Code postal *</Label>
        <Input
          id="postcode"
          type="text"
          {...register('postcode')}
          placeholder="Code postal"
        />
        {errors.postcode && (
          <ErrorMessage>{errors.postcode.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="city">Ville *</Label>
        <Input
          id="city"
          type="text"
          {...register('city')}
          placeholder="Nom de la ville"
        />
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="country">Pays *</Label>
        <Input
          id="country"
          type="text"
          {...register('country')}
          placeholder="Nom du pays"
        />
        {errors.country && (
          <ErrorMessage>{errors.country.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <span>
          Si l&nbsp;association dispose d&nbsp;une adresse e-mail, veuillez la
          renseigner ici.
        </span>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="votre@email.com"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="webSite">Website</Label>
        <span>
          Si l&nbsp;association dispose d&nbsp;un site web, veuillez le
          renseigner ici
        </span>
        <Input id="webSite" type="url" {...register('webSite')} />
      </FormGroup>

      <Button type="submit" fullWidth>
        Enregitrer une initiative
      </Button>
    </FormContainer>
  );
};

export default InitiativeCreationForm;
