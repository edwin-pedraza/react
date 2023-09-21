

function BlogPost({ post }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      {/* <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600">{post.date}</p>
      <p className="mt-2">{post.excerpt}</p>
      <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-2">
        Read more
      </a> */}
      <h1>{post}</h1>
    </div>
  );
}

export default BlogPost;
