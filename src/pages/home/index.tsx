import MlApi from "../../service/MlApi.tsx";

export default function HomePage(query: string = 'iPhone') {

    getUsersData(query)
    return (
        <div>
            <h3>Produtos</h3>
        </div>
    );
}

function getUsersData(query: string) {
    MlApi()
        .get(`/sites/MLB/search`, {
            params: {q: query}
        })
        .then(res => {
            const data = res.data
            console.log(data)

        })
        .catch((error) => {
            console.log(error)
        });

}
