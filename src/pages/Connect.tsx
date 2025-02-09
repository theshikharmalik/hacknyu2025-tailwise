
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Image, Heart, MessageSquare, Share2, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Connect = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Vanessa",
      content: "Look at him going full sicko mode !!!",
      image: "/dog-leaping-park.jpg",
      likes: 23,
      comments: 5,
    },
    {
      id: 2,
      author: "Jonathan",
      content: "This is how bella greets me after work <3",
      image: "man-with-dog.jpg",
      likes: 45,
      comments: 12,
    },
  ]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState(100);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = () => {
    if (newPostContent || newPostImage) {
      const newPost = {
        id: posts.length + 1,
        author: "You",
        content: newPostContent,
        image: newPostImage || "",
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
      setNewPostImage(null);
      toast({
        title: "Post Created",
        description: "Your post has been shared with the community!",
      });
    }
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast({
      title: "Post Deleted",
      description: "Your post has been removed.",
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
              📸 Pet Community 💬
              </h1>
              <p className="text-gray-500">
              Scroll through adorable pet moments. Share your own!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="space-y-4">
                <Input
                  placeholder="Share something about your pet..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="flex-1"
                />
                
                {newPostImage && (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={newPostImage}
                        alt="Upload preview"
                        style={{ maxWidth: `${imageSize}%` }}
                        className="rounded-lg mx-auto"
                      />
                      <button
                        onClick={() => setNewPostImage(null)}
                        className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-500">Image Size</label>
                      <Slider
                        defaultValue={[100]}
                        max={100}
                        min={20}
                        step={10}
                        onValueChange={([value]) => setImageSize(value)}
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="post-image"
                  />
                  <label htmlFor="post-image">
                    <Button variant="outline" className="gap-2" asChild>
                      <span>
                        <Image className="w-4 h-4" />
                        Add Photo
                      </span>
                    </Button>
                  </label>
                  <Button 
                    onClick={handlePostSubmit}
                    disabled={!newPostContent && !newPostImage}
                    className="flex-1"
                  >
                    Post Update
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-up relative"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Pet"
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold">{post.author}</h3>
                      {post.author === "You" && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex gap-6">
                      <Button variant="ghost" className="gap-2">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" className="gap-2">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
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

export default Connect;
