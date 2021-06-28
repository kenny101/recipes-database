import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  align-items: center;
  padding: 15px;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  position: fixed;
  transition: all .2s ease-in;
  /* Third Nav */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  /* Third Nav */
  justify-content: flex-end;
  padding: 5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
