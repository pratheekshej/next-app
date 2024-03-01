import Nav from "@/components/Nav"
import Provider from "@/components/Provider"

const BlogPostLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
        </Provider>
    )
}

export default BlogPostLayout