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
import { Notification } from '@/types/Notification';
import { Container } from '@/styles/components';
import { useSession } from '@/lib/auth-client';
import {
  InitiativeCreationFormData,
  initiativeCreationSchema,
} from '@/validation/initiativeSchema';

const InitiativeCreationForm = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

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
    setNotification(null);
    setLoading(true);

    if (!session || !session.user?.id) return;

    try {
      const response = await fetch('/api/initiatives', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setNotification({
          status: 'error',
          message:
            result.error ||
            "Une erreur est survenue lors de la création de l'initiative",
        });
        return;
      }

      setNotification({
        status: 'success',
        message: "Ajout d'initiative réussi",
      });

      setTimeout(() => {
        window.location.href = '/profil';
      }, 3000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setNotification({
        status: 'error',
        message: 'Une erreur est survenue lors de la connexion au serveur',
      });
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <>
            <TitleSection>
              <h3>Ajouter une initiative</h3>
              <span>Tous les champs marqués (*) sont obligatoires.</span>
            </TitleSection>

            <FormGroup>
              <Label htmlFor="name">
                Nom de l'initiative ou un titre *
                <p>
                  Saisissez un nom clair et significatif si l'initiative n'en a
                  pas&nbsp;:
                </p>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Saisir le nom de l'initiative"
                {...methods.register('name')}
              />
              {methods.formState.errors.name && (
                <ErrorMessage>
                  {methods.formState.errors.name.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">
                Description *
                <p>
                  Indiquez une courte description de l'initiative&nbsp;, un
                  minimum de 10 caractères est requis&nbsp;:
                </p>
              </Label>
              <TextareaRow
                id="description"
                placeholder="Saisir une courte description..."
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
                À quel type correspond l'initiative&nbsp;? *
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
                Récit <p>Vous pouvez raconter votre expérience&nbsp;:</p>
              </Label>
              <TextareaRow
                id="narrative"
                placeholder="Raconter votre expérience..."
                {...methods.register('narrative')}
                rows={10}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="associationName">
                Association porteuse de cette initiative (si applicable)
              </Label>
              <Input
                id="associationName"
                type="text"
                placeholder="Saisir le nom de l'association"
                {...methods.register('associationName')}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">Adresse de l'initiative *</Label>
              <SelectDropdown
                name="address"
                placeholder="Sélectionner une adresse"
              />
              {methods.formState.errors.address && (
                <ErrorMessage>
                  {methods.formState.errors.address.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                Adresse e-mail de l'association (si existante)
                <p>Format attendu : asso@email.com</p>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Saisir l'adresse email"
                {...methods.register('email')}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="webSite">
                Site web
                <p>Indiquez l'adresse du site web si disponible&nbsp;:</p>
              </Label>
              <Input
                id="webSite"
                type="url"
                placeholder="Saisir l'adresse du site web"
                {...methods.register('webSite')}
              />
            </FormGroup>

            <Wrapper>
              {loading ? (
                <>
                  <Button disabled fullWidth>
                    Ajout en cours
                  </Button>
                </>
              ) : (
                <Button type="submit" fullWidth>
                  Ajouter l'initiative
                </Button>
              )}
            </Wrapper>
            {notification && notification.status === 'error' && (
              <GlobalError>{notification.message}</GlobalError>
            )}
          </>
        </FormContainer>
      </FormProvider>
    </Container>
  );
};

export default InitiativeCreationForm;
