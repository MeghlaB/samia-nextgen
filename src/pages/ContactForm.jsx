
import { Bounce } from "react-awesome-reveal";
import Contact from "../components/Hooks/Contact";

export default ({ details = [] }) => {
    return <>
    <Contact/>
        <Bounce className="pt-4">
            <form method="GET" onSubmit={(e) => {
                e.preventDefault();
                const subject = document.querySelector("input.contactSubject");
                const message = document.querySelector("textarea.contactMessage");
                const reason = document.querySelector("select.contactSelect");
                "personalDetails" in details && window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(details.personalDetails.email)}&su=${encodeURIComponent(reason.value+" - "+subject.value)}&body=${encodeURIComponent(message.value)}`)
                subject.value = "";
                message.value = "";

            }} className="flex flex-col gap-6 max-w-[450px] mx-auto">
                {/* subject */}
                <div>
                    <label className="block text-lg font-semibold mb-2">
                        <span>Subject</span>
                        <input
                            type="text"
                            required
                            placeholder="Mail subject"
                            className="contactSubject w-full  border border-primary bg-inherit  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary "
                        />
                    </label>
                </div>
                {/* select */}
                <div>
                    <label className="block text-lg font-semibold mb-2">
                        <span>Reason</span>
                        <select
                            placeholder="Mail subject"
                            className="contactSelect w-full  border border-primary bg-inherit  rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary "
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Support">Support</option>
                            <option value="Pricing">Pricing</option>
                        </select>
                    </label>
                </div>
                {/* mesage */}
                <div>
                    <label className="block text-lg font-semibold mb-2">
                        <span>Message</span>
                        <textarea
                            rows="6"
                            required
                            placeholder="Enter your message..."
                            className="contactMessage w-full  border border-primary  bg-inherit rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary "
                        ></textarea>
                    </label>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full text-white cursor-pointer bg-green-700 text-lg font-semibold py-3 rounded-lg active:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)] hover:shadow-[0_0_10px_theme(colors.primary.DEFAULT),0_0_15px_theme(colors.primary.DEFAULT)] transition-all"
                >
                    Send Mail with Gmail
                </button>
            </form>
        </Bounce>
    </>
}