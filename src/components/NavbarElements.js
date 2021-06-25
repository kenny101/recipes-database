import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  position: fixed;
  transition: all .2s ease-in;
  /* Third Nav */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  padding: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
