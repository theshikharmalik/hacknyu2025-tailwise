import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, AlertTriangle, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PetDetails = ({ pet }: { pet: any }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 hover:shadow-md transition-shadow animate-fade-up">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={pet.photo}
          alt={pet.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{pet.name}</h2>
          <p className="text-gray-500">{pet.age} old</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/40 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Breed</h3>
            <p className="text-lg font-semibold text-gray-800">{pet.breed}</p>
          </div>
          
          <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/40 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Zoomies Index</h3>
            <p className="text-lg font-semibold text-gray-800">{pet.happinessIndex}%</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Vaccination History</h3>
          <div className="space-y-3">
            {pet.vaccinations.map((vac: any) => (
              <div
                key={vac.name}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-700">{vac.name}</span>
                <span className="text-sm text-gray-500">{vac.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();
  const [pets, setPets] = useState([
    {
      name: "Luna",
      age: "3 years",
      breed: "Japanese Bobtail",
      photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vaccinations: [
        { name: "Rabies", date: "2023-08-15" },
        { name: "FVRCP", date: "2023-09-01" },
      ],
      happinessIndex: 79,
      upcomingVaccination: { name: "FVRCP Booster", date: "2024-09-01" }
    },
    {
      name: "Max",
      age: "10 months",
      breed: "Beagle",
      photo: "/beagle2.jpg",
      vaccinations: [
        { name: "Rabies", date: "2023-12-15" },
        { name: "DHPP", date: "2024-01-01" },
      ],
      happinessIndex: 87,
      upcomingVaccination: { name: "Rabies Booster", date: "2024-12-15" }
    }
  ]);
  const [newPet, setNewPet] = useState({
    name: "",
    age: "",
    breed: "",
    photo: "",
    vaccinations: [],
    happinessIndex: 0,
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Show vaccination reminder on component mount
  useState(() => {
    pets.forEach(pet => {
      if (pet.upcomingVaccination) {
        toast({
          title: `Upcoming Vaccination for ${pet.name}`,
          description: `${pet.upcomingVaccination.name} due on ${pet.upcomingVaccination.date}`,
          variant: "default",
        });
      }
    });
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPet = () => {
    if (!newPet.name || !newPet.age || !newPet.breed || !previewUrl) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and upload a photo.",
        variant: "destructive",
      });
      return;
    }

    const newPetWithPhoto = {
      ...newPet,
      photo: previewUrl,
      vaccinations: [],
      happinessIndex: 0,
    };

    setPets([...pets, newPetWithPhoto]);
    setNewPet({ name: "", age: "", breed:"", photo: "", vaccinations: ["NA"], happinessIndex: 0 });
    setPreviewUrl(null);
    setSelectedImage(null);

    toast({
      title: "Pet Added",
      description: `${newPet.name} has been added to your pets.`,
    });
  };

  const handleDeletePet = (petName: string) => {
    setPets(pets.filter(pet => pet.name !== petName));
    toast({
      title: "Pet Removed",
      description: `${petName} has been removed from your pets.`,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">🐱 My Pets 🐶</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Pet
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Pet</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input
                      placeholder="Pet Name"
                      value={newPet.name}
                      onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                    />
                    <Input
                      placeholder="Pet Age (e.g., 2 years)"
                      value={newPet.age}
                      onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                    />
                    <Input
                      placeholder="Pet Breed"
                      value={newPet.breed}
                      onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                    />
                    <div className="space-y-2">
                      <label
                        htmlFor="pet-photo"
                        className="cursor-pointer block bg-secondary/30 hover:bg-secondary/40 transition-colors rounded-lg p-4 text-center"
                      >
                        {previewUrl ? (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-h-40 mx-auto rounded-lg"
                          />
                        ) : (
                          <span>Upload Pet Photo</span>
                        )}
                      </label>
                      <input
                        id="pet-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </div>
                    <Button onClick={handleAddPet}>Add Pet</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-6">
              {pets.map((pet) => (
                <div key={pet.name} className="relative">
                  <PetDetails pet={pet} />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() => handleDeletePet(pet.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
