import React, { useRef } from 'react';

const AddBlogs = () => {

    const blogName = useRef('');
    const descriptionRef = useRef('');
    const linkRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = blogName.current.value;
        const link = event.target.link.value
        const blogType = event.target.blogType.value
        const description = descriptionRef.current.value;

        console.log(link, blogType, name, description)




        const blogDetails = {
            name: name,
            img: link,
            blogType: blogType,
            description: description
        }


        const url = `https://simple-blogs-server.onrender.com/blog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    window.alert('blog submited')
                }
                else {
                    window.alert('Something Wrong')
                }
            })

        event.target.reset();

    }

    return (
        <div>
            <div class="card max-w-sm m-20 shadow-2xl bg-base-100">
                <h1 className='text-4xl text-black'>Add Your Blogs</h1>
                <form onSubmit={handleSubmit} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Image Link</span>
                        </label>
                        <input ref={linkRef} type="link" name="link" class="form-control border" id="floatingInput" placeholder="Link" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Blog Type</span>
                        </label>
                        <input type="text" name="blogType" class="form-control border" id="floatingInput" placeholder="blog Type" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Blog Name</span>
                        </label>
                        <input ref={blogName} type="name" name="name" class="form-control border" id="floatingInput" placeholder="Blog Name" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea ref={descriptionRef} type="description" name='description' class="form-control border" placeholder="Description" />
                    </div>
                    <input className='btn btn-primary mt-3' type="submit" value="Send Data" />
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;