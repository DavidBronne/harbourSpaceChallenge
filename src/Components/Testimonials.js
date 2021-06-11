const Testimonials = () => {
    return (
        <section className="format-section">
            <div className="wrapper">
                <div className="profile-card format-column-item format-90pc-item format-item-box slide">
                    <header>
                        <div className="format-row-item format-wrap-item">
                            <div className="format-row-item">
                                <img className="rounded-img" src="/img/profilePic.png" alt="Profile pic"/>
                                <div className="format-column-item format-align-center-item">
                                    <h2 className="margin-0">Name</h2>
                                    <p className="margin-0">Job</p>
                                </div>
                            </div>
                            <img className="logo" src="/img/linkedin.svg" alt="logo LinkedIn"/>
                        </div>
                        
                    </header>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae neque auctor nulla dictum sollicitudin non t.
                        </p>
                        <h2>Education - virtual design</h2>        
                    </div> 
                </div>
            </div>
        </section>  
    )
}

export default Testimonials