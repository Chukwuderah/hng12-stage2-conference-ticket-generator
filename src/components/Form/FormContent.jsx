import { useEffect } from "react";
import { ImageUpload } from "./ImageUpload";

export const FormContent = ({
  setTitle,
  currentStep,
  setCurrentStep,
  selectedTicket,
  setSelectedTicket,
  ticketCount,
  setTicketCount,
  name,
  setName,
  email,
  setEmail,
  specialRequest,
  setSpecialRequest,
  uploadedImage,
  setUploadedImage,
  handleSubmit,
  userDetails,
  setUserDetails,
}) => {
  const ticketOptions = [
    {
      name: "Free",
      price: "Free",
      access: "Regular Access",
      available: "20/52",
    },
    { name: "VIP", price: "$150", access: "VIP Access", available: "20/52" },
    { name: "VVIP", price: "$150", access: "VVIP Access", available: "20/52" },
  ];

  const handleCancel = () => {
    setTitle("Ticket Selection");
    setSelectedTicket("Free");
    setTicketCount(1);
    setName("");
    setEmail("");
    setSpecialRequest("");
    setUploadedImage(null);
    setCurrentStep(1);
    setUserDetails(null);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setTitle("Ticket Selection");
        break;
      case 2:
        setTitle("Attendee Details");
        break;
      case 3:
        setTitle("Ready");
        break;
      default:
        break;
    }
  }, [currentStep, setTitle]);

  return (
    <form className="md:bg-[#08252B] md:border md:border-[#0E464F] md:rounded-[10px] w-full md:p-2.5">
      {currentStep === 1 && (
        <div className="animate-fadeIn">
          <div className="text-center bg-gradient-to-br from-[#07373F] to-[#0A0C11] border rounded-[10px] border-[#0E464F] space-y-2.5 text-white py-3 px-[10%]">
            <h2 className="road-rage text-4xl">Techember Fest &quot;25</h2>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <div className="flex flex-col justify-center md:flex-row md:justify-evenly">
              <span>📍 [Event Location]</span>
              <span className="hidden md:inline">||</span>
              <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
          <hr className="h-1 border-0 bg-[#07373F] my-5" />
          <label
            htmlFor="ticketType"
            className="text-white block text-left mb-2.5"
          >
            Select Ticket Type:
          </label>
          <div className="flex flex-col md:flex-row gap-4 p-2 bg-[#052228] border rounded-[10px] border-[#07373F]">
            {ticketOptions.map((ticket) => (
              <label
                key={ticket.name}
                className={`cursor-pointer flex flex-col gap-2 border-2 p-4 rounded-lg w-full text-white text-left transition-all duration-300
                                ${
                                  selectedTicket === ticket.name
                                    ? "bg-[#12464E] border-[#197686]"
                                    : "border-[#197686] bg-[transparent] hover:bg-[#2C545B] hover:border-[#197686]"
                                }`}
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
            <label
              htmlFor="ticketCount"
              className="text-white block text-left mb-2.5"
            >
              Number of Tickets
            </label>
            <div className="relative">
              <select
                id="ticketCount"
                value={ticketCount}
                onChange={(e) => setTicketCount(parseInt(e.target.value))}
                className="w-full p-3 pr-10 border border-[#0E464F] rounded-lg bg-[#052228] text-white outline-none focus:border-[#25A2C3] appearance-none"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse my-4 md:flex-row gap-2.5">
            <button
              onClick={handleCancel}
              className="border jeju rounded-[10px] w-full py-2 border-[#24A0B5] text-[#24A0B5]"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Attendee Details */}
      {currentStep === 2 && (
        <div className="animate-fadeIn">
          <div className="w-full h-[350px] p-6 rounded-3xl border border-[#0E464F]">
            <p className="text-white mb-8 md:mb-10">Upload Profile Photo</p>
            <ImageUpload
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
          </div>
          <hr className="h-1 border-0 bg-[#07373F] my-5" />

          <label htmlFor="name" className="text-white block text-left mb-2.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg"
          />

          <label
            htmlFor="email"
            className="text-white block text-left mt-4 mb-2.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg"
          />

          <label
            htmlFor="specialRequest"
            className="text-white block text-left mt-4 mb-2.5"
          >
            Special Request?
          </label>
          <textarea
            id="specialRequest"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg"
          />

          <div className="flex flex-col-reverse my-4 md:flex-row gap-2.5">
            <button
              onClick={() => setCurrentStep(1)}
              className="border rounded-[10px] jeju w-full py-2 border-[#24A0B5] text-[#24A0B5]"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white"
            >
              Get My Free Ticket
            </button>
          </div>
        </div>
      )}

      {(currentStep === 3) & userDetails && (
        <div className="animate-fadeIn">
          <p></p>
        </div>
      )}
    </form>
  );
};
