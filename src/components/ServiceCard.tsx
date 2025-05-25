import React from 'react';
import {
  Leaf,
  Lightbulb,
  Recycle,
  Feather,
  Globe,
  ShieldCheck,
  SunMedium,
} from 'lucide-react'; // Tambah ikon lain sesuai kebutuhan

interface ServiceCardProps {
  icon: string; // Nama ikon dari lucide-react ('Leaf', 'Lightbulb', dst)
  title: string;
  description: string;
}

// Mapping nama string ke komponen ikon lucide
const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  Leaf,
  Lightbulb,
  Recycle,
  Feather,
  Globe,
  ShieldCheck,
  SunMedium,
  // Tambah ikon lain jika diperlukan
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      {IconComponent ? (
        <IconComponent size={48} className="mb-4 text-leaf-green" />
      ) : (
        <div className="w-12 h-12 bg-leaf-green rounded-full flex items-center justify-center text-white font-bold mb-4">
          ?
        </div>
      )}
      <h3 className="text-xl font-bold font-rymaneco text-leaf-green mb-2">{title}</h3>
      <p className="text-charcoal-grey text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
