import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import CategoryEdit from './CategoryEdit';
import SetupMenu from '../SetupMenu';

const Category = () => {

    const [category, setCategory] = useState([])
    const [message, setMessage] = useState('')
    const [newCategoryName, setNewCategoryName] = useState('')


    const fetchData = () => {
        getElements("categories")
            .then(item => setCategory(item))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePost = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/categories/", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    categoryName: newCategoryName
                }
                )
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setMessage("Category Changed")
            } else {
                setMessage("")
            }
        }
        catch (err) {
            console.log(err)
        }
        fetchData()

    }


    const handleNewCategoryChange = (event) => {
        setNewCategoryName(event.target.value)
    }


    return (

        <>
            <SetupMenu />

            <div class="align" id="margin">
                <h1>Categories</h1>
                {Array.from(Array(category.length)).map((number, idx) => {

                    return (
                        <div>

                            <details>
                                <summary>{category[idx].categoryName}</summary>
                                <p ><CategoryEdit idx={category[idx]} /></p>
                            </details>

                        </div>
                    )
                })
                }
                <br />
                <br />
                <p>Add a new Category</p>
                <form onSubmit={handlePost}>

                    <input class="form-control" type="text" onChange={handleNewCategoryChange} value={newCategoryName} required /> <br />
                    <button class="btn btn-outline-primary" onClick={handlePost} type="submit-target" >Add Category</button>
                    <br />
                    {message}
                </form>

                <br />
            </div>
        </>
    )
}

export default Category


