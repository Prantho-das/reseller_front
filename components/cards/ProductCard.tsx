import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <>
      <div className="product_card card text-white bg-white rounded-0 mb-4">
        <div className="discount_tag bg-success">
          !Sale
        </div>
        <div className="product_image_wrapper position-relative border-2">
          <Image className="card-img-top" src="/vercel.svg" alt="" fill />
        </div>
        <div className="card-body text-dark">
          <Link href="/details/something">
            <h6 className="card-title">Android Phone</h6>
            <div className="price_section text-success bold mt-1">
              <span className="main_price text-muted me-2">$345.99</span>
              <span className="current_price">$300</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
