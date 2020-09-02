import React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'next/link';
import shortId from 'shortid';
import styled from 'styled-components';

import Anchor from '../../../style/Anchor';
import Divider from '../../../style/Divider';

import { getURLWithPlatformPrefix } from '../../../../utils';

/**
 * list style
 *
 */

const Title = styled.h3`
  font-style: italic;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text.light};
  width: 100%;
  padding: 10px 30px;
`;

const EmptySearch = styled.div`
 opacity: 0.7;
`;

const DividerStyled = styled(Divider)`
  margin: 20px 0;
`;

const Counter = styled.span`
 margin-left: 5px;
`;

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const SubCategoryLink = styled(Anchor)`
  color: ${({ theme }) => theme.colors.text.light};
`;

const SubCategoryList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 15px;
  list-style: none;
  font-size: 13px;
`;

const SubCategoryItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.light};
  word-break: break-word;

  & > span {
    flex-shrink: 0;
  }
`;

const MainCategoryLink = styled(Anchor)`
  color: ${({ theme }) => theme.colors.text.dark};
  font-weight: 500;
  font-size: 14px;
  word-break: break-word;
  opacity: 0.7;
`;

const MainCategoryList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
  grid-gap: 15px;
  list-style: none;
`;

const MainCategoryItem = styled.li`

`;

const ListStyled = styled.section`
  position: absolute;
  top: 34px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 20px 2px rgba(30, 30, 30, 0.1);
  z-index: 10;
`;

const List = ({ categories, mainCategories }) => (
  <ListStyled>
    <Title>
      Результаты поиска
    </Title>

    <Wrapper>
      {
        !categories.length && !mainCategories.length
          ? <EmptySearch>Ничего ненайдено</EmptySearch>
          : null
      }

      {/* sub category list */}
      {
        categories.length
          ? (
            <SubCategoryList>
              {categories.map(category => (
                <SubCategoryItem key={category.slug}>
                  <Link
                    as={getURLWithPlatformPrefix(`/category-${category.slug}`)}
                    href={`/category?categorySlug=${category.slug}`}
                    passHref
                  >
                    <SubCategoryLink>
                      {category.name}
                    </SubCategoryLink>
                  </Link>

                  <Counter>
                    {category.countOfOffers}
                  </Counter>
                </SubCategoryItem>
              ))}
            </SubCategoryList>
          )
          : null
      }

      {
        categories.length && mainCategories.length
          ? <DividerStyled />
          : null
      }

      {/* main category list */}
      {
        mainCategories.length
          ? (
            <MainCategoryList>
              {mainCategories.map(category => (
                <MainCategoryItem key={shortId()}>
                  <Link
                    as={getURLWithPlatformPrefix(`/category-${category.slug}`)}
                    href={`/category?categorySlug=${category.slug}`}
                    passHref
                  >
                    <MainCategoryLink>
                      {category.name}
                    </MainCategoryLink>
                  </Link>
                </MainCategoryItem>
              ))}
            </MainCategoryList>
          )
          : null
      }
    </Wrapper>

  </ListStyled>
);

List.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
