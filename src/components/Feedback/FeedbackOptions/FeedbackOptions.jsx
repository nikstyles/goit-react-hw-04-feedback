import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={s.feedback__btn_list}>
        {options.map(option => (
          <li key={option} className={s.feedback__btn_item}>
            <button
              className={`${s.feedback__button} ${s[option]}`}
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
