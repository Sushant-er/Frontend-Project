function addBlog(blog){
    // Create a new div element for the blog post
    const blogPostDiv=document.createElement('div');
    blogPostDiv.className='blog-post';

    //Create a new div for the blog header
    const blogHeaderDiv=document.createElement('div');
    blogHeaderDiv.className='blog-header';

    //Create a new h2 element for the blog title
    const blogTitle=document.createElement('h2');
    blogTitle.className='blog-title';
    blogTitle.textContent=blog.title; // Set the title text

    // Create a new p element for the blog date
    const blogDate=document.createElement('p');
    blogDate.className='blog-date';
    blogDate.textContent=blog.date; // Set the date text

    // Create a new p element for the blog content
    const blogContent=document.createElement('p');
    blogContent.className='blog-content';
    blogContent.textContent=blog.content; // Set the content text

    // Append the title and date to the blog header
    blogHeaderDiv.appendChild(blogTitle);
    blogHeaderDiv.appendChild(blogDate);

    // Append the blog header to the blog post
    blogPostDiv.appendChild(blogHeaderDiv);

    // Append the content to the blog post
    blogPostDiv.appendChild(blogContent);

    // Append the blog post to the exisiting ul with the class blog-list
    const blogList=document.querySelector('.blog-list');
    blogList.appendChild(blogPostDiv);

}

// Sample blog data
const blogData=[
    {
        title: 'First Blog Post',
        date:'January 1,2022',
        content:'This is the content of the first blog post.'
    },
    {
        title: 'Second Blog Post',
        date:'February 1,2022',
        content:'This is the content of the second blog post.'
    },
    {
        title: 'Third Blog Post',
        date:'March 1,2022',
        content:'This is the content of the third blog post.'
    },
];

// Call the addBlog function for each blog object in blogData
blogData.forEach(blog=>addBlog(blog));