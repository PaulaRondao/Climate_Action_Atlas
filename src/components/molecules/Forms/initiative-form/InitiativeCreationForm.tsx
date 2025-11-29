'use client';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, SelectDropdown } from '@/components/atoms';
import {
  ErrorMessage,
  FormContainer,
  FormGroup,
  GlobalError,
  Input,
  Label,
  TextareaRow,
  TitleSection,
  Wrapper,
} from './initiativeCreationForm.styles';
import { TypeImpact } from '@/constants';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import { InitiativeCreationFormData } from './initiativeFormValidation';
import { initiativeCreationSchema } from './initiativeFormValidation';

const InitiativeCreationForm = () => {
  const [globalError, setGlobalError] = useState<string | null>(null);

  const methods = useForm<InitiativeCreationFormData>({
    resolver: zodResolver(initiativeCreationSchema),
    defaultValues: {
      initiativeType: [],
      narrative: '',
      associationName: '',
      email: '',
      webSite: '',
    },
  });

  const onSubmit = async (data: InitiativeCreationFormData) => {
    console.log('Données du formulaire :', data);
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
      console.log('Ajout réussi');
    } catch (error) {
      console.error(error, 'Erreur de connexion');
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
          <Label htmlFor="name">
            Nom de l&apos;initiative ou un titre *
            <p>
              Saisissez le nom de cette initiative, si elle n&apos;en dispose
              pas, veuillez indiquer un nom clair et significatif&nbsp;:
            </p>
          </Label>
          <Input id="name" type="text" {...methods.register('name')} />
          {methods.formState.errors.name && (
            <ErrorMessage>{methods.formState.errors.name.message}</ErrorMessage>
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
          <Label htmlFor="initiativeType">
            À quel type correspond l&apos;initiative&nbsp;? *
          </Label>
          <CheckboxInput options={TypeImpact} name="initiativeType" />
          {methods.formState.errors.initiativeType && (
            <ErrorMessage>
              {methods.formState.errors.initiativeType.message}
            </ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="narrative">
            Récit <p>Si vous souhaitez raconter votre expérience :</p>
          </Label>
          <TextareaRow
            id="narrative"
            {...methods.register('narrative')}
            rows={10}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="associationName">
            Si c&apos;est une association qui propose cette initiative, indiquez
            son nom
          </Label>
          <Input
            id="associationName"
            type="text"
            {...methods.register('associationName')}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">
            L&apos;adresse où se situe l&apos;initiative *
          </Label>
          <SelectDropdown name="address" placeholder="Sélectionner l'adresse" />
          {methods.formState.errors.address && (
            <ErrorMessage>
              {methods.formState.errors.address.message}
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

        <Wrapper>
          <Button type="submit" fullWidth>
            Ajouter l&apos;initiative
          </Button>
        </Wrapper>
      </FormContainer>
    </FormProvider>
  );
};

export default InitiativeCreationForm;
