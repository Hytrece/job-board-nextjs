'use client'

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

interface VisaDetailsModalProps {
  visa: Visa | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VisaDetailsModal: React.FC<VisaDetailsModalProps> = ({ visa, isOpen, onClose }) => {
  if (!visa) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            {visa.country} - {visa.visa_type}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="space-y-4">
            <section>
              <h3 className="font-semibold text-lg mb-2">Basic Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Visa Type:</span> {visa.visa_type}</p>
                <p><span className="font-medium">Processing Time:</span> {visa.processing_time}</p>
                <p><span className="font-medium">Duration:</span> {visa.duration}</p>
                <p><span className="font-medium">Family Allowed:</span> {visa.family_allowed}</p>
              </div>
            </section>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">Application Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Application Process:</span> {visa.application_process}</p>
                <p><span className="font-medium">Financial Proof Required:</span> {visa.financial_proof_required}</p>
                <p><span className="font-medium">Official Link:</span> <a href={visa.official_link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{visa.official_link}</a></p>
              </div>
            </section>
          </div>
          
          <div className="space-y-4">
            <section>
              <h3 className="font-semibold text-lg mb-2">Permanent Residency</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Pathway to PR:</span> {visa.permanent_residency_pathway}</p>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};