import React from "react";
import Logo from "../assets/Images/jsp.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="new_footer_area bg_color pt-12">
      <div className="new_footer_top">
        <div className="container" style={{ zIndex: 2 }}>
          <div className="row flex justify-between flex-wrap mx-10 max-sm:mx-4">
            {/* Logo and Social Media */}
            <div className="col-lg-3 col-md-6">
              <Link
                className="navbar-brand fw-bold"
                style={{ color: "#214fc6" }}
                to="/"
              >
                <img
                  src={Logo}
                  alt="Company Logo"
                  className="img-fluid"
                  style={{ height: "5rem" }}
                />
              </Link>
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft mt-5"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Social Media
                </h3>
                <div className="f_social_icon">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100064020996167"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <img
                      className=""
                      width="38"
                      height="38"
                      src="https://img.icons8.com/3d-fluency/188/facebook-circled.png"
                      alt="Facebook"
                    />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/company/jps-engineers/posts/?feedView=all"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <img
                      className=""
                      width="38"
                      height="38"
                      src="https://img.icons8.com/3d-fluency/188/linkedin.png"
                      alt="LinkedIn"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Quick Links</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/plasticpart">Plastic Part</Link>
                  </li>
                  <li>
                    <Link to="/metalpart">Metal Part</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Help */}
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li className="nav-item flex mb-2">
                    <img
                      width="34"
                      height="34"
                      className=" object-contain"
                      src="https://img.icons8.com/3d-fluency/94/phone-disconnected.png"
                      alt="Phone"
                    />
                    <Link
                      className="ml-2"
                      to="tel:9311910072"
                      aria-label="Call Us"
                    >
                      9311910072
                    </Link>
                  </li>
                  <li className="nav-item flex mb-2">
                    <img
                      width="34"
                      height="34"
                      className=" object-contain"
                      src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                      alt="WhatsApp"
                    />
                    <Link
                      className="ml-2"
                      to="whatsapp://send?text=Hello World!&phone=+919212004429"
                      aria-label="WhatsApp Us"
                    >
                      9212004429
                    </Link>
                  </li>
                  <li className="nav-item flex mb-2">
                    <img
                      width="34"
                      height="34"
                      className=" object-contain"
                      src="https://img.icons8.com/3d-fluency/94/gmail.png"
                      alt="Email"
                    />
                    <Link
                      className="ml-2"
                      to="mailto:pardeep@jpsengineer.com"
                      aria-label="Email Us"
                    >
                      pardeep@jpsengineer.com
                    </Link>
                  </li>
                  <li className="nav-item flex mb-2">
                    <img
                      width="34"
                      height="34"
                      className=" object-contain"
                      src="https://img.icons8.com/3d-fluency/94/location.png"
                      alt="Location"
                    />
                    <Link className="ml-2" to="/" aria-label="Our Location">
                      4/47, AJANTA TEXTILE COMPOUND UPSIDC
                      <br />
                      SITE-2, MOHAN NAGAR GHAZIABAD U.P. 201007
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 min-w-40 mb-20">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Get in Touch
                </h3>
                <p>
                  We're always on the lookout to work with new clients. If
                  you're interested in working with us!
                </p>
                <form
                  className="flex justify-start"
                  // action="#"
                  // method="post"
                  // noValidate="true"
                >
                  <input
                    type="email"
                    className="bg-gray-200 rounded px-4"
                    placeholder="Email"
                    required
                  />
                  <button
                    className="px-4 py-2 ml-4 bg-[#214fc6] cursor-pointer rounded text-white"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="line linefoot"></div>
          <div className="line linefoot2"></div>
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
          <div className="footer_bg_three"></div>
        </div>
      </div>
      <div className="footer_bottom max-sm:px-2">
        <div className="container">
          <div className="flex justify-around items-center flex-wrap">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400 ">
                © <span className="text-black">JPS Engineers</span> Inc. 2024
                All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made by ❤<i className="icon_heart"></i>{" "}
                <Link
                  to="https://namratauniversal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className="text-black underline">
                    Namrata Universal
                  </strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
