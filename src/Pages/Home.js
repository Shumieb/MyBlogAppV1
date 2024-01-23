import React from 'react'
import SearchBlogs from '../Components/SearchBlogs'
import BlogList from '../Components/BlogList'


function Home() {
    return (
        <div>
            <h1>My Blog Site App</h1>
            <SearchBlogs />
            <BlogList />
        </div>
    )
}

export default Home