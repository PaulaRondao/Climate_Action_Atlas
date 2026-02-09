export type Gps = [number, number]; // [lon, lat]

export interface ApiAddressResponse {
  features: {
    geometry: {
      coordinates: Gps;
    };
    properties: {
      label: string;
      score: number;
      name: string;
      postcode: string;
      city: string;
    };
  }[];
}

export interface InitiativeResponseAddress {
  id: string;
  name: string;
  address: string;
  gps: Gps;
  type: InitiativeType;
}

export interface ResponseAddress {
  city: string;
  label: string;
  street: string;
  zipCode: string;
  gps: Gps;
}
