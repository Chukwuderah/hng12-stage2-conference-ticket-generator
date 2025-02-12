import { useEffect } from "react";
import { ImageUpload } from "./ImageUpload";

export const FormContent = ({
    setTitle, currentStep, setCurrentStep,
    selectedTicket, setSelectedTicket, ticketCount, setTicketCount,
    name, setName, email, setEmail, specialRequest, setSpecialRequest,
    uploadedImage, setUploadedImage, handleSubmit
}) => {

    const ticketOptions = [
        { name: "Free", price: "Free", access: "Regular Access", available: "20/52" },
        { name: "VIP", price: "$150", access: "VIP Access", available: "20/52" },
        { name: "VVIP", price: "$150", access: "VVIP Access", available: "20/52" },
    ];

    const handleCancel = () => {
        setTitle("Ticket Solutions");
        setSelectedTicket("Free");
        setTicketCount(1);
        setName("");
        setEmail("");
        setSpecialRequest("");
        setUploadedImage(null);
        setCurrentStep(1);
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
    };

    useEffect(() => {
        switch (currentStep) {
            case 1: setTitle("Ticket Selection"); break;
            case 2: setTitle("Attendee Details"); break;
            case 3: setTitle("Ready"); break;
            default: break;
        }
    }, [currentStep, setTitle]);

    return (
        <form className="md:bg-[#08252B] md:border md:border-[#0E464F] md:rounded-[10px] w-full md:p-2.5">
            
            {/* Step 1: Ticket Selection */}
            {currentStep === 1 && (
                <div className="animate-fadeIn">
                    <label htmlFor="ticketType" className="text-white block text-left mb-2.5">Select Ticket Type:</label>
                    <div className="flex flex-col md:flex-row gap-4 p-2 bg-[#052228] border rounded-[10px] border-[#07373F]">
                        {ticketOptions.map((ticket) => (
                            <label key={ticket.name} 
                                className={`cursor-pointer flex flex-col gap-2 border-2 p-4 rounded-lg w-full text-white text-left transition-all duration-300
                                ${selectedTicket === ticket.name ? "bg-[#12464E] border-[#197686]" : "border-[#197686] bg-[transparent] hover:bg-[#2C545B] hover:border-[#197686]"}`}
                                onClick={() => setSelectedTicket(ticket.name)}
                            >
                                <input
                                    type="radio"
                                    name="ticketType"
                                    value={ticket.name}
                                    checked={selectedTicket === ticket.name}
                                    onChange={() => setSelectedTicket(ticket.name)}
                                    className="hidden"
                                />
                                <p className="text-xl font-bold">{ticket.price}</p>
                                <p className="text-sm">{ticket.access}</p>
                                <p className="text-xs text-gray-400">{ticket.available}</p>
                            </label>
                        ))}
                    </div>

                    <div className="mt-5">
                        <label htmlFor="ticketCount" className="text-white block text-left mb-2.5">Number of Tickets</label>
                        <select
                            id="ticketCount"
                            value={ticketCount}
                            onChange={(e) => setTicketCount(parseInt(e.target.value))}
                            className="w-full p-3 border border-[#0E464F] rounded-lg bg-[#052228] text-white outline-none"
                        >
                            {[...Array(10).keys()].map((num) => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col-reverse my-4 md:flex-row gap-2.5">
                        <button onClick={handleCancel} className="border jeju rounded-[10px] w-full py-2 border-[#24A0B5] text-[#24A0B5]">
                            Cancel
                        </button>
                        <button onClick={handleNext} className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white">
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Attendee Details */}
            {currentStep === 2 && (
                <div className="animate-fadeIn">
                    <ImageUpload uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
                    <div className= "w-full border-3 border-b-[#07373F] my-[30px]"></div>
                    <label htmlFor="name" className="text-white block text-left mb-2.5">Enter your name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg" />

                    <label htmlFor="email" className="text-white block text-left mt-4 mb-2.5">Enter your email *</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg" />

                    <label htmlFor="specialRequest" className="text-white block text-left mt-4 mb-2.5">Special Request?</label>
                    <textarea id="specialRequest" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg" />

                    <div className="flex flex-col-reverse my-4 md:flex-row gap-2.5">
                        <button onClick={() => setCurrentStep(1)} className="border rounded-[10px] jeju w-full py-2 border-[#24A0B5] text-[#24A0B5]">
                            Back
                        </button>
                        <button onClick={handleSubmit} className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white">
                            Get My Free Ticket
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};
