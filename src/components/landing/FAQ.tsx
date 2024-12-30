import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'Simply create an account, search for a doctor by specialty or location, select a convenient time slot, and confirm your booking. You will receive an email confirmation immediately.',
  },
  {
    question: 'Are video consultations secure?',
    answer: 'Yes, all our video consultations are end-to-end encrypted and comply with healthcare privacy regulations to ensure your consultation remains private and secure.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time without any penalty. Simply go to your appointments page and select the modify option.',
  },
  {
    question: 'How do I pay for consultations?',
    answer: 'We accept all major credit cards and insurance plans. You can also pay through digital wallets. Payment is processed securely at the time of booking.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-base text-gray-500">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 