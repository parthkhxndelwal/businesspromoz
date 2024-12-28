interface ServiceItem {
    title: string;
    items: string[];
}

interface ServiceCardProps {
    title: string;
    services: string[];
}

// ServicesSection.tsx
import React from 'react';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, services }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-2xl border-2 border-gray-100 dark:border-gray-700">
  <h3 className="text-cyan-600 dark:text-cyan-400 text-xl font-bold mb-4">{title}</h3>
  <ul className="space-y-2">
    {services.map((service, index) => (
      <li key={index} className="text-gray-700 dark:text-gray-300">
        {service}
      </li>
    ))}
  </ul>
</div>

    );
};

const ServicesSection: React.FC = () => {
    const services: ServiceItem[] = [
        {
            title: "Content Writing",
            items: [
                "Normal Article Writing",
                "SEO based Article Writing",
                "Web-Page Content Writing",
                "Blog Writing",
                "Ghost Writing",
                "Copy Editing",
                "Copy Writing",
                "Book writing",
                "Product Description"
            ]
        },
        {
            title: "Online Reputation Management",
            items: [
                "Grow the online visibility of your product",
                "Responding to comments",
                "Checking Google / Facebook / Quora / Trust Pilot reviews",
                "Managing online arguments",
                "Countering negative reviews",
                "Working on Hashtags, location and brand"
            ]
        },
        {
            title: "Web Presence Services",
            items: [
                "SEO Based Website designing",
                "Service / Product Promotion",
                "Brand Promotion",
                "Customized lead generation",
                "Organic SEO",
                "Promotion on Social Media (Facebook, Quora, Instagram, YouTube, LinkedIn and Twitter)"
            ]
        },
        {
            title: "Virtual Assistant Service",
            items: [
                "Scheduling appointments",
                "Attending and making phone calls",
                "Making travel arrangements",
                "Managing email accounts",
                "Working with the client to solve their issues",
                "Perform social tasks"
            ]
        },
        {
            title: "Book keeping",
            items: [
                "Reconcile all balance sheet accounts",
                "Bank Reconciliations",
                "Accounts Receivable",
                "Reconciliations",
                "Maintain Fixed Asset Schedules",
                "Accounts Payable",
                "Loan Amortization schedules",
                "Deferred Revenue",
                "Credit card reconciliations",
                "Payroll Services",
                "Job Costing"
            ]
        },
        {
            title: "Accounting",
            items: [
                "Financial Statements",
                "Compilation",
                "Accounting Review",
                "Budget and Cash Flow Analysis",
                "Financial Projections",
                "Trust Accounting",
                "Fund Accounting",
                "Analyze various functions for efficiencies (like payroll, accounts receivable, accounts payable, etc)",
                "Onsite services to support client staff vacations, terminations and training (Fill in as Controller, Payroll Processing, Billing & Collections, etc)"
            ]
        }
    ];

    return (
        <div className="bg-white dark:bg-zinc-900 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 space-y-4">
      <h1>
        <span className="text-3xl text-black dark:text-white md:text-5xl font-bold leading-tight">Our </span>
        <span className="text-3xl text-cyan-500 md:text-5xl font-bold leading-tight">Services</span>
      </h1>
      <div className="w-full max-w-sm mx-auto border-b-2 border-cyan-400"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          services={service.items}
        />
      ))}
    </div>
  </div>
</div>

    );
};

export default ServicesSection;