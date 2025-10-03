import React from 'react';
import styled from 'styled-components';
import {Menu, Search, User} from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeHeader>
        <Button>Subscribe</Button>
        <Link>Already a subscriber?</Link>
      </SubscribeHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    max-width: min(100%, calc(1200px));
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: 'super-header main-header subscribe-header';
    justify-content: center;
    align-items: center;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    grid-area: super-header;
    background: none;
    padding: 0;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    &:last-of-type {
      display: none;
    }
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;


  @media ${QUERIES.laptopAndUp} {
    grid-area: main-header;
  }
`;

const SubscribeHeader = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    grid-area: subscribe-header;
    justify-self: right;
  }
`

const Link = styled.a`
  font-family: var(--font-family-serif);
  font-weight: var(--font-weight-normal);
  font-style: italic;
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-decoration: underline;
  color: var(--color-gray-900);
`

export default Header;
