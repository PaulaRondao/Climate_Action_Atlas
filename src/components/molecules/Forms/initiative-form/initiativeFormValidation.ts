import * as z from 'zod';
import { InitiativesLabel } from '@/constants';

const initiativeTypeValues = Object.keys(InitiativesLabel) as [
  keyof typeof InitiativesLabel,
  ...Array<keyof typeof InitiativesLabel>,
];

export const initiativeCreationSchema = z.object({
  name: z.string().min(1, "Le nom de l'initiative est requis"),
  description: z
    .string()
    .min(10, 'La description doit contenir au moins 10 caractères'),
  initiativeType: z
    .array(z.enum(initiativeTypeValues))
    .min(1, 'Veuillez sélectionner un type'),
  narrative: z.string().optional(),
  associationName: z.string().optional(),
  address: z.object({
    city: z.string(),
    label: z.string(),
    street: z.string(),
    zipCode: z.string(),
    gps: z.array(z.number()).length(2),
  }),
  email: z.string().optional(),
  webSite: z.string().optional(),
});

export type InitiativeCreationFormData = z.infer<
  typeof initiativeCreationSchema
>;
