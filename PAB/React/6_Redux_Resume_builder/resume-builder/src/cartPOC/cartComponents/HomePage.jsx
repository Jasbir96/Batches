import React from 'react';
import { connect } from "react-redux";

function HomePage(props) {
    let { products } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button >Add to Cart</button>
                    </div>
                )

            })}
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store;
}

// higher order function
const HigherOrderComponent =
    connect(mapStateToProps)(HomePage)
export default HigherOrderComponent;
