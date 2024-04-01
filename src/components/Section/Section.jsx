import css from './Section.module.css'

export const Section = ({ title, children }) => (
    <div className={css.sectionContainer}>
    <h2 className={css.sectionTitle}>{title}</h2>
    <div className={css.sectionContent}>
      {children}
    </div>
  </div>
);