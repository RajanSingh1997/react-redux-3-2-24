import React from "react"
export default function Home (){
    return(
        <div>
            <div className="add-to-cart">
                <img src = "https://cdn.pixabay.com/photo/2023/04/13/12/30/cart-7922463_1280.png" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src = "https://idestiny.in/wp-content/uploads/2023/09/iPhone_15_Pink_PDP_Image_Position-1__WWEN-1536x1536.jpg" />
                    </div>
                <div className="text-wrapper item">
                   <span>iPhone</span>
                   <span>$1000.00</span>
                </div>
                <div className="btn-wrapper item">
                  <button>Add To Cart</button>  
                </div>
            </div>
        </div>
    )
}