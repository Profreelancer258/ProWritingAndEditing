// /sandbox/pages/index.tsx
import React from "react";
import Layout from "../sandbox/components/Layout";
import ServiceCard from "../sandbox/components/ServiceCard";

const services = [
  {
    title: "Pro Writing & Editing",
    description:
      "Offering professional writing and editing services tailored to your needs.",
    slug: "pro-writing-editing",
  },
  {
    title: "Basic Web Pages Design",
    description: "Creation of basic web pages using modern web technologies.",
    slug: "basic-web-pages-design",
  },
  // Add more services as needed
];

const HomePage: React.FC = () => {
  return (
    <Layout title="Freelancing Services">
      <h1>Welcome to Our Freelancing Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            slug={service.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
