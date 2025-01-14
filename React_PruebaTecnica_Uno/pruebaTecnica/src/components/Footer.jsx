import './footer.css'
export default function Footer() {
    return (
        <>
            <section className='containerFooter'>

                <nav className='navBar'>
                    <ul>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Collection Statement</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Manage Account</a></li>
                    </ul>
                </nav>
                <p className='disclaimer'>Copyright 2016 DEMO Streaming. All Rights Reserved. </p>
                <div className='containerImg'>
                    <div className='childrenContainerImg'>
                        <img className='imgSocial' src="../assets/social/facebook-white.svg" alt="Facebook logo" />
                        <img className='imgSocial' src="../assets/social/twitter-white.svg" alt="twitter logo" />
                        <img className='imgSocial' src="../assets/social/instagram-white.svg" alt="instagram logo" />
                    </div>
                    <div className='childrenContainerImg'>
                        <img className='imgStore' src="../assets/store/app-store.svg" alt="AppStoreLogo" />
                        <img className='imgStore' src={"../assets/store/app-store.svg"} alt="AppStoreLogo" />
                        <img className='imgStore' src="../assets/store/app-store.svg" alt="AppStoreLogo" />
                    </div>
                </div>

            </section>
        </>
    )
}