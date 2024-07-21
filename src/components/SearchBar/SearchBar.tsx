import { ChangeEvent, FormEvent, useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import style from '../SearchBar/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}



const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    onSubmit(input);
    setInput('');
  };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

   

  return (
    <header className={style.searchBar}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputWrapper}>
          <input
            type="text"
            id="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
