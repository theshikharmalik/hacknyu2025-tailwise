
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Scissors } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Grooming = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("bath-brush");

  const handleSchedule = () => {
    if (!date || !time || !service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to schedule the appointment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Scheduled",
      description: `Your grooming appointment has been scheduled for ${date} at ${time}.`,
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

            <div className="bg-[#F2FCE2] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Professional Pet Grooming
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Pamper your pet with our expert grooming services
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    <Scissors className="mr-2 h-5 w-5" />
                    Schedule Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule Grooming Appointment</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="bath-brush">Bath & Brush</option>
                      <option value="full-grooming">Full Grooming</option>
                      <option value="nail-trim">Nail Trimming</option>
                    </select>
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
                <h2 className="text-xl font-semibold mb-2">Bath & Brush</h2>
                <p className="text-gray-600">
                  Thorough cleaning and brushing for a fresh, clean pet
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Hair Trimming</h2>
                <p className="text-gray-600">
                  Professional cuts tailored to your pet's breed
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Nail Care</h2>
                <p className="text-gray-600">
                  Gentle nail trimming and paw care services
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Grooming;
