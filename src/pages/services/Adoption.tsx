
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Search, CheckCircle, HandHeart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Adoption = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [availablePets] = useState([
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      breed: "Persian",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e",
    },
    {
      id: 3,
      name: "Sultan",
      type: "Dog",
      breed: "Labrador",
      age: "4 years",
      image: "/labrador.jpeg",
    },
  ]);

  const handleAdopt = (petName: string) => {
    toast({
      title: "Adoption Request Sent",
      description: `Your request to adopt ${petName} has been received. We'll contact you soon!`,
    });
  };

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

            <div className="bg-[#E5DEFF] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Pet Adoption Services
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Find your perfect companion and give them a forever home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availablePets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                    <p className="text-gray-600 mb-1">{pet.breed}</p>
                    <p className="text-gray-600 mb-4">{pet.age}</p>
                    <Button
                      onClick={() => handleAdopt(pet.name)}
                      className="w-full"
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Adopt {pet.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Adoption;
