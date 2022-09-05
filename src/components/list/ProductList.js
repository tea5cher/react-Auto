import { useEffect, useState } from 'react'
import './productList.scss'

import { Link } from 'react-router-dom';

const ProductList = () => {

    let [productList, setProductList] = useState([]);
    const link = 'https://frontend-test.idaproject.com'
    useEffect(() => {
        fetch('https://frontend-test.idaproject.com/api/product?category=1').then(response => response.json()).then(data => setProductList(data)).then((data) => console.log(data));
    }, [])

    const onFilterHandler = (id) => {
        fetch(`https://frontend-test.idaproject.com/api/product?category=${id}`).then(response => response.json()).then(data => setProductList(data))
    }


    return(
        <>
         <section className='main-section'>
            <div className='categories'>
                <ul className='categories__list'>
                    <li className='categories__item'>
                        <div onClick={() => onFilterHandler(1)}>Categorie 1</div>
                    </li>
                    <li className='categories__item'>
                        <div onClick={() => onFilterHandler(2)}>Categorie 2</div>
                    </li>
                    <li className='categories__item'>
                        <div onClick={() => onFilterHandler(3)}>Categorie 3</div>
                    </li>
                </ul>
            </div>
            <div className='product-list__wrap'>
            {/* <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div> */}
            {productList.map((item, i) => {
                return <Link to={`/${item.id}`} className='product-list__item' key={item.id}>
                    <img className='product-list__item-img' src={link + item.photo}></img>
                    <div>{item.name}</div>
                    <div>{item.price} $</div>
                </Link>
            })}
         </div>
         </section>
        </>
    )
}


export default ProductList