const Footer = ()=>{

    const date = new Date().getFullYear()

    return(
        <>
        <footer>
            <div className="p-5 border-t text-center">copyright {date}</div>
        </footer>
        </>
    )
}

export default Footer