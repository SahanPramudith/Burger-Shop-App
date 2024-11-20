import axios from "axios";
import { useState, useEffect } from "react";

export default function BugerView() {
    const [data, setData] = useState([]);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [id, setId] = useState();
    const [descrip, setDescrip] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState();
    const [currentDetails, setCurrentDetails] = useState({
        id: null,
        price: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        axios.get('http://localhost:3000/buger/getbuger')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const openModel = (val) => {
        setId(val.id);
        setCurrentDetails({
            id: val._id,
            description: val.description,
            price: val.price,
            image: val.image,
        });
        setIsModelOpen(true);
    }

    useEffect(() => {
        console.log(currentDetails); // This will log updated details after state change.
    }, [currentDetails]);

    const closeModel = () => {
        setIsModelOpen(false);
    }

    function updatePost(e) {
        e.preventDefault();  // Prevents the form from refreshing the page

        const formdata = new FormData();
        formdata.append('description', descrip);
        formdata.append('image', file);
        formdata.append('price', price);

        axios.put(`http://localhost:3000/buger/updatebuger/${id}`, formdata)
            .then(function (response) {
                return axios.get('http://localhost:3000/buger/getbuger');
            })
            .then((response) => {
                setData(response.data); // Update state with new data
                setIsModelOpen(false); // Close the modal
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    function deletePost(id) {
        axios.delete(`http://localhost:3000/buger/deletebuger/${id}`)
            .then(function (response) {
                return axios.get('http://localhost:3000/buger/getbuger');
            })
            .then((response) => {
                setData(response.data); // Update state with new data
                setIsModelOpen(false); // Close the modal
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="flex-wrap flex justify-center drop-shadow-2xl w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {data.map((val, index) => (
                    <div key={index}>
                        <div className="shadow-2xl px-5 pb-5 album py-2 bg-body-tertiary">
                            <img className="p-8 rounded-t-lg" src={`http://localhost:3000/` + val.image} alt="product image" />
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">description :=    {val.description}</h5>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">price :=    {val.price}</h5>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">id:{val.id}</h5>

                            <button onClick={() => openModel(val)} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                UPDATE POST
                            </button>
                            <button   onClick={() => deletePost(val.id)}type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                DELETE POST
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModelOpen && (
                <div id="crud-modal" className="bg-bg-blue-100 bg-opacity-100 backdrop-blur-sm flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Post
                                </h3><br />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {id}
                                </h3>
                                <button onClick={closeModel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form className="p-4 md:p-5" onSubmit={updatePost}>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    {
                                        !file ? (
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input onChange={(val) => setFile(val.target.files[0])} id="dropzone-file" type="file" class="hidden" />
                                            </label>
                                        ) : (
                                            file && (
                                                <div className="mt-4">
                                                    <p>Selected File: {file.name}</p>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt="Preview"
                                                        className="w-full h-64"
                                                    />
                                                </div>
                                            ))
                                    }

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={currentDetails.price} required />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea onChange={(e) => setDescrip(e.target.value)} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={currentDetails.description} required></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button type="button" onClick={closeModel} className="text-gray-500 bg-white border border-gray-200 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-100 hover:text-gray-900">Cancel</button>
                                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
