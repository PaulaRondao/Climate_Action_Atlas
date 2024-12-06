// // import NavBar from 'components/nav-bar/NavBar';
// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';
// import AppHead from '../appHead/AppHead';
// import { PAGE_TITLE } from '../../../../types/enums/page';
// // import { User } from 'types/NextAuth';
// // import AppHead from 'ui/app-head/app-head';

// // import { SECOND_FOOTER_TYPE } from 'components/footer/footer.messages';
// // import { ProgressBarStates } from 'ui/progress-bar/ProgressBar';
// // import { PAGE_TITLE } from 'types/enums/pages';
// // import { hasManageMentoringApplicationRole } from 'back/services/roles/grantRules';
// // import Footer from '../../footer/Footer';
// // import Wrapper from '../../wrapper/Wrapper';
// // import { ReportButton } from './LayoutHome.styles';

// interface LayoutHomeProps<T> {
//   children: React.ReactNode,
//   header?: React.ReactNode,
//   title: PAGE_TITLE | string,
//   connected?: boolean,
//   footer?: React.ReactNode,
//   metaTag?: string,
//   canonical?: string,
// }

// const LayoutHome = ({
//   children,
//   header,
//   footer,
//   title,
//   connected,
//   metaTag,
//   canonical,
// }: LayoutHomeProps<string>): JSX.Element => {
//   const router = useRouter();


//   return (
//     <>
//       <AppHead title={title} metaTag={metaTag} canonical={canonical} />
//       <main>
//         <NavBar
//           connected={connected}
//           user={user}
//           empty={emptyNavBar}
//           steps={steps}
//           activeStep={activeStep}
//         />
//         {header}
//         <Wrapper fluid={fluid}>{children}</Wrapper>
//         {footer}
//         <Footer secondFooterType={secondFooterType} />
//       </main>
//     </>
//   );
// };

// LayoutHome.defaultProps = {
//   connected: false,
//   metaTag: '',
//   fluid: false,
//   user: null,
//   header: null,
//   footer: null,
//   canonical: null,
// };
// export default LayoutHome;
