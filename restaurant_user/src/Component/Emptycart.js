import React from 'react'
import { Link } from 'react-router-dom'

function Emptycart() {
    return (
        <>
        <div className="container d-flex justify-content-center">
        <div className="card shadow-lg border-light rounded-3 p-4 text-center" style={{maxWidth: "600px", backgroundColor: "#f9f9f9;"}}>
          <div className="card-body">
            <h2 className="card-title text-danger mb-4">🍴 Your Cart is Empty!</h2>
            <p className="card-text text-muted mb-4">It looks like you haven’t added any delicious dishes to your cart yet. Discover our menu and start adding your favorite meals!</p>
            <div className="d-flex justify-content-center mb-4">
              <div className="icon-circle bg-warning text-white p-3 mx-2">
                <i className="bi bi-cup-straw" style={{fontSize: "2rem;"}}></i>
              </div>
              <div className="icon-circle bg-danger text-white p-3 mx-2">
                <i className="bi bi-basket" style={{fontSize: "2rem;"}}></i>
              </div>
              <div className="icon-circle bg-success text-white p-3 mx-2">
                <i className="bi bi-house-door" style={{fontSize: "2rem;"}}></i>
              </div>
            </div>
            <Link to={"/menu"} className="btn btn-primary btn-lg rounded-pill shadow-sm">Explore Menu</Link>
          </div>
        </div>
      </div>

        </>
    )
}

export default Emptycart