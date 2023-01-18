import styled from 'styled-components';

export const HeadersBootstrap = styled.header`
  background-color: transparent;

  .navbar-collapse {
    justify-content: flex-end;
  }

  .nav-link {
    font-size: 1.8rem;
    color: #fefefe;
    transition: all 0.2s ease-in;
  }

  .nav-link:hover {
    opacity: 0.7;
  }

  .dropdown-item {
    font-size: 1.5rem;
  }
`;

export const ImgS = styled.img`
  width: 50px;
`;
