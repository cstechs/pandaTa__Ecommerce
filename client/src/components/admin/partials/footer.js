import React from 'react'

const Footer = () => {
    return(
        <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              © PANDA / TA developed by
              <a href="http://cstechsoftwares.com/">Cstech Softwares</a>
            </div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-sm-block">
                <span className="mr-3">About Us</span>
                <span className="mr-3">Help</span>
                <span className="mr-3">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
       </footer>
    )
}

export default Footer;
