import React, { Component } from 'react';
import './MainContact.css';
import axios from "axios";
import { FaMapMarkerAlt,FaPhoneAlt,FaTelegramPlane,FaGlobeAsia } from "react-icons/fa";

const baseURL = "https://buskarao.thebloodraw.com/api/contact";

function ContactForm() {
		const [post, setPost] = React.useState(null);
		React.useEffect(() => {
			axios.get(baseURL).then((response) => {
			  setPost(response.data);
			});
		  }, []);
		
		  if (!post) return null;
        return (
                <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-12 text-center mb-5">
					<h1 className="heading-section"><b>CONTACT US</b></h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row mb-5">
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-map-marker"><FaMapMarkerAlt/></span>
			        		</div>
			        		<div className="text">
				            <p><span>Address:</span> {post.address}</p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-phone"><FaPhoneAlt/></span>
			        		</div>
			        		<div className="text">
				            <p><span>Phone:</span> <a href="tel://1234567920">{post.contact_number}</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-paper-plane"><FaTelegramPlane/></span>
			        		</div>
			        		<div className="text">
				            <p><span>Email:</span> <a href="mailto:info@yoursite.com">{post.email_address}</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-globe"><FaGlobeAsia/></span>
			        		</div>
			        		<div className="text">
				            <p><span>Website</span> <a href="#">BookKaroo.com</a></p>
				          </div>
			          </div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-md-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Contact Us</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label contact_text" htmlFor="name">Full Name</label>
													<input type="text" className="form-control-contact" name="name" id="name" placeholder="Name" />
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" htmlFor="email">Email Address</label>
													<input type="email" className="form-control-contact" name="email" id="email" placeholder="Email" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="subject">Subject</label>
													<input type="text" className="form-control-contact" name="subject" id="subject" placeholder="Subject" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="#">Message</label>
													<textarea name="message" className="form-control-contact" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary" />
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
							<div style={{width:'100%'}}><iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={post.embed_code}><a href="http://www.gps.ie/">gps devices</a></iframe></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        );
    }


export default ContactForm;