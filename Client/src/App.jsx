import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "@assets/bootstrap-datetimepicker.min.css";
import "@assets/bootstrap.min.css";
import "@assets/feather.css";
import "@assets/owl.theme.default.min.css";
import "@assets/slick.css";
import "@assets/style.css";
// js
import "@assets_js/jquery-3.6.3.min.js";
import "@assets_js/bootstrap.bundle.min.js"
import "@assets_js/backToTop.js"
import "@assets_js/feather.min.js"
import "@assets_js/owl.carousel.min.js"
import "@assets_js/script.js"

import { Home } from '@components/Home'
import { Error404 } from '@components/Pages/404Error';
import { Contact } from '@components/Pages/Contact';
import { About } from '@components/Pages/About';
import { TwoWheeler } from '@components/Pages/TwoWheeler';
import { FourDetails, ThreeDetails,TwoDetails} from '@Vehicle';
import Dashboard from './Admin/Pages/Dashboard';
import Profile from './Admin/Pages/Profile';
import ABrand from '@Admin/Pages/ABrand';
import ADealer from '@Admin/Pages/ADealer';
import AEVSpares from '@Admin/Pages/AEVSpares';
import AEVStartups from '@Admin/Pages/AEVStartups';
import AFourWheeler from '@Admin/Pages/AFourWheeler';
import ANews from '@Admin/Pages/ANews';
import AThreeWheeler from '@Admin/Pages/AThreeWheeler';
import ATwoWheeler from '@Admin/Pages/ATwoWheeler';
import { Brand_Form } from '@Admin/Pages/ABrand/Brand_Form';
import { Dealer_Form } from '@Admin/Pages/ADealer/Dealer_Form';
import { EVSpares_Form } from './Admin/Pages/AEVSpares/EVSpares_Form';





function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/brand" element={<ABrand />} />
          <Route path="/dashboard/dealer" element={<ADealer />} />
          <Route path="/dashboard/evspares" element={<AEVSpares />} />
          <Route path="/dashboard/evstartups" element={<AEVStartups />} />
          <Route path="/dashboard/fourwheeler" element={<AFourWheeler />} />
          <Route path="/dashboard/news" element={<ANews />} />
          <Route path="/dashboard/threewheeler" element={<AThreeWheeler />} />
          <Route path="/dashboard/twowheeler" element={<ATwoWheeler />} />

          {/* form----------- */}
          <Route path="/dashboard/brand_form" element={<Brand_Form/>} />
          <Route path="/dashboard/dealer_form" element={<Dealer_Form />} />
          <Route path="/dashboard/evspares_form" element={<EVSpares_Form />} />

          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/twodetails" element={<TwoDetails />} />
          <Route path="/threedetails" element={<ThreeDetails />} />
          <Route path="/fourdetails" element={<FourDetails />} />
          <Route path="/twowheeler" element={<TwoWheeler />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
