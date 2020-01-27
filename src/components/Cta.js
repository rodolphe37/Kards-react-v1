import React from 'react';

const Cta = () => {
    return (
        <section id="cta" className="grey-section">
        <div className="row cta-content">
            <div className="col-twelve section-ads">  
            <h2 className="h01"><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a></h2>
            <p className="lead">
                Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
                Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>. 
                {/* Simply type	the promocode in the box labeled “Promo Code” when placing your order. */}	
            </p>
            <div className="action">
                <a className="button button-primary large" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
            </div>		     	
            </div>
        </div> {/* /cta-content */}
        </section>

    )
}
export default Cta;
