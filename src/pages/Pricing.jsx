import { useState } from "react";
import { Link } from "react-router-dom";

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-gray-500 mb-6">No contracts, no surprise fees.</p>

        {/* Toggle Button */}
        <div className="inline-flex bg-white shadow-lg rounded-full p-1 mb-10">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full font-semibold ${
              !isYearly ? "bg-green-600 text-white" : "text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full font-semibold ${
              isYearly ? "bg-green-600 text-white" : "text-gray-700"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-3xl font-bold mb-2 line-through text-gray-400">
                {isYearly ? "$2500" : "$250"}
              </p>
              <p className="text-3xl font-bold mb-2">
                {isYearly ? "$1999" : "$199"}{" "}
                <span className="text-sm font-normal text-gray-500">
                  {isYearly ? "/Year" : "/Offer"}
                </span>
              </p>
              <p className="text-gray-500 mb-6">
                Perfect for getting started with a simple website.
              </p>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>✓ 5 Custom Pages</li>
                <li>✓ Responsive Design</li>
                <li>✓ Basic SEO Setup</li>
                <li>✓ Contact Form Integration</li>
                <li>✓ {isYearly ? "3 Months" : "1 Month"} Free Support</li>
              </ul>
            </div>
          </div>

          {/* Green Plan */}
          <div className="bg-green-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-between scale-105">
            <div>
              <div className="w-4 h-4 bg-white rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Green</h3>
              <p className="text-3xl font-bold mb-2 line-through text-purple-200">
                {isYearly ? "$6000" : "$500"}
              </p>
              <p className="text-3xl font-bold mb-2">
                {isYearly ? "$4499" : "$399"}{" "}
                <span className="text-sm font-normal text-purple-200">
                  {isYearly ? "/Year" : "/Offer"}
                </span>
              </p>
              <p className="text-purple-100 mb-6">
                Our most popular plan with enhanced features.
              </p>
              <ul className="space-y-2 text-left">
                <li>✓ 7 Custom Pages</li>
                <li>✓ Responsive Design</li>
                <li>✓ Advanced SEO Setup</li>
                <li>✓ Blog Integration</li>
                <li>✓ Contact & Booking Form</li>
                <li>
                  ✓ {isYearly ? "6 Months Premium Support" : "3 Months Premium Support"}
                </li>
                <li>✓ Performance Optimization</li>
                {isYearly && <li>✓ Free Hosting (1 Year)</li>}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <div className="w-4 h-4 bg-green-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-2">
                {isYearly ? "$1500" : "$159"}{" "}
                <span className="text-sm font-normal text-gray-500">
                  {isYearly ? "/Year" : "/Month"}
                </span>
              </p>
              <p className="text-gray-500 mb-6">
                For larger business or those seeking advanced services.
              </p>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>✓ Unlimited sending</li>
                <li>✓ Email marketing</li>
                <li>✓ Send newsletters</li>
                <li>✓ Up to 50 users</li>
                {isYearly && <li>✓ Dedicated Account Manager</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
