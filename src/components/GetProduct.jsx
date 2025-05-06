import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";

const GetProduct = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(8);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState("");

    const image_url = "https://johntirike.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    const getProducts = async () => {
        setError("");
        setLoading(true);
        try {
            const response = await axios.get("https://johntirike.pythonanywhere.com/api/getproducts");
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (err) {
            setError("Failed to load products: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter(product =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
        setVisibleCount(8); // Reset pagination
    };

    const handleLoadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 8);
            setLoadingMore(false);
        }, 1000); // Simulate delay for spinner animation
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="row">
            {/* Navbar */}
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/signin">SignIn</Link>
                <Link className="btn btn-dark mx-2" to="/signup">SignUp</Link>
                <Link className="btn btn-dark mx-2" to="/addproduct">AddProduct</Link>
                <Link className="btn btn-dark mx-2" to="/singleproduct">SingleProduct</Link>
            </nav>

            {/* Carousel */}
            <Carousel />

            {/* Search Bar */}
            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Search a product by name"
                        onChange={(e) => handleSearch(e.target.value)}
                        className="form-control"
                    />
                </div>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="text-center my-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && <b className="text-danger text-center">{error}</b>}

            {/* Product Grid */}
            {!loading &&
                filteredProducts.slice(0, visibleCount).map((product, index) => (
                    <div key={index} className="col-md-3 justify-content-center mb-4">
                        <div className="card shadow">
                            <img
                                src={image_url + product.product_photo}
                                className="product_img"
                                alt={product.product_name}
                            />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">
                                    {product.product_desc.slice(0, 50)}...
                                </p>
                                <b className="text-warning">{product.product_cost} Ksh</b>
                                <button
                                    className="btn btn-primary w-100 mt-2"
                                    onClick={() =>
                                        navigate("/singleproduct", { state: { product } })
                                    }
                                >
                                    View Product
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            {/* Load More Button or Spinner */}
            {!loading && visibleCount < filteredProducts.length && (
                <div className="text-center my-4">
                    {loadingMore ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <button
                            className="btn btn-outline-success"
                            onClick={handleLoadMore}
                        >
                            Load More Products
                        </button>
                    )}
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default GetProduct;
