import PropTypes from 'prop-types'
import s from './Feedback.module.css'

function FeedbackOptions({options,onLeaveFeedback})  {

        return (
            <div className = {s.container}>
                {options.map(option=>(
                    <button key={option} type='button' onClick={onLeaveFeedback(option)}
                    className={s.btn}>
                {option}
                </button>
              ))}
            </div>
        );
    }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions