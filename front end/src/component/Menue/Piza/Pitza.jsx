import './styles.css';
import Card from '../../comone/Card';
// const axios = require('axios/dist/node/axios.cjs');
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Pizza() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/pizza/getpizza")

            .then(function (response) {
                console.log(response.data);
                setData(response.data)
                // setData(response.data);
            });
    }, []);

    return (
        <div>
            <div class="image position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                <div class="baner col-md-6 p-lg-5 mx-auto my-5">
                    <h1 class="display-3 fw-bold">Burger section</h1>
                </div>
            </div>
            {/*card- */}

            <div class="album py-2 bg-body-tertiary">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {data.map((val, index) => (



                            <Card title={val.description} price={val.price} img={`http://localhost:3000/`+val.image} />


                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}