import React, { useEffect, useState } from 'react'

const Main = () => {
    const [data, setData] = useState(null)

    const onClickPosts = () => {
        fetch(`https://dummyjson.com/posts?limit=10`, { method: "GET" })
            .then((response) => response.json())
            .then((JSON) => {
                console.log(JSON)
                return setData(JSON)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickQuotes = () => {
        fetch(`https://dummyjson.com/quotes?limit=10`, { method: "GET" })
            .then((response) => response.json())
            .then((JSON) => {
                console.log(JSON)
                return setData(JSON)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    onClickPosts();
                }}>
                    Posts
                </button>
                <button onClick={() => {
                    onClickQuotes();
                }}>
                    Quotes
                </button>
            </div>
            <div>
                {data && data.posts && data.posts.map((element, i) => {
                    return (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.25rem", margin: "1.25rem 0.75rem" }}>
                            <span style={{ fontWeight: "bold", fontSize: "17px" }}>{element.title}</span>
                            <span>{element.body}</span>
                            <span>Tags: {element.tags && element.tags.join()}</span>
                        </div>
                    )
                })}
                {data && data.quotes && data.quotes.map((element, i) => {
                    return (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.25rem", margin: "1.25rem 0.75rem" }}>
                            <span style={{ fontWeight: "bold", fontSize: "17px" }}>By: {element.author}</span>
                            <span style={{ fontStyle: "italic" }}>"{element.quote}"</span>
                        </div>
                    )
                })}
                {data && data.carts && data.carts.map((element, i) => {
                    return (
                        <table key={i} border="1px solid black" >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {element.products.map((item, i) => {
                                    return (
                                        <tr>
                                            <td style={{ textAlign: "center" }}>{item.id}</td>
                                            <td style={{ textAlign: "center" }}>{item.title}</td>
                                            <td style={{ textAlign: "center" }}>{item.quantity}</td>
                                            <td style={{ textAlign: "center" }}>{item.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    )
                })}
            </div>
        </div>
    )
}

export default Main