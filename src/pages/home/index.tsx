import { useContext, useEffect } from "react";
import MlApi from "../../service/MlApi.tsx";
import Index from "../../components/ProductCard";
import './style.css'
import { EcommerceContext } from "../../context/EcommerceContext.tsx";
import { Product } from "../../@types/ecommerce";

export default function HomePage() {
    const { products, setProducts } = useContext(EcommerceContext);
    useEffect(() => {
        MlApi('cafe').get("/sites/MLB/search")
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
    }, []);
    return (
        <section className="products container">
            {products.map((product: Product) => <Index key={product.id} data={product} />)}
        </section>
    );
}
// export default class HomePage extends Component<NonNullable<unknown>, HomeState> {
//     constructor(props: string) {
//         super(props);
//         this.state = {
//             products: products, search: 'mochila'
//         }
//     }
//     const { products, setProducts, loading, setLoading } = useContext(AppContext);
// handleCallApi() {
//     MlApi(this.state.search).get("/sites/MLB/search")
//         .then(res => {
//             const products = res.data.results.map((product: {
//                 title: string;
//                 thumbnail: string;
//                 price: number;
//             }) => ({
//                 title: product.title, thumbnail: product.thumbnail, price: product.price
//             }));
//             this.setState({ products })
//         });
// }


//     override componentDidMount() {
//     this.handleCallApi()
// }

//     override render() {
//     return (

//         <section className="products container">
//             {this.state.products.map((product) => <Index key={product.id} data={product} />)}
//         </section>
//     );
// }
// }
