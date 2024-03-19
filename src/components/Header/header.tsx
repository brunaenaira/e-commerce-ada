import './style.css';
import SearchBar from "../SearchBar";
import CartButton from "../CartButton";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <SearchBar/>
                <CartButton/>
            </div>
        </header>
    );
}
