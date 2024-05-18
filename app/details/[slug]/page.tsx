import ProductCard from "@/components/cards/ProductCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-6">
            <nav className="breadcrumb">
              <a className="breadcrumb-item text-success" href="#">
                Home
              </a>
              <a className="breadcrumb-item text-success" href="#">
                Category
              </a>
              <span className="breadcrumb-item active">Pant</span>
            </nav>
            <div className="product_image">
              <img
                src="https://backend.wholesaleclubltd.com/assets/img/placeholder.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-6">
            <h3 className="text-success">Pant</h3>
            <h5>Price :580</h5>
            <h5>Size</h5>
            <h5>Color</h5>
            <h5>Total Price:1160</h5>
            <h5>Reseller Price:
              <input type="number" className="form-control" min={'0'} />
            </h5>

            <h5>Commission: <input type="number" disabled className="form-control" /></h5>
            <button className="btn btn-success rounded-0">Add To Cart</button>
            <i className="fa fa-share" aria-hidden="true"></i>
            <i className="fa fa-download" aria-hidden="true"></i>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3>Description</h3>
            <p className="text-muted">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
            </p>
          </div>
        </div>
        <h3>Related Products</h3>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
