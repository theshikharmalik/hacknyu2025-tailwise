
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";

const Diagnose = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const startDiagnosis = () => {
    const mockDiagnoses = [
      "Your pet appears to be healthy!",
      "Minor skin irritation detected. Consider consulting a vet.",
      "Signs of seasonal allergies. Keep monitoring.",
    ];
    const randomDiagnosis =
      mockDiagnoses[Math.floor(Math.random() * mockDiagnoses.length)];
    setDiagnosis(randomDiagnosis);
    toast({
      title: "Diagnosis Complete",
      description: "We've analyzed the image of your pet.",
    });
  };

  const contactVet = () => {
    toast({
      title: "Connecting to Vet",
      description: "Connecting you to the nearest available veterinarian...",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Let's Check Your Pet's Health
              </h1>
              <p className="text-gray-500">
                Upload a clear photo for the best results
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer bg-secondary/30 hover:bg-secondary/40 transition-colors rounded-lg p-8 w-full text-center"
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-500">Click to upload image</div>
                    )}
                  </label>
                  <Button
                    onClick={startDiagnosis}
                    disabled={!selectedImage}
                    className="w-full"
                  >
                    Start Diagnosis
                  </Button>
                </div>

                {diagnosis && (
                  <div className="space-y-4">
                    <div className="bg-primary/30 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Diagnosis Result</h3>
                      <p>{diagnosis}</p>
                    </div>
                    
                    <Button 
                      onClick={contactVet} 
                      variant="secondary"
                      className="w-full gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Contact a Vet Now
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diagnose;
