import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth);
    }


    const [blogs, setBlogs] = useState([]);

    const url = 'https://simple-blogs-server.onrender.com/blog';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })

    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Blogs</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>{user ?
                    <button className='btn btn-danger' onClick={handleSingOut}>Sign Out</button>
                    :
                    <Link to={'/login'}>Login</Link>}</li>
                    <li><Link to={'/AddBlogs'}>Add Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;