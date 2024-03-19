import React from 'react';
import {BsSearch} from 'react-icons/bs';

import './style.css';

class SearchBar extends React.Component {
    render() {

        return (
            <form className="search-bar">
                <input
                    type="search"
                    placeholder="Buscar produtos"
                    className="search__input"
                    required
                />

                <button type="submit" className="search__button">
                    <BsSearch/>
                </button>
            </form>
        );
    }
}

export default SearchBar;
