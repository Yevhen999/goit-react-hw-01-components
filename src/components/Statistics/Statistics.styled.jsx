import styled from 'styled-components';

export const SectionStatistics = styled.section`
  margin-left: 30px;
  width: 750px;
`;

export const TitleStatistics = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  text-align: center;
  width: calc(100% / 4);
  background-color: yellow;
  padding-top: 40px;
  padding-bottom: 40px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: blue;
  }
`;

export const StatLabel = styled.span`
  display: block;
`;

export const StatPercentage = styled.span`
  display: block;
`;
