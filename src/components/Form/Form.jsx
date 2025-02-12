import { useState, useEffect } from "react";
import { FormProgress } from "./FormProgress";
import { FormContent } from "./FormContent";

export const TicketForm = () => {
  const [title, setTitle] = useState("Ticket Selection");
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetails, setUserDetails] = useState(null);

  const [selectedTicket, setSelectedTicket] = useState("Free");
  const [ticketCount, setTicketCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  // Load saved user details on component mount
  useEffect(() => {
    const savedUserDetails = localStorage.getItem("userDetails");
    if (savedUserDetails) {
      const parsedDetails = JSON.parse(savedUserDetails);
      setUserDetails(parsedDetails);
      setSelectedTicket(parsedDetails.selectedTicket || "Free");
      setTicketCount(parsedDetails.ticketCount || 1);
      setName(parsedDetails.name || "");
      setEmail(parsedDetails.email || "");
      setSpecialRequest(parsedDetails.specialRequest || "");
      setUploadedImage(parsedDetails.uploadedImage || null);
    }
  }, []);

  useEffect(() => {
    const details = {
      selectedTicket,
      ticketCount,
      name,
      email,
      specialRequest,
      uploadedImage,
      lastUpdated: new Date().toISOString(),
    };
    setUserDetails(details);
    localStorage.setItem("userDetails", JSON.stringify(details));
  }, [selectedTicket, ticketCount, name, email, specialRequest, uploadedImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedTicket ||
      !ticketCount ||
      !name.trim() ||
      !email.trim() ||
      !uploadedImage
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log({
      selectedTicket,
      ticketCount,
      name,
      email,
      specialRequest,
      uploadedImage,
    });

    setUserDetails(userDetails);
    setCurrentStep(3);
  };

  return (
    <div className="w-[95%] md:w-[50%] bg-[#08252B] md:bg-[transparent] mx-auto my-10 h-max p-8 border rounded-[10px] border-[#197686]">
      <FormProgress title={title} currentStep={currentStep} totalSteps={3} />
      <FormContent
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setTitle={setTitle}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
        ticketCount={ticketCount}
        setTicketCount={setTicketCount}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        specialRequest={specialRequest}
        setSpecialRequest={setSpecialRequest}
        uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        handleSubmit={handleSubmit}
        userDetails={userDetails}
      />
    </div>
  );
};
