import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
    return (
        <div className="w-10/12 mx-auto max-lgp-6">
            <div className="text-center">
                <p className="text-lg mb-4">
                    Our pricing is tailored based on the specific needs of your project, including factors like project complexity,
                    desired features, required functionality, and the scale of the project.
                    We understand that each business has unique requirements, so we provide custom quotes to ensure you get the
                    most value for your investment.
                </p>
            </div>

            <div className="bg-gray-50 py-16 px-4 mb-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Pricing Breakdown</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Basic Plan */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2 text-green-700">Basic Plan</h3>
                        <p className="text-gray-700 mb-2 text-justify">
                            Perfect for individuals or startups looking for a small digital presence. Originally priced at $250,
                            now available for <span className="text-green-600 font-semibold">$199</span> (Limited Time Offer).
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Up to 5 pages</li>
                            <li>Responsive design</li>
                            <li>Basic animations</li>
                            <li>Contact form integration</li>
                            <li>Delivery in 1 week</li>
                        </ul>
                    </div>

                    {/* Green Plan */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-green-500">
                        <h3 className="text-xl font-bold mb-2 text-green-800">Green Plan</h3>
                        <p className="text-gray-700 mb-2 text-justify">
                            Ideal for growing businesses that require more content and features. Originally priced at $500,
                            now available for <span className="text-green-600 font-semibold">$399</span>.
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Up to 7 pages</li>
                            <li>Custom UI/UX design</li>
                            <li>Responsive & accessible</li>
                            <li>SEO optimization</li>
                            <li>Basic admin dashboard</li>
                            <li>Blog or dynamic content support</li>
                            <li>Delivery in 1.5–2 weeks</li>
                        </ul>
                    </div>

                    {/* Enterprise Projects */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Enterprise Projects</h3>
                        <p className="text-gray-700 mb-2 text-justify">
                            Tailored for large-scale projects including enterprise-level web platforms, complex mobile applications,
                            and SaaS solutions. Prices start at $5000.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Custom integrations</li>
                            <li>Advanced user features</li>
                            <li>Ongoing support & maintenance</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-left my-6">
                <h2 className="text-2xl font-semibold mt-16 mb-8 text-center">Factors That Affect Pricing</h2>
                <p className="text-lg mb-4 max-w-2xl w-full mx-auto">
                    The final cost of your project may vary based on the following factors:
                </p>
                <ul className="list-disc list-inside text-lg mx-auto max-w-2xl w-full text-justify">
                    <li><span className="font-bold">Project Complexity:</span> More complex projects require more time and expertise.</li>
                    <li><span className="font-bold">Features & Functionality:</span> The more features and custom functionalities you need, the higher the price.</li>
                    <li><span className="font-bold">Design Requirements:</span> Custom designs, animations, and user experience enhancements can affect the pricing.</li>
                    <li><span className="font-bold">Development Time:</span> Shorter timelines may increase the cost due to expedited development.</li>
                    <li><span className="font-bold">Technology Stack:</span> The choice of technology can influence both the complexity and the cost of your project.</li>
                </ul>
            </div>

            <div className="text-justify max-w-2xl w-full mx-auto">
                <p className="text-lg mb-6">
                    We understand that every project is unique, which is why we offer tailored pricing based on your specific
                    requirements. Our goal is to ensure you get the best value for your investment.
                </p>
                <p className="text-xl text-center font-bold">
                    For a detailed quote and personalized consultation, please <Link to={`/contact`} className="text-blue-500">contact our team</Link>.
                </p>
            </div>
        </div>
    );
};

export default PricingPage;
