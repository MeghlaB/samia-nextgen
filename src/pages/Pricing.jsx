import { Link } from "react-router-dom";

export default function PricingTable() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
          <p className="text-gray-500 mb-6">No contracts, no surprise fees.</p>
          <div className="inline-flex bg-white shadow-lg rounded-full p-1 mb-10">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold">Monthly</button>
            <button className="px-6 py-2 text-gray-700">Yearly</button>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
              <div>
                <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <p className="text-3xl font-bold mb-2 line-through text-gray-400">$250</p>
                <p className="text-3xl font-bold mb-2">$199 <span className="text-sm font-normal text-gray-500">/Offer</span></p>
                <p className="text-gray-500 mb-6">Perfect for getting started with a simple website.</p>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>✓ 5 Custom Pages</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Basic SEO Setup</li>
                  <li>✓ Contact Form Integration</li>
                  <li>✓ 1 Month Free Support</li>
                </ul>
              </div>
             {/* <Link to={'/application'}>
             <button className="mt-6 w-full bg-white border border-green-600 text-green-600 font-semibold py-2 rounded-lg hover:bg-green-50">
              Choose Plan
              </button>
             </Link> */}
            </div>
  
            {/* Green Plan */}
            <div className="bg-green-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-between scale-105">
              <div>
                <div className="w-4 h-4 bg-white rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Green</h3>
                <p className="text-3xl font-bold mb-2 line-through text-purple-200">$500</p>
                <p className="text-3xl font-bold mb-2">$399 <span className="text-sm font-normal text-purple-200">/Offer</span></p>
                <p className="text-purple-100 mb-6">Our most popular plan with enhanced features.</p>
                <ul className="space-y-2 text-left">
                  <li>✓ 7 Custom Pages</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Advanced SEO Setup</li>
                  <li>✓ Blog Integration</li>
                  <li>✓ Contact & Booking Form</li>
                  <li>✓ 3 Months Premium Support</li>
                  <li>✓ Performance Optimization</li>
                </ul>
              </div>
              {/* <Link to={'/application'}>
              <button className="mt-6 w-full bg-white text-green-600 font-semibold py-2 rounded-lg hover:bg-green-100">Choose Plan</button>
              </Link> */}
            </div>
  
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
              <div>
                <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-2">$159 <span className="text-sm font-normal text-gray-500">/Month</span></p>
                <p className="text-gray-500 mb-6">For larger business or those seeking advanced services.</p>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>✓ Unlimited sending</li>
                  <li>✓ Email marketing</li>
                  <li>✓ Send newsletters</li>
                  <li>✓ Up to 50 users</li>
                </ul>
              </div>
        {/* <Link to={''}>
        <button className="mt-6 w-full bg-white border border-green-600 text-green-600 font-semibold py-2 rounded-lg hover:bg-green-50">Choose Plan</button>
        </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }