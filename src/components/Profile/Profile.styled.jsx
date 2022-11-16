import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: lightgray;
  border: 1px solid lightgray;
`;

export const Description = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  border: 1px solid tomato;
  border-radius: 100%;
`;

export const Username = styled.p`
  font-weight: 500;
`;

export const Tag = styled.p`
  font-style: italic;
`;

export const Location = styled.p`
  color: #ff6b08;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  padding-left: 15px;
  padding-right: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: blue;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
`;
