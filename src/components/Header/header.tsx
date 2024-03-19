import './style.css';
import SearchBar from "../SearchBar";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <SearchBar/>
            </div>
        </header>
    );
}
