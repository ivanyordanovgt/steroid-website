import "./common.css";

export const Footer = () => {
    return(
        <footer className="footer-container">
            <nav>
                <div className='nav-holder'>
                    <ul className="nav">
                        <li><a href='/products'>Shop products</a></li>
                        <li><a href='#'>Quality control</a></li>
                        <li><a href='#'>Verify</a></li>
                        <li><a href='#'>Help Centre</a></li>
                        <li><a href='/my-account'>My account</a></li>
                    </ul>
                </div>  
                <span className="email-span"><a href="#">shop@kits4less.com</a></span>
            </nav>
             <span id="copyright-span">Copyright © Kits4Less.</span>
        </footer>
        )
}
