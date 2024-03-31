import React from 'react'
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/action';


const SingleProductPage = async ({params}) => {

  const {id} = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size} />
          <label>cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">
              kitchen
            </option>
            <option value="computer">
              computer
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage
