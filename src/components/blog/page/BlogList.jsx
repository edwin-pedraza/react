
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))} */}
      <BlogPost />
    </div>
  );
}

export default BlogList;
