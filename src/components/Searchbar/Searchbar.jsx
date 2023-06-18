import { useState } from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as Search } from '../../Images/search.svg';

export const Searchbar = ({ handleOnSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleOnSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.form}>
        <button type="submit" className={css.form_button}>
          <span className={css.button_label}></span>
          <Search width={'20px'} height={'20px'} />
        </button>

        <input
          onChange={handleChange}
          className={css.input}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
