import React, {useState} from "react";
import style from './SearchForm.module.css';

const SearchForm = ({setQuery}) => {
    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <form className={style.searchForm__container} onSubmit={getSearch}>
            <div className={style.searchForm__content}>
                <input className={style.searchForm__input}
                       type='text'
                       value={search}
                       onChange={updateSearch}
                       placeholder='Enter a product ...'/>
                <button className={style.searchForm__button} type='submit'> Search</button>
            </div>
        </form>
    );
}

export default SearchForm;