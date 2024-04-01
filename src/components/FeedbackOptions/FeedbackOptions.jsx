import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptionsContainer}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={css.feedbackButton}>
          {option}
        </button>
      ))}
    </div>
  );
};