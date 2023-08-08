import PropTypes from 'prop-types';
import {
  StatsSection,
  Title,
  StatsList,
  Label,
  Percentage,
  StatsItem,
} from '../App.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <Label>{stat.label} </Label>
            <Percentage>{stat.percentage}</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
