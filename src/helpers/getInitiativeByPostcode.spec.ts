import { Region } from '@/types/Regions';
import { countByRegion } from './getInitiativeByPostcode';

describe('createAnInitiative', () => {
  const fakeInitiatives = [
    { initiativeLocation: { postcode: '69001' } },
    { initiativeLocation: { postcode: '69003' } },
    { initiativeLocation: { postcode: '01200' } },
  ];

  const fakeInitiativesForTotal = [
    { initiativeLocation: { postcode: '69001' } },
    { initiativeLocation: { postcode: '69003' } },
    { initiativeLocation: { postcode: '69200' } },
    { initiativeLocation: { postcode: '01200' } },
    { initiativeLocation: { postcode: '21200' } },
    { initiativeLocation: { postcode: '21204' } },
    { initiativeLocation: { postcode: '21205' } },
    { initiativeLocation: { postcode: '25100' } },
    { initiativeLocation: { postcode: '25400' } },
  ];

  const fakeRegions = [
    {
      id: 'auvergne',
      region: 'Auvergne',
      count: 8,
      depts: [
        { num: '69', name: 'Rhône', count: 8 },
        { num: '01', name: 'Ain', count: 0 },
      ],
    },
  ];

  const AllRegions: Region[] = [
    {
      id: 'auvergne',
      region: 'Auvergne',
      count: 4,
      depts: [
        { num: '69', name: 'Rhône', count: 3 },
        { num: '01', name: 'Ain', count: 1 },
      ],
    },
    {
      id: 'bourgogne-franche-comte',
      region: 'Bourgogne-Franche-Comté',
      count: 5,
      depts: [
        { num: '21', name: "Côte-d'Or", count: 3 },
        { num: '25', name: 'Doubs', count: 2 },
      ],
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should find the postcode', async () => {
    const result = fakeInitiatives.map((id) =>
      id.initiativeLocation.postcode.slice(0, 2),
    );

    expect(result).toEqual(['69', '69', '01']);
  });

  test('should show the occurence by department', async () => {
    const countByDept = (initiative: any) => {
      return initiative.reduce((acc: any, item: any) => {
        const dept = item.initiativeLocation.postcode.slice(0, 2);
        if (acc[dept] >= 1) acc[dept]++;
        else acc[dept] = 1;
        return acc;
      }, {});
    };
    const result = countByDept(fakeInitiatives);
    expect(result).toEqual({ '69': 2, '01': 1 });
  });

  test('should show total initiatives by region', async () => {
    const countByDept = (initiatives: any) => {
      return initiatives.reduce((acc: any, initiative: any) => {
        const dept = initiative.initiativeLocation.postcode.slice(0, 2);
        if (acc[dept] >= 1) acc[dept]++;
        else acc[dept] = 1;
        return acc;
      }, {});
    };

    const countRegion = (regions: any, initiatives: any) => {
      const countInitiative = countByDept(initiatives);

      return regions.map((region: any) => {
        const enrichedDepts = region.depts.map((dept: any) => ({
          ...dept,
          count: countInitiative[dept.num] || 0,
        }));

        return {
          ...region,
          depts: enrichedDepts,
          count: enrichedDepts.reduce(
            (sum: number, dept: any) => sum + dept.count,
            0,
          ),
        };
      });
    };

    const result = countRegion(fakeRegions, fakeInitiatives);

    expect(result).toMatchObject([
      {
        id: 'auvergne',
        region: 'Auvergne',
        count: 3,
        depts: [
          { num: '69', name: 'Rhône', count: 2 },
          { num: '01', name: 'Ain', count: 1 },
        ],
      },
    ]);
  });

  test('should show the total initiative for all France', () => {
    const countByAllRegions = (regions: Region[], initiatives: any[]) => {
      const enrichedRegions = countByRegion(regions, initiatives);
      return enrichedRegions.reduce((sum, r) => sum + r.count, 0);
    };

    const result = countByAllRegions(AllRegions, fakeInitiativesForTotal);
    expect(result).toEqual(9);
  });
});
