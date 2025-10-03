import React from 'react';
import styled from 'styled-components';
import {QUERIES} from "../../constants.js";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <AuthorName>{author}</AuthorName>
        <ArticleTitle>{title}</ArticleTitle>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);

  }
  &:not(:first-of-type) {
    padding-top: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type), &:not(:first-of-type) {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-template-areas: 
      'name avatar' 
      'title avatar';
  gap: 7px 21px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-areas: 'avatar' 'name'  'title';
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
  grid-area: name;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  grid-area: title;
`;

export default OpinionStory;
