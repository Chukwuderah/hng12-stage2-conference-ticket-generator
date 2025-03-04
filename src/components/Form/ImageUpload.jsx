import React, { useState } from "react";

// Get Cloudinary credentials
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const ImageUpload = ({ uploadedImage, setUploadedImage }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Handle File Upload via Click or Drag-and-Drop
  const handleImageUpload = async (file) => {
    if (!file) return;

    setIsUploading(true);
    try {
      // Create FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      // Upload to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setUploadedImage(data.secure_url); // Set uploaded image URL
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
      setIsDragging(false);
    }
  };

  // Handle File Selection from Input
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  // Handle Drag Over Event
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  // Handle Drag Leave Event
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Handle Drop Event
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  return (
    <div
      className={`relative w-[240px] mx-auto md:w-full h-[200px] px-9 rounded-3xl md:rounded-lg border border-[#0E464F] 
      ${isDragging ? "bg-[#07373F] border-[#25A2C3]" : "bg-[#031C23]"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="absolute left-[50%] h-[120%] flex justify-center items-center w-[240px] max-w-[240px] border-[3px] border-[#25A2C3] rounded-3xl overflow-hidden bg-[#0E464F] cursor-pointer group -translate-x-[50%] md:translate-y-[-9%]">
        {isUploading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : uploadedImage ? (
          <>
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0000004D] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <label
                htmlFor="fileUpload"
                className="h-full text-white text-center p-3 cursor-pointer flex flex-col items-center justify-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.264 14.8158C24.6813 10.2265 20.7507 6.6665 16.0053 6.6665C12.3307 6.6665 9.13866 8.8145 7.68133 12.1998C4.81733 13.0558 2.672 15.7598 2.672 18.6665C2.672 22.3425 5.66266 25.3332 9.33866 25.3332H10.672V22.6665H9.33866C7.13333 22.6665 5.33866 20.8718 5.33866 18.6665C5.33866 16.7945 6.93733 14.9905 8.90266 14.6452L9.67733 14.5092L9.93333 13.7652C10.8707 11.0305 13.1973 9.33317 16.0053 9.33317C19.6813 9.33317 22.672 12.3238 22.672 15.9998V17.3332H24.0053C25.476 17.3332 26.672 18.5292 26.672 19.9998C26.672 21.4705 25.476 22.6665 24.0053 22.6665H21.3387V25.3332H24.0053C26.9467 25.3332 29.3387 22.9412 29.3387 19.9998C29.3371 18.8045 28.9348 17.6443 28.1962 16.7045C27.4575 15.7647 26.4251 15.0998 25.264 14.8158Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M17.3387 18.6665V13.3332H14.672V18.6665H10.672L16.0053 25.3332L21.3387 18.6665H17.3387Z"
                    fill="#FAFAFA"
                  />
                </svg>
                Drag & Drop or Click to Upload
              </label>
            </div>
          </>
        ) : (
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-full text-white cursor-pointer"
          >
            <span className="mt-2 text-center">
              {isDragging
                ? "Drop the file here!"
                : "Drag & drop or click to upload"}
            </span>
          </label>
        )}
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
    </div>
  );
};
