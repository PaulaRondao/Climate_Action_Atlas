import { ApiAddressResponse, ResponseAddress } from '@/types/City-interface';

export const searchAddresses = async (
  searchedValue: string,
): Promise<ResponseAddress[]> => {
  try {
    if (!searchedValue || searchedValue.length < 3) return [];

    const res = await fetch(
      `/api/adresse?q=${encodeURIComponent(searchedValue)}`,
    );
    const data: ApiAddressResponse = await res.json();

    if (!data.features || !Array.isArray(data.features)) return [];

    return data.features.map((address) => ({
      city: address?.properties?.city || '',
      gps: address?.geometry?.coordinates || [0, 0],
      label: address?.properties?.label || '',
      street: address?.properties?.name || '',
      zipCode: address?.properties?.postcode || '',
    }));
  } catch (error) {
    console.error(error, 'Address fetch failed');
    return [];
  }
};
