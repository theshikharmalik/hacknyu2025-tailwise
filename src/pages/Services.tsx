
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ambulance, Scissors, PawPrint, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Emergency Services",
      icon: Ambulance,
      description: "24/7 emergency veterinary care for your pets",
      path: "/services/emergency",
      color: "bg-[#D3E4FD]",
    },
    {
      title: "Grooming Services",
      icon: Scissors,
      description: "Professional pet grooming and spa treatments",
      path: "/services/grooming",
      color: "bg-[#D3E4FD]",
    },
    {
      title: "Pet Sitting & Walking",
      icon: PawPrint,
      description: "Trusted pet sitting and walking services",
      path: "/services/pet-sitting",
      color: "bg-[#D3E4FD]",
    },
    {
      title: "Adoption Services",
      icon: Heart,
      description: "Find your perfect furry companion",
      path: "/services/adoption",
      color: "bg-[#D3E4FD]",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Our Services
              </h1>
              <p className="text-gray-500">
                Comprehensive care services for your beloved pets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  className="block"
                >
                  <div className={`${service.color} rounded-xl p-6 transition-transform hover:scale-105`}>
                    <service.icon className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button>Learn More</Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
