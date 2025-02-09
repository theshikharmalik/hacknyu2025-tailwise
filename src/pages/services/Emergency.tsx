
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Clock, MapPin } from "lucide-react";

const Emergency = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/services")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>

            <div className="bg-[#FDE1D3] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Emergency Veterinary Services
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                24/7 emergency care for your beloved pets when they need it most
              </p>
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Clock className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Available 24/7</h2>
                <p className="text-gray-600">
                  Our emergency team is always ready to help your pet, day or night
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <MapPin className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Multiple Locations</h2>
                <p className="text-gray-600">
                  Emergency clinics available throughout the city
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
