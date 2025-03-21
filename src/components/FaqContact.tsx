import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What 3D printing technologies do you offer?",
    answer: "We offer FDM (Fused Deposition Modeling), SLA (Stereolithography), and SLS (Selective Laser Sintering) printing technologies, suitable for different applications and materials.",
  },
  {
    id: "faq-2",
    question: "What materials can I choose from?",
    answer: "We support a wide range of materials including PLA, ABS, PETG, TPU for FDM printing, and various resins for SLA printing. Each material has specific properties suitable for different applications.",
  },
  {
    id: "faq-3",
    question: "How long does 3D printing take?",
    answer: "Print time varies depending on size, complexity, and chosen quality. Small objects might take 2-4 hours, while larger or more complex prints can take 24+ hours. We'll provide an estimate before starting your project.",
  },
  {
    id: "faq-4",
    question: "What file formats do you accept?",
    answer: "We accept .STL, .OBJ, and .3MF files. If you need help with file preparation or conversion, our team can assist you.",
  },
  {
    id: "faq-5",
    question: "Do you offer design services?",
    answer: "Yes, we provide complete 3D design services. Our team can help turn your concept into a printable 3D model, or modify existing designs to meet your requirements.",
  },
  {
    id: "faq-6",
    question: "What is your pricing structure?",
    answer: "Pricing depends on factors like material usage, print time, and complexity. We provide detailed quotes before starting any project and offer bulk discounts for larger orders.",
  },
];

const FaqContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 lg:text-lg">
              Find answers to common questions about our 3D printing services
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full space-y-4"
          >
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border-b border-gray-700 bg-gray-800 rounded-lg"
              >
                <AccordionTrigger className="text-white hover:no-underline hover:text-blue-500 px-4">
                  <div className="font-medium sm:py-1 lg:py-2 lg:text-lg text-left">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 px-4">
                  <div className="lg:text-lg">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Form Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400">Have specific questions? We'd love to hear from you.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContact;