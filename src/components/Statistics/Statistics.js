import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.listItem}
            style={{
              backgroundColor:
                'rgba(66, 90, 105,' + (item.percentage + 40) / 100 + ')',
            }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
