import { ApiAddressResponse, ResponseAddress } from '@/types/city.interface';

export const searchAddresses = async (searchedValue: string): Promise<ResponseAddress[]> => {
  try {
    const res = await fetch(`/api/adresse?q=${encodeURIComponent(searchedValue)}`);
    const data: ApiAddressResponse = await res.json();

    return data.features.map((address) => ({
      city: address.properties.city,
      label: address.properties.label,
      street: address.properties.name,
      zipCode: address.properties.postcode,
      gps: address.geometry.coordinates,
    }));
  } catch (error) {
    return [];
  }
};
