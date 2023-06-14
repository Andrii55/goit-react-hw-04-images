import css from './Button.module.css';

export const Button = ({ handelClick }) => {
  return (
    <button className={css.btn} onClick={handelClick}>
      loadMore
    </button>
  );
};
