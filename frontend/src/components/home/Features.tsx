import { Card } from "@radix-ui/themes";
import { Camera, ChefHat, Heart, Share2, Users, Utensils } from "lucide-react";


export default function Feature() {
    return (
        <section id="features" className="py-20 bg-secondary/30">
            <div className="container max-w-11/12 mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                        Everything You Need to Share Your Culinary Passion
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        From quick cooking tips to elaborate recipe tutorials, FoodReel provides the perfect platform for every
                        food creator.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Camera className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Recipe Reels</h3>
                        <p className="text-muted-foreground">
                            Create engaging short-form videos showcasing your cooking process, tips, and final dishes.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Utensils className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold">Recipe Library</h3>
                        <p className="text-muted-foreground">
                            Build your personal collection of recipes with detailed ingredients, instructions, and photos.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Food Community</h3>
                        <p className="text-muted-foreground">
                            Connect with fellow food enthusiasts, share experiences, and discover new culinary inspirations.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Heart className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold">Save & Share</h3>
                        <p className="text-muted-foreground">
                            Bookmark your favorite recipes and share them with friends and family effortlessly.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Share2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Cross-Platform</h3>
                        <p className="text-muted-foreground">
                            Share your content across all social platforms with optimized formats for each channel.
                        </p>
                    </Card>

                    <Card className="p-6 space-y-4 bg-card border-border hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <ChefHat className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold">Chef Tools</h3>
                        <p className="text-muted-foreground">
                            Professional tools for recipe scaling, nutrition tracking, and meal planning.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}