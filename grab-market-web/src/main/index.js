import './index.css';

function MainPage() {
 return (
     <div>
        <div id="header">
            <div id="header-area"> 
            <img src="images/icons/logo.png" />
            </div>
        </div>
        <div id="body">
        <div id="banner">
            <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
            <div className="product-card">
                <div>
                    <img className="product-img" sec="images/products/keyboard1.jpg"></img>
                </div>
            </div>

        </div>
        </div>
        <div id="footer">
        </div>
    </div>
 );
}

export default MainPage;