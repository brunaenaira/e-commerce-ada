import {Component} from "react";
import MlApi from "../../service/MlApi.tsx";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import './style.css'

export default class HomePage extends Component<NonNullable<unknown>, HomeState> {
    constructor(props: string) {
        super(props);
        this.state = {
            products: [], search: 'iPhone'
        }
    }

    handleCallApi() {
        MlApi(this.state.search).get("/sites/MLB/search")
            .then(res => {
                const products = res.data.results.map((product: {
                    title: string;
                    thumbnail: string;
                    price: number;
                }) => ({
                    title: product.title, thumbnail: product.thumbnail, price: product.price
                }));
                this.setState({products})
            });
    }


    override componentDidMount() {
        this.handleCallApi()
    }

    override render() {
        return (

            <section className="products container">
                {this.state.products.map((product) => <ProductCard key={product.id} data={product}/>)}
            </section>
        );
    }
}

interface HomeState {
    products: [];
    search: string;
}
