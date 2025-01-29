'use client'
import React, { useState, useEffect, useRef } from 'react';
import { VisaDetailsModal } from './visa-details-modal';
import Image from 'next/image';
import { formatCountry } from '@/lib/utils';

interface Visa {
  country: string;
  visa_type: string;
  duration: string;
  processing_time: string;
  application_process: string;
  official_link: string;
  family_allowed: string;
  financial_proof_required: string;
  permanent_residency_pathway: string;
}

interface VisaClientWrapperProps {
  visas: Visa[];
}

const VisaClientWrapper: React.FC<VisaClientWrapperProps> = ({ visas }) => {
  const [selectedVisa, setSelectedVisa] = useState<Visa | null>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerPosition = useRef(0);

  useEffect(() => {
    if (headerRef.current) {
      headerPosition.current = headerRef.current.offsetTop;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = headerPosition.current + (headerRef.current?.offsetHeight || 0) + 200;
      setIsHeaderFixed(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className={`w-full z-50 ${isHeaderFixed ? 'fixed top-0 left-1/2 -translate-x-1/2 max-w-[70%] bg-white' : ''}`}>
        <div
          ref={headerRef}
          className={`w-full bg-white transition-all duration-300 ${isHeaderFixed ? 'shadow-md' : ''}`}
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-200">
                  <th className="w-[300px] px-4 py-3 text-left text-sm font-medium text-gray-700">Country</th>
                  <th className="w-[200px] px-4 py-3 text-left text-sm font-medium text-gray-700">Visa Type</th>
                  <th className="w-[200px] px-4 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                  <th className="w-[200px] px-4 py-3 text-left text-sm font-medium text-gray-700">Processing Time</th>
                  <th className="w-[200px] px-4 py-3 text-left text-sm font-medium text-gray-700">Family Allowed</th>
                  <th className="w-[200px] px-4 py-3 text-left text-sm font-medium text-gray-700">PR Pathway</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      {isHeaderFixed && <div className="h-12" />}

      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <tbody className="divide-y divide-gray-200">
            {visas.map((visa, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedVisa(visa)}
              >
                <td className="w-[300px] px-4 py-3 flex items-center gap-x-3">
                  {visa.country}
                  <div className="w-8 h-6 relative">
                    <Image 
                      src={`/${formatCountry(visa.country)}.png`} 
                      fill
                      className="object-cover"
                      alt={`${visa.country} flag`}
                    />
                  </div>
                </td>
                <td className="w-[200px] px-4 py-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {visa.visa_type}
                  </span>
                </td>
                <td className="w-[200px] px-4 py-3">{visa.duration}</td>
                <td className="w-[200px] px-4 py-3">{visa.processing_time}</td>
                <td className="w-[200px] px-4 py-3">{visa.family_allowed}</td>
                <td className="w-[200px] px-4 py-3">{visa.permanent_residency_pathway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <VisaDetailsModal
        visa={selectedVisa}
        isOpen={!!selectedVisa}
        onClose={() => setSelectedVisa(null)}
      />
    </div>
  );
};

export default VisaClientWrapper;