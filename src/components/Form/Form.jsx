import { useState, useEffect } from "react";
import { FormProgress } from "./FormProgress";
import { FormContent } from "./FormContent";

export const TicketForm = () => {
  const [title, setTitle] = useState(() => {
    return localStorage.getItem("formTitle") || "Ticket Selection";
  });

  const [currentStep, setCurrentStep] = useState(() => {
    return parseInt(localStorage.getItem("currentStep")) || 1;
  });

  const [selectedTicket, setSelectedTicket] = useState(() => {
    return localStorage.getItem("selectedTicket") || "Free";
  });

  const [ticketCount, setTicketCount] = useState(() => {
    return parseInt(localStorage.getItem("ticketCount")) || 1;
  });

  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("email") || "";
  });

  const [specialRequest, setSpecialRequest] = useState(() => {
    return localStorage.getItem("specialRequest") || "";
  });

  const [uploadedImage, setUploadedImage] = useState(() => {
    return localStorage.getItem("uploadedImage") || null;
  });

  useEffect(() => {
    localStorage.setItem("formTitle", title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem("selectedTicket", selectedTicket);
  }, [selectedTicket]);

  useEffect(() => {
    localStorage.setItem("ticketCount", ticketCount.toString());
  }, [ticketCount]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("specialRequest", specialRequest);
  }, [specialRequest]);

  useEffect(() => {
    if (uploadedImage) {
      localStorage.setItem("uploadedImage", uploadedImage);
    }
  }, [uploadedImage]);

  const clearFormData = () => {
    localStorage.removeItem("formTitle");
    localStorage.removeItem("currentStep");
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("ticketCount");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("specialRequest");
    localStorage.removeItem("uploadedImage");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !selectedTicket ||
      !ticketCount ||
      !name.trim() ||
      !email.trim() ||
      !uploadedImage
    ) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setCurrentStep(3);

    const ticketData = {
      selectedTicket,
      ticketCount,
      name,
      email,
      specialRequest,
      uploadedImage,
      bookingDate: new Date().toISOString(),
      ticketId: `TCK - ${Math.random().toString(36).substr(2, 9)}`,
    };

    localStorage.setItem("completedTicket", JSON.stringify(ticketData));
  };

  const handleCancel = () => {
    clearFormData();

    setTitle("Ticket Selection");
    setCurrentStep(1);
    setSelectedTicket("Free");
    setTicketCount(1);
    setName("");
    setEmail("");
    setSpecialRequest("");
    setUploadedImage(null);
  };

  return (
    <div className="md:w-[50%] bg-[#08252B] md:bg-[transparent] mx-auto my-10 h-max p-8 border rounded-[10px] border-[#197686]">
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
        handleCancel={handleCancel}
      />
    </div>
  );
};
