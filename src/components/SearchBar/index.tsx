import { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './style.css';
import { EcommerceContext } from '../../context/EcommerceContext';
import MlApi from '../../service/MlApi';

export default function SearchBar() {
    const { setProducts } = useContext(EcommerceContext);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        MlApi(searchValue).get("/sites/MLB/search")
            .then(res => {
                const products = res.data.results.map((product: {
                    title: string;
                    thumbnail: string;
                    price: number;
                }) => ({
                    title: product.title, thumbnail: product.thumbnail, price: product.price
                }));
                setProducts(products);
            })
        setSearchValue('');
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className="search__input"
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />

            <button type="submit" className="search__button">
                <BsSearch />
            </button>
        </form>
    );
}
