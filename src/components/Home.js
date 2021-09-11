import React from 'react'

function Home(props){
    console.log(props,'pp')
    return(
        <div>
            <div>Home Component</div>
            <div className="add-to-cart">
            <span className="cart-count">>{props.cardData.length}</span>
            <img src="data:image/png;base64,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"/>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gizmochina.com%2Fproduct%2Fapple-iphone-11%2F&psig=AOvVaw1LoQEUjXj7vCTRW2EKiy7o&ust=1630935723339000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiL8aX75_ICFQAAAAAdAAAAABAH" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler({price:'40000',product:'IPhone'}) }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;