import React from "react";
// import './LandingPage.css';

function Footer() {
    return (
        <div className="footer">
            <h2>Supported Sites</h2>
            <div className="company-logos-container">
                <div className="company-logos">
                    <img class="logo" src="/src/assets/Amazon.png" alt="Company Logo 1" />
                    <img class="logo" src="/src/assets/AliExpress.png" alt="Company Logo 2" />
                    <img class="logo" src="/src/assets/Ebay.png" alt="Company Logo 3" />
                    <img class="logo" src="/src/assets/Shopify.png" alt="Company Logo 4" />
                    <img class="logo" src="/src/assets/Walmart.png" alt="Company Logo 5" />
                </div>
            </div>
            <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
        </div>
    )
}

export default Footer;