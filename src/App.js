import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
         <Route path="contact-us" element={<Contact />} />
        {/* <Route path="home-2" element={<HomeTwo />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="one-page-style-one" element={<OnePageHome />} />
        <Route path="one-page-style-two" element={<OnePageHomeTwo />} />
        <Route path="one-page-style-three" element={<OnepageHomeThree />} />
        <Route path="team" element={<Team />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery-details" element={<GalleryDetails />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NoPage />} />
        <Route path="services" element={<Services />} />
        <Route path="event-prodigy" element={<EventProdigy />} />
        <Route path="stellar-events-co" element={<StellarEvents />} />
        <Route path="elite-event-management" element={<EliteEventManagement />} />
        <Route path="infinite-occasions" element={<InfiniteOccasions />} />
        <Route path="dream-event-planners" element={<DreamEvent />} />
         <Route path="event-details" element={<EventDetails />} />
         <Route path="event" element={<Event />} />
         <Route path="blog" element={<Blog />} />
         <Route path="blog-list" element={<Bloglist />} />
         <Route path="blog-details" element={<BlogDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
