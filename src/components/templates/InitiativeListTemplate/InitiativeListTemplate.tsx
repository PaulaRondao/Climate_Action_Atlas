'use client';

import { Navigation } from '@/components/organisms';
import {
  Controls,
  Legend,
  LegendItem,
  Main,
  Overline,
  ResultInfo,
  Subtitle,
  Title,
  Wrapper,
} from './initiativeListTemplate.styles';
import { useSession } from '@/lib/auth-client';
import { EmptyState, SearchBar } from '@/components/atoms';
import FilterGroupButton from '@/components/atoms/Button/FilterGroupButton';
import { RegionBlock } from '@/components/molecules/Accordion/RegionBlock';
import { FaCircle } from 'react-icons/fa';
import { useInitiatives } from '@/hooks/useInitiatives';
import { useEffect, useState } from 'react';
import { InitiativeWithRelations } from '@/types/initiatives';
import {
  countByAllRegions,
  countByRegion,
} from '@/helpers/getInitiativeByPostcode';
import { NUMBER_OF_REGIONS, regions } from '@/types/enums/regions';

export type FilterType = 'all' | 'departemental';
export type FilterByImpactType =
  | 'ClimateAgricultureEnergy'
  | 'UrbanismAndTechnology'
  | 'SolidarityAndCommunities'
  | 'CultureAndTransmission'
  | 'EducationAndAwareness'
  | 'SocialAndSolidarityEconomy';

export default function InitiativeListTemplate() {
  const [initiatives, setInitiatives] = useState<InitiativeWithRelations[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [typeFilter, setTypeFilter] = useState<FilterByImpactType | 'all'>(
    'all',
  );

  const totalInitiatives = countByAllRegions(regions, initiatives);

  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  const { getInitiatives } = useInitiatives();

  const filteredInitiatives = () => {
    const searchValueByUser = searchValue.toLocaleLowerCase().trim();
    const filteredByType =
      typeFilter === 'all'
        ? initiatives
        : initiatives.filter((initiative) =>
            initiative.initiativeType.includes(typeFilter),
          );
    const enrichedRegionsAndDepts = countByRegion(regions, filteredByType);

    return enrichedRegionsAndDepts
      .map((item) => {
        const isRegionMatch = item.region
          .toLocaleLowerCase()
          .includes(searchValueByUser);
        const isDeptMatch = item.depts.filter((dept) =>
          dept.name.toLocaleLowerCase().includes(searchValueByUser),
        );
        return {
          ...item,
          isRegionMatch,
          isDeptMatch,
        };
      })
      .filter((item) => {
        if (typeFilter !== 'all' && item.count === 0) return false;
        if (!searchValueByUser) return true;
        return item.isRegionMatch || item.isDeptMatch.length > 0;
      });
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const allInitiatives = await getInitiatives();
      if (!allInitiatives) return;
      setInitiatives(allInitiatives);
    };
    fetchAllData();
  }, []);

  const defaultResultLabel = `${NUMBER_OF_REGIONS} régions · ${totalInitiatives} initiatives au total`;

  return (
    <>
      <Navigation session={isLoggedIn} />
      {/* <PageWrap>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a> */}
      <Wrapper>
        <Overline>Annuaire des initiatives</Overline>
        <Title>
          Initiatives locales
          <br />
          par région
        </Title>
        <Subtitle>
          Alternative accessible à la carte interactive — retrouvez toutes les
          initiatives classées par région et département.
        </Subtitle>
      </Wrapper>

      <Controls>
        <SearchBar value={searchValue} onChange={setSearchValue} />
        <FilterGroupButton
          current={filter}
          currentImpact={typeFilter}
          onChange={(value) => {
            setFilter(value);
            setTypeFilter('all');
          }}
          onChangeImpact={(value) => {
            setTypeFilter(value);
            setFilter('all');
          }}
        />
      </Controls>

      <Legend aria-label="Légende">
        <LegendItem>
          <FaCircle aria-hidden="true" />
          Initiatives actives
        </LegendItem>
        <span>· Le nombre indiqué correspond aux initiatives recensées</span>
      </Legend>

      <ResultInfo role="status" aria-live="polite">
        {defaultResultLabel}
      </ResultInfo>

      <Main id="main-content">
        {filteredInitiatives().length === 0 ? (
          <EmptyState value={searchValue} />
        ) : (
          filteredInitiatives().map((data) => (
            <RegionBlock
              key={data.id}
              data={data}
              value={searchValue}
              defaultOpen={false}
            />
          ))
        )}
      </Main>
      {/* </PageWrap> */}
    </>
  );
}
