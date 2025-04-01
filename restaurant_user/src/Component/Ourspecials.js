import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Ourspecials() {
    const [box, setBox] = useState(null);
    const [menu, setMenu] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const stusid = window.sessionStorage.getItem("userid") || false;
    const [cart, setCart] = useState(JSON.parse(window.sessionStorage.getItem("menu")) || []);

    const itemsPerPage = 5; // Number of items per page

    const fetchMenu = async (pageNumber) => {
        try {
            const res = await axios.get(`http://tasty.000.pe/API/viewmenu.php?page=${pageNumber}&limit=${itemsPerPage}`);
            setMenu(res.data.Data);
            setTotalPages(res.data.Totalrow / itemsPerPage);

        } catch (error) {
            console.error('Error fetching menu data', error);
        }
    };

    useEffect(() => {
        fetchMenu(page);
    },[page]);

    const toggleVisibility = (id) => {
        setBox(prevBox => (prevBox === id ? null : id));
    };

    const addToCart = (item, mid) => {
        const itemWithQuantity = { ...item, quantity: 1 };

        if (cart.find(selectedItem => selectedItem.mid === mid)) {
            alert('Item Is Already Added To Your Cart');
            return;
        }
        const newCart = [...cart, itemWithQuantity];
        setCart(newCart);
        window.sessionStorage.setItem("menu", JSON.stringify(newCart));
        alert('Item Added To Your Cart');
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <>
            <section className="blog_w3ls py-5">
                <div className="container pb-xl-5 pb-lg-3">
                    <div className="title-section text-center mb-md-5 mb-4">
                        <p className="w3ls-title-sub">Tasty</p>
                        <h3 className="w3ls-title">Our <span>Special</span></h3>
                    </div>
                    <div className="row">
                        {menu.map((item) => {
                            const url = `http://tasty.000.pe/API/Upload/${item.photo}`;
                            return (
                                <div key={item.mid} className="col-lg-4 col-md-6 my-3">
                                    <div className="card border-0 med-blog">
                                        <div className="card-header p-0">
                                            <img className="card-img-bottom rounded-0" src={url} alt="Card image cap" height={450} />
                                        </div>
                                        <div className="card-body border border-top-0">
                                            <h5 className="blog-title card-title m-0">{item.ctname}</h5>
                                            <p className="mt-3">{item.mname}</p>
                                            <button onClick={() => toggleVisibility(item.mid)} className="btn button-w3ls mt-4 mb-3">
                                                View More
                                                <span className="fa fa-caret-right ml-1" aria-hidden="true"></span>
                                            </button>
                                            <section style={{ display: box === item.mid ? 'block' : 'none' }} className='card p-4'>
                                                <div className='fw-bold'>{item.price} ₹</div>
                                                <div>{item.info}</div>
                                                {stusid ?
                                                    <center>
                                                        <button onClick={() => addToCart(item, item.mid)} className='btn btn-outline-primary rounded-0 mt-2'>Add To Cart</button>
                                                    </center>
                                                    : null
                                                }
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="container">
                        <nav aria-label="Page navigation">
                            <div className="d-flex flex-column flex-md-row justify-content-center overflow-auto">
                                <ul className="pagination flex-nowrap mb-0">
                                    <li className="page-item">
                                        <button className="page-link" onClick={() => handlePageChange(page - 1)} disabled={page === 1} aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i + 1} className={`page-item ${i + 1 === page ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}> {i + 1} </button>
                                        </li>
                                    ))}
                                    <li className="page-item">
                                        <button
                                            className="page-link" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Ourspecials;
