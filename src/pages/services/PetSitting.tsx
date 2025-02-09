
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PawPrint, Home, Clock, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const PetSitting = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSchedule = () => {
    if (!date || !time) {
      toast({
        title: "Missing Information",
        description: "Please select both date and time for the service.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Service Scheduled",
      description: `Your pet sitting service has been scheduled for ${date} at ${time}.`,
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

            <div className="bg-[#D3E4FD] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Pet Sitting & Walking Services
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Professional care for your pets when you're away
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Service
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule Pet Sitting Service</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <Button onClick={handleSchedule}>Schedule</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Home className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">In-Home Sitting</h2>
                <p className="text-gray-600">
                  Care for your pets in their familiar environment
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <PawPrint className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Dog Walking</h2>
                <p className="text-gray-600">
                  Regular exercise and outdoor activities
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Shield className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Trusted Care</h2>
                <p className="text-gray-600">
                  Experienced and vetted pet sitters
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetSitting;
