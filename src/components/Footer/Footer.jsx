import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const baseUrl = process.env.REACT_APP_IMG_URL;

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* Social Media Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/DronaLearningAcademy' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a href='https://www.instagram.com/dronalearningacademy/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/drona-learning-academy/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://www.youtube.com/@DRONALEARNINGACADEMY' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
        </div>
      </section>

      {/* Footer Content Section */}
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4'>
    <img 
      // src="https://dhruv-kundu14.github.io/drona_learning/Icons/CompanyLogo/Drona.png"
      src = {`${baseUrl}/Icons/CompanyLogo/Drona.png`}
      alt="Company logo" 
      className="me-3"
      width={200} // Set your image width here
      height={200} // Set your image height here
    />
  </h6>
</MDBCol>


            {/* Products Links */}
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            {/* Contact Info */}
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Footer Bottom Section */}
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © Made with ❤️ by Dhruv Kundu 
              {/* <a className='text-reset fw-bold' href='https://www.linkedin.com/in'>
          : MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
  );
}
