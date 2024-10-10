import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import BiddingInfo from './pages/BiddingInfo'
import CheckIn from './pages/CheckIn'
import Bidding from './pages/Bidding'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-red-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/bidding-info" element={<BiddingInfo />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/bidding" element={<Bidding />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App