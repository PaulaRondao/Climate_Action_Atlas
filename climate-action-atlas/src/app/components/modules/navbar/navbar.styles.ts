import styled from 'styled-components';
import { BREAK_POINT, DEVICE_QUERY } from '../../../../../types/enums/viewports';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    ul {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow:
      0 10px 27px rgba(0, 0, 0, 0.05);
    };
  };
`;

export const ListItem = styled.li`
  margin-left: 5rem;

  @media ${DEVICE_QUERY(BREAK_POINT.DESKTOP)} {
    margin: 2.5rem 0;
  }
`;

export const StyledLink = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  color: #475569;

    :hover{
      color: #482ff7;
    }
`; 

export const MenuBurger = styled.div`
  display: none;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;

    .active span:nth-child(2) {
      opacity: 0;
    } 

    .active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`

// .header{
//     border-bottom: 1px solid #E2E8F0;
// }




  
//   .nav-logo {
//   font-size: 2.1rem;
//   font-weight: 500;
//   color: #482ff7;
//   }

//   @media only screen and (max-width: 768px) {


//     .nav-menu.active {
//       left: 0;
//   }
