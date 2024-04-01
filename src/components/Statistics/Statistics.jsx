import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      <p className={css.statisticsItem}>Good: {good}</p>
      <p className={css.statisticsItem}>Neutral: {neutral}</p>
      <p className={css.statisticsItem}>Bad: {bad}</p>
      <p className={css.statisticsItem}>Total: {totalFeedback}</p>
      <p className={`${css.statisticsItem} ${css.positiveFeedback}`}>
        Positive feedback: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};