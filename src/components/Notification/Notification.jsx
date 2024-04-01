import css from './Notification.module.css'

export const Notification = ({ message }) => (
  <div className={css.notificationContainer}>
    <p>{message}</p>
  </div>
);