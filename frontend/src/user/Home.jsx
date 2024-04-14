import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './css/Home.module.css'; // Import CSS module
import axios from 'axios';

function Home() {
    const [sanpham, setSanpham] = useState([]); // Initialize sanpham as an empty array
    const [urlpicture, setUrlpicture] = useState('http://localhost:3000/uploads/');
    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(response => {
                if (response.data) {
                    setSanpham(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array to run once on component mount
    return (
        <div className="Home">
            <div className="d-flex" >
                <div className="container mt-1 mb-1 bg-light border p-2 shadow-lg mb-5 bg-body rounded">
                    <div>
                        cac event
                    </div>
                    <div className="container  ">
                        <label htmlFor="cardTitle"><h2>Gợi ý hôm nay</h2></label>
                        <div className="container d-flex flex-wrap">
                            {
                                sanpham.map(e => (
                                    <button className={`${styles.hoversp} card m-2`} style={{ width: "12rem" }} >
                                        <div className='card-img-top d-flex justify-content-center'>
                                            <img style={{ maxWidth: '140px', minWidth: '140px', maxHeight: '140px' }} src={urlpicture + e.hinh} className="p-1" alt={urlpicture + e.hinh} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title: {e.ten}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
