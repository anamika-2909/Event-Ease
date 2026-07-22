import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import SearchSection from '../components/Searchsection'
import Categories from '../components/Categories'
import FeaturedVendors from '../components/FeaturedVendors'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import BecomeVendor from '../components/BecomeVendor'
import axiosInstance from '../service/axiosInstance'


const Home = () => {
  const [categories, setCategories] = useState([]);
const [events, setEvents] = useState([]);
const [services, setServices] = useState([]);

const getCategories = async () => {
  const res = await axiosInstance.get("/category/get-category");
  setCategories(res.data.categories);
};

const getEvents = async () => {
  const res = await axiosInstance.get("/event/get-events");
  setEvents(res.data.events);
};

const getServices = async () => {
  const res = await axiosInstance.get("/service/get-services");
  setServices(res.data.services);
};

useEffect(() => {
  getCategories();
  getEvents();
  getServices();
}, []);
  return (
    <>
      <Hero />
      <SearchSection />
      <Categories categories={categories} />
      <FeaturedVendors events={events} />
      <WhyChooseUs />
      <Services services={services} />
      <Testimonials />
      <Gallery />
      <BecomeVendor />
     
    </>
  )
}

export default Home