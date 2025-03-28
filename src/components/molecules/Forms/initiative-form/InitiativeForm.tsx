'use client';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/atoms';
import {
  ErrorMessage,
  FormContainer,
  FormGroup,
  GlobalError,
  Input,
  Label,
  TextareaRow,
  TitleSection,
} from './initiativeCreationForm.styles';
import RadioInput from './RadioInput/RadioInput';
import { ResponseOptions, TypeInitiative } from '@/constants';
import CheckboxInput from './CheckboxInput/CheckboxInput';

const initiativeCreationSchema = z.object({
  initiativeName: z.string().min(1, "Le nom de l'initiative est requis"),
  description: z
    .string()
    .min(10, 'La description doit contenir au moins 10 caractères'),
  initiativeType: z.enum([
    'Action climatique',
    'Conservation de la biodoversité',
    'Gestion durable des nutriments',
    'Réduction de la pollution chimique',
    "Qualité de l'air",
    "Protection de la couche d'ozone",
    'Protection des océans',
    "Gestion durable de l'eau",
    'Gestion durable des territoires',
    'Équité sociale et éducation',
  ]),
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

const InitiativeCreationForm = () => {
  const [globalError, setGlobalError] = useState<string | null>(null);

  const methods = useForm<InitiativeCreationFormData>({
    resolver: zodResolver(initiativeCreationSchema),
  });

  const onSubmit = async (data: InitiativeCreationFormData) => {
    try {
      setGlobalError(null);
      const response = await fetch('/api/initiatives', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setGlobalError(
          result.error ||
            "Une erreur est survenue lors de la création de l'initiative",
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
    <FormProvider {...methods}>
      <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
        {globalError && <GlobalError>{globalError}</GlobalError>}
        <TitleSection>
          <h3>Votre recherche</h3>
          <span>* Champs obligatoires</span>
        </TitleSection>
        <FormGroup>
          <Label htmlFor="initiativeName">
            Nom de l&apos;initiative *
            <p>
              Saisissez le nom de cette initiative, si elle n&apos;en dispose
              pas, veuillez indiquer un nom clair et significatif&nbsp;:
            </p>
          </Label>
          <Input
            id="initiativeName"
            type="text"
            {...methods.register('initiativeName')}
          />
          {methods.formState.errors.initiativeName && (
            <ErrorMessage>
              {methods.formState.errors.initiativeName.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="checkbox-initiativeType">
            À quel type correspond l&apos;initiative&nbsp;? *
          </Label>
          <CheckboxInput
            TypeOptions={TypeInitiative}
            name="checkbox-initiativeType"
          />
          {methods.formState.errors.initiativeType && (
            <ErrorMessage>
              {methods.formState.errors.initiativeType.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">
            Description *
            <p>Indiquez une courte description de l&apos;initiative&nbsp;:</p>
          </Label>
          <TextareaRow
            id="description"
            {...methods.register('description')}
            rows={6}
          />
          {methods.formState.errors.description && (
            <ErrorMessage>
              {methods.formState.errors.description.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="radio-spokenLanguages">
            L&apos;association parle t-elle plusieurs langues&nbsp;? *
          </Label>
          <RadioInput
            ResponseOption={ResponseOptions}
            name="radio-spokenLanguages"
          />
          {methods.formState.errors.spokenLanguages && (
            <ErrorMessage>
              {methods.formState.errors.spokenLanguages.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="associationName">
            Le nom de l&apos;association *
            <p>
              Saisissez le nom de l&apos;association qui propose cette
              initiative&nbsp;:
            </p>
          </Label>
          <Input
            id="associationName"
            type="text"
            {...methods.register('associationName')}
          />
          {methods.formState.errors.associationName && (
            <ErrorMessage>
              {methods.formState.errors.associationName.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">
            L&apos;Adresse de l&apos;association *
            <p>
              Saisissez l&apos;adresse où se trouve cette initiative ou
              l&apos;association qui s&apos;en occupe&nbsp;:
            </p>
          </Label>
          <Input id="address" type="text" {...methods.register('address')} />
          {methods.formState.errors.address && (
            <ErrorMessage>
              {methods.formState.errors.address.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="postcode">Le code postal *</Label>
          <Input id="postcode" type="text" {...methods.register('postcode')} />
          {methods.formState.errors.postcode && (
            <ErrorMessage>
              {methods.formState.errors.postcode.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">La ville *</Label>
          <Input id="city" type="text" {...methods.register('city')} />
          {methods.formState.errors.city && (
            <ErrorMessage>{methods.formState.errors.city.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">Le pays *</Label>
          <Input id="country" type="text" {...methods.register('country')} />
          {methods.formState.errors.country && (
            <ErrorMessage>
              {methods.formState.errors.country.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            L&apos;adresse e-mail
            <p>
              Si l&apos;association dispose d&apos;une adresse e-mail, veuillez
              la renseigner ici, format attendu : votre@email.com&nbsp;:
            </p>
          </Label>
          <Input id="email" type="email" {...methods.register('email')} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="webSite">
            Le site web
            <p>
              Si l&apos;association dispose d&apos;un site web, veuillez le
              renseigner ici&nbsp;:
            </p>
          </Label>
          <Input id="webSite" type="url" {...methods.register('webSite')} />
        </FormGroup>

        <Button type="submit" fullWidth>
          Enregitrer une initiative
        </Button>
      </FormContainer>
    </FormProvider>
  );
};

export default InitiativeCreationForm;
