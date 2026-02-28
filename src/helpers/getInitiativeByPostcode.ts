import { InitiativeWithRelations } from '@/types/initiatives';
import { Region } from '@/types/Regions';

export const getInitiativeByPostcode = (
  initiative: InitiativeWithRelations,
) => {
  return initiative.initiativeLocation.postcode.slice(0, 2);
};

export const countBydepartment = (
  acc: Record<string, number>,
  initiative: InitiativeWithRelations,
) => {
  const dept = getInitiativeByPostcode(initiative);

  if (acc[dept] >= 1) acc[dept]++;
  else acc[dept] = 1;
  return acc;
};

export const countByRegion = (
  regions: Region[],
  initiative: InitiativeWithRelations[],
) => {
  const countInitiative = initiative.reduce(countBydepartment, {});
  return regions.map((region) => {
    const enrichedDepts = region.depts.map((dept) => ({
      ...dept,
      count: countInitiative[dept.num] || 0,
    }));

    return {
      ...region,
      depts: enrichedDepts,
      count: enrichedDepts.reduce((sum: number, dept) => sum + dept.count, 0),
    };
  });
};

export const countByAllRegions = (
  regions: Region[],
  initiatives: InitiativeWithRelations[],
) => {
  const enrichedRegions = countByRegion(regions, initiatives);
  return enrichedRegions.reduce((sum, r) => sum + r.count, 0);
};
