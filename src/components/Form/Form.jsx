import { useState } from "react";
import { FormProgress } from "./FormProgress";
import { FormContent } from "./FormContent";

export const TicketForm = () => {
    const [title, setTitle] = useState("Ticket Selection");
    const [currentStep, setCurrentStep] = useState(1);

    // Form state
    const [selectedTicket, setSelectedTicket] = useState("Free");
    const [ticketCount, setTicketCount] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null); // Stores image URL

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            selectedTicket,
            ticketCount,
            name,
            email,
            specialRequest,
            imageAdded: uploadedImage ? true : false,
        });
    };

    return (
        <div className="md:w-[50%] bg-[#08252B] md:bg-[transparent] mx-auto my-10 h-max p-8 border rounded-[10px] border-[#197686]">
            <FormProgress title={title} currentStep={currentStep} totalSteps={3} />
            <FormContent 
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setTitle={setTitle}
                
                // Pass form state down
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
            />
        </div>
    );
};
