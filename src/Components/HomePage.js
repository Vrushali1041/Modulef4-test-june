import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/actions/productActions';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../redux/actions/cartActions';


const HomePage = () => {
    const { loading, products, error } = useSelector(state => state.products);
    console.log(loading, products, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    function handleCard(product) {
        dispatch(addToCart(product));
        navigate(`/item/${product.id}`);
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div className="home-container">
            {products && products.map((product) => {
                return (
                    <div className="product" key={product.id} onClick={() => {
                        handleCard(product)
                    }}>
                        <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.title} />
                        <p>User ID: {product.userId}</p>
                        <h3>Title: {product.title.slice(0, 10)}...</h3>
                        <p>Body: {product.body.slice(0, 50)}</p>
                        <p>Read More...</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage

