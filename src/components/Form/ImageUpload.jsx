import React, { useState } from "react";

export const ImageUpload = ({uploadedImage, setUploadedImage}) => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result); // Convert image to base64 URL for preview
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full bg-[#031C23] p-4 rounded-lg border border-[#0E464F]">
            
            <div className="relative flex justify-center items-center w-full h-[200px] border border-[#25A2C3] rounded-lg overflow-hidden bg-[#05252C] cursor-pointer group">
                {uploadedImage ? (
                    <>
                        <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                        {/* Hover Effect for Re-upload */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <label htmlFor="fileUpload" className="text-white text-center p-3 border border-white rounded-lg cursor-pointer">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.264 14.8158C24.6813 10.2265 20.7507 6.6665 16.0053 6.6665C12.3307 6.6665 9.13866 8.8145 7.68133 12.1998C4.81733 13.0558 2.672 15.7598 2.672 18.6665C2.672 22.3425 5.66266 25.3332 9.33866 25.3332H10.672V22.6665H9.33866C7.13333 22.6665 5.33866 20.8718 5.33866 18.6665C5.33866 16.7945 6.93733 14.9905 8.90266 14.6452L9.67733 14.5092L9.93333 13.7652C10.8707 11.0305 13.1973 9.33317 16.0053 9.33317C19.6813 9.33317 22.672 12.3238 22.672 15.9998V17.3332H24.0053C25.476 17.3332 26.672 18.5292 26.672 19.9998C26.672 21.4705 25.476 22.6665 24.0053 22.6665H21.3387V25.3332H24.0053C26.9467 25.3332 29.3387 22.9412 29.3387 19.9998C29.3371 18.8045 28.9348 17.6443 28.1962 16.7045C27.4575 15.7647 26.4251 15.0998 25.264 14.8158Z" fill="#FAFAFA"/>
<path d="M17.3387 18.6665V13.3332H14.672V18.6665H10.672L16.0053 25.3332L21.3387 18.6665H17.3387Z" fill="#FAFAFA"/>
</svg>

                                Drag & Drop or Click to Upload
                            </label>
                        </div>
                    </>
                ) : (
                    // Default Upload Box
                    <label htmlFor="fileUpload" className="flex flex-col items-center justify-center w-full h-full text-white cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="block text-center" xmlns="http://www.w3.org/2000/svg">
<path d="M25.264 14.8158C24.6813 10.2265 20.7507 6.6665 16.0053 6.6665C12.3307 6.6665 9.13866 8.8145 7.68133 12.1998C4.81733 13.0558 2.672 15.7598 2.672 18.6665C2.672 22.3425 5.66266 25.3332 9.33866 25.3332H10.672V22.6665H9.33866C7.13333 22.6665 5.33866 20.8718 5.33866 18.6665C5.33866 16.7945 6.93733 14.9905 8.90266 14.6452L9.67733 14.5092L9.93333 13.7652C10.8707 11.0305 13.1973 9.33317 16.0053 9.33317C19.6813 9.33317 22.672 12.3238 22.672 15.9998V17.3332H24.0053C25.476 17.3332 26.672 18.5292 26.672 19.9998C26.672 21.4705 25.476 22.6665 24.0053 22.6665H21.3387V25.3332H24.0053C26.9467 25.3332 29.3387 22.9412 29.3387 19.9998C29.3371 18.8045 28.9348 17.6443 28.1962 16.7045C27.4575 15.7647 26.4251 15.0998 25.264 14.8158Z" fill="#FAFAFA"/>
<path d="M17.3387 18.6665V13.3332H14.672V18.6665H10.672L16.0053 25.3332L21.3387 18.6665H17.3387Z" fill="#FAFAFA"/>
</svg>

                        <span className="mt-2">Drag & drop or click to upload</span>
                    </label>
                )}
                {/* Hidden File Input */}
                <input id="fileUpload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </div>
        </div>
    );
};
