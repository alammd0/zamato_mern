import { Button, Card, Badge, Tabs} from "@radix-ui/themes"
import { Store, Users, Star, Camera, LogOut, VideoIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../redux/store"
import { setLogoutFoodPartner } from "../../../redux/slice/foodPartnerSlice"
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function FoodPartnerLandingPage() {

    const foodPartner = useSelector( (state : RootState) => state.foodPartner.foodPartner);

    console.log(foodPartner);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const FoodPartnerLogout = () => {
        const response = dispatch(setLogoutFoodPartner());
        console.log(response);
        navigate("/food-partner/login");
        toast.success("You have been logged out successfully");
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container md:w-11/12 mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Store className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-serif font-semibold">FoodReel Partner</h1>
              <p className="text-sm text-muted-foreground">Welcome {foodPartner.ownerName}</p>
            </div>
          </div>
          <Button onClick={FoodPartnerLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container md:w-8/12 mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Partner Account Active
            </Badge>
          </div>
          <h2 className="text-3xl font-serif font-bold mb-2">Welcome to FoodReel Partner Portal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcase your culinary creations, connect with food enthusiasts, and grow your business through our
            platform.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">{foodPartner.restaurantName}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <VideoIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{foodPartner?.foodReels?.length ?? 0}</p>
                  <p className="text-sm text-muted-foreground">Reels</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{foodPartner?.foodPosts?.length ?? 0}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
            {/* Action Cards */}
            <div className="flex gap-4">
                <Link className="flex items-center" to="/food-reel">
                    <Button style={{ cursor : 'Pointer'}}>
                        <Camera className="mr-2 h-4 w-4" />
                        Create Reel
                    </Button>
                </Link>
                <Link className="flex items-center" to="/food-post">
                    <Button style={{ cursor : 'Pointer'}}>
                        <Camera className="mr-2 h-4 w-4" />
                        Create Post
                    </Button>
                </Link>
            </div>

            {/* tab to switch between reels and posts */}
            <div className="flex items-center gap-2">
                <Tabs.Root defaultValue="reels" className="flex-1">
                    <Tabs.List>
                        <Tabs.Trigger value="reels" style={{ cursor : 'Pointer'}}>Reels</Tabs.Trigger>
                        <Tabs.Trigger value="posts" style={{ cursor : 'Pointer'}}>Posts</Tabs.Trigger>
                    </Tabs.List>

                    <div className="mt-6 px-4 flex flex-col gap-4">
                        <Tabs.Content value="reels">
                            hello reels
                        </Tabs.Content>

                        <Tabs.Content value="posts">
                            hello posts
                        </Tabs.Content>
                    </div>
                </Tabs.Root>
            </div>
        </div>
      </main>
    </div>
  )
}
