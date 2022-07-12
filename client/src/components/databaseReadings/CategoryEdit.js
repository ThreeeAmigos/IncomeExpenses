import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'

const CategoryEdit = (idx) => {


    const [categoryName, setCategoryName] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')

    const fetchData = () => {
        getElements("categories")
            .then(item => setCategory(item))
    }
   
console.log("a")

    useEffect(() => {
        fetchData()
    }, [])



    const dUrl = "http://localhost:8080/categories/?id="

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(dUrl + idx.idx.id, {
                method: "DELETE"
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setDeleteMessage("Category DELETED")
            } else {
                setDeleteMessage("Error")
            }
            fetchData()
        }
        catch (err) {
            console.log(err)
        }

    }


    const url = "http://localhost:8080/categories/"
    const handleSubmit = async (event) => {
        event.preventDefault()
        fetchData()
        try {
            const res = await fetch(url + idx.idx.id, {
                method: "PUT",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    categoryName: categoryName
                }
                )
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setMessage("Category Changed")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }
        fetchData()

    }

    const handleCategoryChange = (event) => {
        setCategoryName(event.target.value)
        fetchData()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" onChange={handleCategoryChange} value={categoryName} required /> <br />
                    <button onClick={handleSubmit} type="submit-target" >Change Name</button>
                    <br />
                    {message}
                </div>
            </form>
            <form onSubmit={handleDelete}>
                <div>
                    <button onClick={handleDelete} type="submit-target" >Delete</button>
                    <br />
                    {deleteMessage}
                </div>
            </form>
        </div>
    )
}

export default CategoryEdit