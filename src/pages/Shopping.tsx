
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Shopping = () => {
  const { toast } = useToast();

  const categories = [
    {
      name: "Pet Toys",
      items: [
        {
          name: "Interactive Ball",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
        },
        {
          name: "Plush Mouse",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1545666955-0d0e9641cc80",
        },
        {
          name: "Rope Toy",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
        },
        {
          name: "Chew Bone",
          price: "$9.99",
          image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36",
        },
      ],
    },
    {
      name: "Pet Clothes",
      items: [
        {
          name: "Cozy Sweater",
          price: "$24.99",
          image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
        },
        {
          name: "Rain Jacket",
          price: "$29.99",
          image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
        },
        {
          name: "Winter Boots",
          price: "$34.99",
          image: "https://images.unsplash.com/photo-1583511655826-05700442982d",
        },
        {
          name: "Summer Hat",
          price: "$19.99",
          image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113",
        },
      ],
    },
    {
      name: "Pet Food",
      items: [
        {
          name: "Premium Kibble",
          price: "$34.99",
          image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119",
        },
        {
          name: "Gourmet Treats",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
        },
        {
          name: "Dental Chews",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1601758174114-e5200b33d9b6",
        },
        {
          name: "Wet Food Pack",
          price: "$22.99",
          image: "https://images.unsplash.com/photo-1601758123927-4f7acc7da589",
        },
      ],
    },
  ];

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to Cart",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Pet Shop
              </h1>
              <p className="text-gray-500">
                Find the perfect items for your furry friend
              </p>
            </div>

            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{item.price}</p>
                          <Button
                            onClick={() => handleAddToCart(item.name)}
                            className="w-full"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
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

export default Shopping;
