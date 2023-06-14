import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmit} className={css.form}>
          <button type="submit" className={css.form_button}>
            <span className={css.button_label}></span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.input}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
