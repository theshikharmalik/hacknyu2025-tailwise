
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Food = () => {
  const [food, setFood] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [why, setWhy] = useState<string | null>(null);
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const { toast } = useToast();

  const checkFood = async () => {
    if (!food) return;
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/check?query=${food}`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
  
      const data = await response.json();
      const parsedData = JSON.parse(data);
      console.log(data);
      console.log(typeof(data));
      console.log(parsedData);
      console.log(typeof(parsedData));
      setResult(parsedData.Verdict || "❓ No response received. Please try again.");
      setWhy(parsedData.Why || "❓ No response received. Please try again.");
      setAlternatives(parsedData.BetterAlternatives || []);
    } catch (error) {
      console.error("Error fetching food safety data:", error);
      setResult("⚠️ Error checking food safety. Please try again.");
    }
  
    toast({
      title: "Food Check Complete",
      description: "We've analyzed the food safety for your pet.",
    });
  };

  const showAlternativeFoods = () => {
    setShowAlternatives(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
              😋 Can My Pet Eat This? 🍖
              </h1>
              <p className="text-gray-500">
              Safe treat or a bad idea? Get the verdict.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your query..."
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="font-semibold" onClick={checkFood} disabled={!food}>
                    Check
                  </Button>
                </div>

                {result && why &&(
                  <div
                    className={`p-4 rounded-lg ${
                      result.includes("✅")
                        ? "bg-secondary/30"
                        : result.includes("❌")
                        ? "bg-destructive/20"
                        : "bg-secondary/30"
                    }`}
                  >
                    <p className="my-4"></p>
                    <p className="text-xl font-bold">{result}</p>
                    <p className="my-6"></p>
                    <p className="text-lg font-normal">{why}</p>
                    {!result.includes("✅") && (
                      <Button
                        variant="outline"
                        onClick={showAlternativeFoods}
                        className="mt-4"
                      >
                        Show Safe Alternatives
                      </Button>
                    )}
                  </div>
                )}

                {showAlternatives && alternatives && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">Safe Alternatives</h3>
                    <div className="bg-secondary/30 p-3 rounded-lg">
                      {alternatives}
                    </div>
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

export default Food;
