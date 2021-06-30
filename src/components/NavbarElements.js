import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  align-items: center;
  padding: 20px 200px;
  position: fixed;
  transition: all .2s ease-in;
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
