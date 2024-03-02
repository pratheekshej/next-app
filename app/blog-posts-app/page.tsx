import Feed from "@/components/Feed"

const BlogPostsApp = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>Blog Posts</span>
            </h1>

            <p className='desc text-center'>
                Blog posts is an open-source prompting tool for modern world to discover, create and share creative blog posts
            </p>

            <Feed />
        </section>
    )
}

export default BlogPostsApp