import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className="category_card card text-white bg-light  flex rounded-0">
        <div className="p-3 position-relative category_image_wrapper">
          <Image className="card-img-top" src="/vercel.svg" alt="" fill />
        </div>

        <div className="card-body text-dark">
          <Link href="#">
            <h5 className="text-center">Android Phone</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
