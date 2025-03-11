// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import { theme } from '@/styles/theme';
// import { mediaQueries } from '@/styles/globalStyles';
// import { Navigation, Footer } from '@/components/organisms';
// import { PageTitle, Description } from '@/constants/enums';

// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 500px;
//   background-color: ${theme.colors.darkBlue};
//   overflow: hidden;
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background-color: red; // Debug: pour voir si le wrapper s'affiche
// `;

// const HeroContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   color: ${theme.colors.white};
//   width: 90%;
//   max-width: 800px;

//   h1 {
//     font-size: ${theme.typography.fontSizes.xxxl};
//     margin-bottom: ${theme.spacing.lg};
//     text-transform: uppercase;
//   }

//   p {
//     font-size: ${theme.typography.fontSizes.lg};
//     line-height: ${theme.typography.lineHeights.body};
//   }
// `;

// const Section = styled.section`
//   padding: ${theme.spacing.xxl} ${theme.spacing.md};

//   ${mediaQueries.desktop} {
//     padding: ${theme.spacing.xxl};
//   }
// `;

// const SectionTitle = styled.div`
//   text-align: center;
//   margin-bottom: ${theme.spacing.xl};

//   h2 {
//     font-size: ${theme.typography.fontSizes.xxl};
//     color: ${theme.colors.darkBlue};
//     text-transform: uppercase;
//   }
// `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   gap: ${theme.spacing.lg};

//   ${mediaQueries.tablet} {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   ${mediaQueries.desktop} {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const Card = styled.div`
//   padding: ${theme.spacing.lg};
//   background-color: ${theme.colors.white};
//   border-radius: ${theme.borderRadius.medium};
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   h3 {
//     color: ${theme.colors.darkBlue};
//     margin-bottom: ${theme.spacing.md};
//     font-size: ${theme.typography.fontSizes.lg};
//   }

//   p {
//     color: ${theme.colors.greyBlack};
//     line-height: ${theme.typography.lineHeights.body};
//   }
// `;

// const EngagementSection = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: center;

//   h3 {
//     font-size: ${theme.typography.fontSizes.xl};
//     color: ${theme.colors.darkBlue};
//     margin-bottom: ${theme.spacing.md};
//   }

//   hr {
//     width: 60px;
//     margin: ${theme.spacing.md} auto;
//     border: none;
//     border-top: 2px solid ${theme.colors.backgroundGreen};
//   }

//   p {
//     margin-bottom: ${theme.spacing.xl};
//     line-height: ${theme.typography.lineHeights.body};
//   }
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: ${theme.spacing.xl};
// `;

// export default function Home() {
//   return (
//     <>
//       <Navigation
//         pageTitle={PageTitle.MovementForChange}
//         description={Description.ClimatActionTitle}
//       />
//       <main>
//         <HeroSection>
//           <ImageWrapper>
//             <Image
//               src="/images/Header.png"
//               alt="Header background"
//               width={1920}
//               height={1080}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 opacity: 0.7,
//               }}
//               priority
//             />
//           </ImageWrapper>
//           <HeroContent>
//             <h1>Un mouvement pour changer</h1>
//             <p>Climate Action Atlas est un mouvement actif. Nous partageons le désir d'une action urgente et juste pour répondre aux urgences climatiques et naturelles.</p>
//           </HeroContent>
//         </HeroSection>

//         <Section>
//           <SectionTitle>
//             <h2>Ce que nous pouvons faire</h2>
//           </SectionTitle>
//           <CardGrid>
//             <Card>
//               <h3>Action climatique</h3>
//               <p>Actions visant à réduire les émissions de gaz à effet de serre et à limiter le réchauffement climatique, tout en promouvant la résilience des écosystèmes et des sociétés.</p>
//             </Card>
//             <Card>
//               <h3>Conservation de la biodiversité</h3>
//               <p>Protection des espèces et des écosystèmes pour préserver la diversité biologique et garantir le bon fonctionnement des systèmes naturels vitaux.</p>
//             </Card>
//             <Card>
//               <h3>Gestion durable des nutriments</h3>
//               <p>Gestion responsable des nutriments pour éviter la pollution des sols et de l'eau, tout en assurant des pratiques agricoles durables.</p>
//             </Card>
//           </CardGrid>
//         </Section>

//         <Section>
//           <EngagementSection>
//             <h3>Votre engagement</h3>
//             <hr />
//             <p>L'engagement de chacun est essentiel pour préserver notre planète. Agissez dès aujourd'hui pour un futur plus vert.</p>
//             <ButtonContainer>
//               <button>Explorer</button>
//             </ButtonContainer>
//           </EngagementSection>
//         </Section>
//       </main>
//     </>
//   );
// }
