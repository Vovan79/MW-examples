/**
 * category link for main nav menu
 *
 */

// dependencies
import styled from 'styled-components';
import Anchor from '../../style/Anchor';

export const CategoryLink = styled(Anchor)`
  display: inline-block;
  min-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.7;
  text-align: left;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary.deepGreen : theme.colors.text.normal)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default CategoryLink;
