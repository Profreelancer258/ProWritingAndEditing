// /sandbox/components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  slug,
}) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Add link to service details page */}
      <a href={`/services/${slug}`}>Learn More</a>
    </div>
  );
};

export default ServiceCard;
