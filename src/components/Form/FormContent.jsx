import { useEffect } from "react";
import { ImageUpload } from "./ImageUpload";
import { Ticket } from "./Ticket";

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
  errors,
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

  useEffect(() => {
    console.log("Errors updated:", errors);
  }, [errors]); // 🔥 This runs every time `errors` changes

  return (
    <form
      className={`${
        currentStep !== 3
          ? "md:bg-[#08252B] md:border md:border-[#0E464F] md:rounded-[10px]"
          : ""
      } w-full md:py-2.5 md:px-5`}
      aria-label={`Event Registration - Step ${currentStep} of 3`}
      role="form"
    >
      {currentStep === 1 && (
        <div className="animate-fadeIn">
          <div
            className="text-center bg-gradient-to-br from-[#07373F] to-[#0A0C11] border rounded-[10px] border-[#0E464F] space-y-2.5 text-white py-3 px-[10%]"
            role="banner"
          >
            <h2 className="road-rage text-4xl">Techember Fest &quot;25</h2>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <div
              className="flex flex-col justify-center md:flex-row md:gap-5"
              role="contentinfo"
            >
              <span aria-label="Location pin">📍 [Event Location]</span>
              <span className="hidden md:inline" aria-hidden="true">
                ||
              </span>
              <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
          <hr className="h-1 border-0 bg-[#07373F] my-5" role="separator" />
          <label
            htmlFor="ticketType"
            className="text-white block text-left mb-2.5"
          >
            Select Ticket Type:
          </label>
          <div
            className="flex flex-col md:flex-row gap-4 p-2 bg-[#052228] border rounded-[10px] border-[#07373F]"
            role="radiogroup"
            aria-required="true"
          >
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
                  aria-label={`${ticket.name} ticket - ${ticket.price}, ${ticket.access}, ${ticket.available} available`}
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
                aria-label="Select number of tickets"
              >
                {[...Array(5).keys()].map((num) => (
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
              type="button"
              className="border jeju rounded-[10px] w-full py-2 border-[#24A0B5] text-[#24A0B5] cursor-pointer"
              aria-label="Cancel ticket selection"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white cursor-pointer"
              aria-label="Proceed to attendee details"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* Step 2: Attendee Details */}
      {currentStep === 2 && (
        <div className="animate-fadeIn">
          <div
            className="w-full h-[350px] p-6 rounded-3xl border border-[#0E464F]"
            role="region"
            aria-label="Profile photo upload section"
          >
            <p className="text-white mb-8 md:mb-10">Upload Profile Photo</p>
            <ImageUpload
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
            {errors.uploadedImage && (
              <p
                className="text-red-500 mt-10 md:mt-5"
                role="alert"
                aria-live="polite"
              >
                {errors.uploadedImage}
              </p>
            )}
          </div>
          <hr className="h-1 border-0 bg-[#07373F] my-5" role="separator" />

          <label htmlFor="name" className="text-white block text-left mb-2.5">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg outline-0"
            required
            aria-required="true"
          />
          {errors.name && (
            <p className="text-red-500 mt-2" role="alert" aria-live="polite">
              {errors.name}
            </p>
          )}

          <label
            htmlFor="email"
            className="text-white block text-left mt-4 mb-2.5"
          >
            Enter your email *
          </label>
          <div className="flex text-white rounded-[8px] mb-4 border border-[#07373F] gap-2 items-center p-2">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0.00012207H2C0.897 0.00012207 0 0.897122 0 2.00012V14.0001C0 15.1031 0.897 16.0001 2 16.0001H18C19.103 16.0001 20 15.1031 20 14.0001V2.00012C20 0.897122 19.103 0.00012207 18 0.00012207ZM18 2.00012V2.51112L10 8.73412L2 2.51212V2.00012H18ZM2 14.0001V5.04412L9.386 10.7891C9.56111 10.9267 9.77733 11.0014 10 11.0014C10.2227 11.0014 10.4389 10.9267 10.614 10.7891L18 5.04412L18.002 14.0001H2Z"
                fill="white"
              />
            </svg>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@avioflagos.io"
              className="w-full outline-none	bg-transparent"
              required
              aria-required="true"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 mt-2" role="alert" aria-live="polite">
              {errors.email}
            </p>
          )}

          <label
            htmlFor="specialRequest"
            className="text-white block text-left mt-4 mb-2.5"
          >
            Special request?
          </label>
          <textarea
            id="specialRequest"
            value={specialRequest}
            maxLength={30}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Textarea"
            className="w-full border border-[#07373F] p-2 bg-transparent text-white rounded-lg outline-0"
            required
            aria-label="Special requests or accommodations"
          />

          <div className="flex flex-col-reverse my-4 md:flex-row gap-2.5">
            <button
              onClick={() => setCurrentStep(1)}
              type="button"
              className="border rounded-[10px] jeju w-full py-2 border-[#24A0B5] text-[#24A0B5] cursor-pointer"
              aria-label="Return to ticket selection"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-[10px] jeju bg-[#24A0B5] w-full py-2 text-white cursor-pointer"
              aria-label="Complete registration and get ticket"
            >
              Get My {selectedTicket} Ticket
            </button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <Ticket
          uploadedImage={uploadedImage}
          name={name}
          email={email}
          selectedTicket={selectedTicket}
          ticketCount={ticketCount}
          specialRequest={specialRequest}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      )}
    </form>
  );
};
