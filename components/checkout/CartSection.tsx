import React from "react";

const CartSection = () => {
  return (
    <>
      <section className="cart_section">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Reseller Total</th>
              <th scope="col">Reseller Commission</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <a href="#">
                  <div className="product_cart_wrapper d-flex">
                    <div
                      className="product_cart_image me-2"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <img
                        src="https://backend.wholesaleclubltd.com/assets/img/placeholder.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <h5>Product Name</h5>
                  </div>
                </a>
              </td>
              <td>1000</td>
              <td>1</td>
              <td>1000</td>
              <td>1000</td>
              <td>1000</td>
              <td>
                <a href="#">
                  <i className="fa fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-start">
                Subtotal
              </td>
              <td>1000</td>
              <td>1000</td>
              <td scope="col-auto">1000</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default CartSection;
