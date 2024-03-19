import {Component} from "react";
import MlApi from "../../service/MlApi.tsx";

export default class HomePage extends Component<string> {
    constructor(props: string) {
        super(props);
        this.state = {products: [], search: "iPhone"}
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
        this.handleCallApi(this.state.search)
    }

    override render() {
        return (
            <div>
                <h3>Produtos</h3>
            </div>
        );
    }
}
