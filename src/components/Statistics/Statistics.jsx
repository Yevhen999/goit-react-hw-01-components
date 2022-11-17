import PropTypes from 'prop-types';
import {
  SectionStatistics,
  TitleStatistics,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <TitleStatistics>{title}</TitleStatistics>}
      <StatList>
        {stats.map(state => (
          <StatItem key={state.id}>
            <StatLabel>{state.label}</StatLabel>
            <StatPercentage>{state.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
