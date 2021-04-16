import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Footer from './global-components/footer';

const Contact = () => {
	return <div>
		<Navbar />
		<PageHeader headertitle="Contact" />
		<div className="contact-area pd-top-100 pd-bottom-65">
			<div className="container">
				<div className="row">

					<div className="col-lg-6">
						<form className="contact-form-wrap contact-form-bg">
							<h4>Contact Now</h4>
							<div className="rld-single-input">
								<input type="text" placeholder="Name" />
							</div>
							<div className="rld-single-input">
								<input type="text" placeholder="Phone" />
							</div>
							<div className="rld-single-input">
								<input type="text" placeholder="Phone" />
							</div>
							<div className="rld-single-input">
								<textarea rows={10} placeholder="Message" defaultValue={""} />
							</div>
							<div className="btn-wrap text-center">
								<button className="btn btn-yellow">Submit</button>
							</div>
						</form>
					</div>

					<div className="col-lg-6">
						
							<div className="single-contact-info">
								<p><i className="fa fa-phone" />Appelez-nous:</p>
								<h5>+33 618959713</h5>
							</div>
						


							<div className="single-contact-info">
								<p><i className="fa fa-envelope" />Des question ?</p>
								<h5>cindyricci83400@icloud.com</h5>
							</div>
						
						
							<div className="single-contact-info">
								<p><i className="fa fa-phone" />Addresse</p>
								<h5>309 chemin du moulin premier</h5>
								<h5>83400 Hyères</h5>
							</div>
						
					</div>
				</div>

			</div>
		</div>
		<Footer />
	</div>
}

export default Contact

