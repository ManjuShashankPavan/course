// src/pages/CertificatePage.jsx
import React, { useState } from 'react';
import CertificateGenerator from '../components/CertificateGenerator';

const CertificatePage = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleCardClick = () => {
    setShowCertificate(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {!showCertificate ? (
        <div
          onClick={handleCardClick}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 w-[400px]"
        >
          <img
            src="/logo.png"
            alt="Certificate Icon"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Get Your Certificate</h2>
          <p className="text-gray-600 mt-2">
            Download and share your certificate after completing the course.
          </p>
        </div>
      ) : (
        <CertificateGenerator
          studentName="Manju Shashank"
          courseName="Frontend Development Masterclass"
        />
      )}
    </div>
  );
};

export default CertificatePage;
