'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { InitiativesLabel } from '@/constants';
import { theme } from '@/styles/theme';

const SidebarContainer = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100px;
  left: 0;
  height: 75%;
  width: ${({ $open }) => ($open ? '380px' : '0')};
  background-color: #f3f6f4;
  box-shadow: ${({ $open }) =>
    $open ? '2px 0 8px rgba(0, 0, 0, 0.2)' : 'none'};
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 1000;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: ${({ $open }) => ($open ? '100%' : '0')};
  }
`;

const SidebarContent = styled.div`
  padding: 1.5rem;
`;

const ToggleButton = styled.button<{ $open: boolean }>`
  position: absolute;
  top: 6rem;
  left: ${({ $open }) => ($open ? '380px' : '1rem')};
  background-color: #f3f6f4;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  padding: 0.6rem;
  cursor: pointer;
  z-index: 1100;
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    left: ${({ $open }) => ($open ? 'calc(100% - 3.5rem)' : '1rem')};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const List = styled.li<{ $active?: boolean }>`
  font-weight: 600;
  font-size: 13px;
  align-items: center;
  display: flex;
  gap: 8px;
  padding: 8px;
  background-color: ${({ $active }) => ($active ? '#d9ead3' : 'white')};
  border: ${({ $active }) =>
    $active ? '1px solid var(--foreground-green)' : '1px solid white'};
  border-radius: 12px;
  border: 1.5px solid var(--border);

  button {
    align-items: center;
    display: flex;
    gap: 8px;

    &:focus-visible {
      outline: 2px solid ${theme.colors.backgroundGreen};
      outline-offset: -2px;
      border-radius: 10px;
    }
  }
`;

interface SidebarControlProps {
  onChange: (type: InitiativesLabel[]) => void;
}

const SidebarControl = ({ onChange }: SidebarControlProps) => {
  const [open, setOpen] = useState(false);

  const [selectedTypes, setSelectedTypes] = useState<InitiativesLabel[]>([]);

  const handleSelect = (types: InitiativesLabel) => {
    const newTypes = selectedTypes.includes(types)
      ? selectedTypes.filter((type) => type !== types)
      : [...selectedTypes, types];
    setSelectedTypes(newTypes);
    onChange(newTypes);
  };

  return (
    <>
      <SidebarContainer $open={open}>
        <SidebarContent>
          <h2>Type d'impact</h2>
          <ul
            style={{
              listStyle: 'none',
              paddingLeft: 0,
              gap: '4px',
              display: 'grid',
              marginTop: '12px',
            }}
          >
            <List
              $active={selectedTypes.includes(
                InitiativesLabel.ClimateAgricultureEnergy,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.ClimateAgricultureEnergy)
                }
              >
                <Image src="/icons/climat.svg" alt="" width={34} height={34} />
                Climat, Agriculture et Énergie
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.NatureAndBiodiversity,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.NatureAndBiodiversity)
                }
              >
                <Image src="/icons/nature.svg" alt="" width={34} height={34} />
                Nature et Biodiversité
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.CultureAndTransmission,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.CultureAndTransmission)
                }
              >
                <Image src="/icons/culture.svg" alt="" width={34} height={34} />
                Culture et Transmission
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.EducationAndAwareness,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.EducationAndAwareness)
                }
              >
                <Image
                  src="/icons/education.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                Éducation et Sensibilisation
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.SolidarityAndCommunities,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.SolidarityAndCommunities)
                }
              >
                <Image
                  src="/icons/solidarite.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                Solidarité et Communautés
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.SocialAndSolidarityEconomy,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.SocialAndSolidarityEconomy)
                }
              >
                <Image
                  src="/icons/economie.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                Économie Sociale et Solidaire
              </button>
            </List>

            <List
              $active={selectedTypes.includes(
                InitiativesLabel.UrbanismAndTechnology,
              )}
            >
              <button
                onClick={() =>
                  handleSelect(InitiativesLabel.UrbanismAndTechnology)
                }
              >
                <Image
                  src="/icons/urbanisme.svg"
                  alt=""
                  width={34}
                  height={34}
                />
                Urbanisme et Technologie
              </button>
            </List>
          </ul>
        </SidebarContent>
      </SidebarContainer>

      <ToggleButton
        $open={open}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {open ? <FiX /> : <FiMenu />}
      </ToggleButton>
    </>
  );
};

export default SidebarControl;
