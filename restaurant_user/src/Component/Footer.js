import React from 'react';

function Footer() {
    return (
        <>
            <footer className="py-5">
                <div className="container py-xl-4">
                    <div className="row footer-top">
                        <div className="col-lg-4 footer-grid_section_1its footer-text">
                            <h2>
                                <a className="logo text-wh" href="">
                                    <img src="images/logo.png" alt="Tasty Burger Logo" className="img-fluid" />
                                    <span>Tasty</span> Burger
                                </a>
                            </h2>
                            <p className="mt-lg-4 mt-3 mb-lg-5 mb-4" style={{ color: '#fff' }}>
                                A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                            </p>
                        </div>
                        <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                            <div className="footer-title">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="footer-text mt-4" style={{ color: '#fff' }}>
                                <p>
                                    City: <a href="" style={{ color: '#fff', textDecoration: 'none' }}>Junagadh</a>
                                </p>
                                <p className="my-2">
                                    Phone: <a href="tel:+91 9426688142" style={{ color: '#fff', textDecoration: 'none' }}>+91 9426688142</a>
                                </p>
                                <p>
                                    Email: <a href="mailto:memdavadidev23@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>memdavadidev23@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 footer-grid_section_1its">
                            <div className="footer-title">
                                <h3>Popular Dishes</h3>
                            </div>
                            <div className="footer-text mt-4">
                                <ul className="popular-dishes-list" style={{ color: '#fff' }}>
                                    <li>Classic Veggie Burger</li>
                                    <li>Spicy Veggie Sandwich</li>
                                    <li>Cold Drinks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
