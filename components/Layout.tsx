
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <main className='mt-4 p-4'>{children}</main>
        </>
    )
}

export default Layout