import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.statistic__card}>
      <ul className={s.statistic__option}>
        <li className={`${s.statistic__item} ${s.statistic__good}`}>
          Good: <span className={s.statistic__item_number}>{good}</span>
        </li>
        <li className={`${s.statistic__item} ${s.statistic__neutral}`}>
          Neutral: <span className={s.statistic__item_number}>{neutral}</span>
        </li>
        <li className={`${s.statistic__item} ${s.statistic__bad}`}>
          Bad: <span className={s.statistic__item_number}>{bad}</span>
        </li>
      </ul>
      <p className={s.statistic__total}>Total: {total}</p>
      <p className={s.statistic__positivePercentage}>
        Positive feedback: {positivePercentage} %
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
