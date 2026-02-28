export interface Department {
  num: string;
  name: string;
  count: number;
}

export interface Region {
  id: string;
  region: string;
  emoji?: string;
  count: number;
  depts: Department[];
}

interface EnrichedRegion extends Region {
  isRegionMatch: boolean;
  isDeptMatch: Department[];
}
