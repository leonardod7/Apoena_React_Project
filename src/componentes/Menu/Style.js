import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled(Link)`
  margin: 0 10px;
  flex-grow: 1;
  text-align: center;
`;

