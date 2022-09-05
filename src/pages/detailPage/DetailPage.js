import './detailPage.scss'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';

const DetailPage = () => {
    const {productId} = useParams();
    let [firstList, setFirstList] = useState([]);
    let [secondList, setSecondList] = useState([]);
    let [thirdList, setThirdList] = useState([]);
    let [item, setItem] = useState(null);

    const link = 'https://frontend-test.idaproject.com'

    const urls = ['https://frontend-test.idaproject.com/api/product?category=1', 'https://frontend-test.idaproject.com/api/product?category=2', 'https://frontend-test.idaproject.com/api/product?category=3']

 

    useEffect(()=> {
        let arr = [];
        var promises = urls.map(url => fetch(url).then(y => y.json()));
        Promise.all(promises).then(results => {
            // console.log(results);
            arr = [...results[0],...results[1],...results[2]];
        }).finally(()=>{
            // console.log('sd')
            console.log(arr);
            // console.log('sd')
            arr.forEach(item=>{
                if (item.id == productId) {
                    console.log(item);
                    // console.log('sd');
                    setItem(item);
                }
            })  
        });
    })
    return (
        <>
            {/* <Header /> */}
            <div>
                
                {item ? <div className='card'>
                    <img className='card__img' src={link + item.photo}></img>
                    <div>{item.name}</div>
                    <div>{item.price} $</div>
                    <div>Рейтинг: {item.rating}</div>
                    <div>Категория: {item.category}</div>

                </div> : <div>Spinner</div>}
            </div>
        </>
    )
}

export default DetailPage