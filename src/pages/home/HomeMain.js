import React from 'react';
import Banner from "./Banner"
import ServicesOne from './ServicesOne';
import SlidingText from './SlidingText';
// import EventOne from './EventOne';
import BuyTicket from './BuyTicket';
import TeamOne from './TeamOne';
import EventDirection from './EventDirection';
import GalleryOne from './GalleryOne';
import ScheduleOne from './ScheduleOne';
import BrandOne from './BrandOne';
import BlogOne from './BlogOne';
import CTAOne from './CTAOne';
import EventOne from '../../components/Common/EventOne'; // Import the EventOne component
import eventImg from '../../assets/images/resources/event-one-img-1.jpg';
import { Link } from 'react-router-dom';

const points = [
    {
      icon: "icon-air-horn",
      heading: "Artists & bands",
      description:
        "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
    },
    {
      icon: "icon-party-blower",
      heading: "Audience Event Planner",
      description:
        "Events bring people together for a shared experience celebration. From weddings and birthdays to conferences.",
    },
  ];


const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			{/* <BuyTicket /> */}
			{/* <ServicesOne /> */}
			{/* <SlidingText /> */}
			{/* <EventOne /> */}
			{/* <TeamOne /> */}
			{/* <EventDirection /> */}
			{/* <GalleryOne /> */}
			<ScheduleOne />
			
        {/* <EventOne
            tagline="About Our Event"
            title="Uniting Creating of the Memories"
            buttonText="Join The Event"
            points={points}
            imageUrl={eventImg}
          /> */}
			{/* <BrandOne /> */}
			{/* <BlogOne /> */}
			
				<section className="event-one event-three" id="about-us">
				  <div className="container">
					<div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
					  <div className="event-one__top">
						<div className="section-title text-left">
						  <div className="section-title__tagline-box">
							<span className="section-title__tagline">About Us</span>
						  </div>
						  <h2 className="section-title__title">Let's introduce browntown website</h2>
						</div>
					  </div>
					  <ul className="list-unstyled event-one__points">
						{points.map((point, index) => (
						  <li key={index}>
							<div className="icon">
							  <span className={point.icon}></span>
							</div>
							<div className="content">
							  <h4>
								<Link to="/event">
								  {point.heading}
								</Link>
							  </h4>
							  <p>{point.description}</p>
							</div>
						  </li>
						))}
					  </ul>
					  <div className="event-one__img-box">
						<img src={eventImg} alt="Event" />
					  </div>
					</div>
				  </div>
				</section>
          <section className="contact-one" id="contact-us">
            <div className="container">
              <div className="contact-one__inner">
                <h3 className="contact-one__title">Write here below?</h3>
                <p className="contact-one__text">
                  For your car we will do everything advice, repairs and they
                  can maintenance. We are the some preferred choice
                </p>
                <form
                  className="contact-form-validated contact-one__form"
                  action="assets/inc/sendemail.php"
                  method="post"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-one__input-box">
                        <div className="select-box">
                          <select className="selectmenu wide" defaultValue="Choose Option">
                            <option value="Choose Option">Choose Option</option>
                            <option value="Type Of Service 01">Type Of Service 01</option>
                            <option value="Type Of Service 02">Type Of Service 02</option>
                            <option value="Type Of Service 03">Type Of Service 03</option>
                            <option value="Type Of Service 04">Type Of Service 04</option>
                            <option value="Type Of Service 05">Type Of Service 05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-one__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-one__btn"
                        >
                          Submit Now<span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </section>
			<CTAOne />
		</React.Fragment>
	);
}

export default HomeMain;