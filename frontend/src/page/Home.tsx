import { Camera, Heart, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import { Badge, Button, Card } from "@radix-ui/themes";
import BreadBreaking from "../assets/Bread.jpg";
import ChocolateBerryDessert from "../assets/Chocalate.jpg";
import DeliciousPastaDishWithHerbs from "../assets/Pasta.jpg";
import FreshSaladBowlWithColorfulVegetables from "../assets/Salad.jpg";
import Feature from "../components/home/Features";
import Community from "../components/home/Community";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

             {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/20" />
                <div className="container px-4 relative max-w-11/12 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="soft" className="w-fit">
                                    <Camera className="w-3 h-3 mr-1" />
                                    Share Your Culinary Journey
                                </Badge>
                                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                                    Where Food Stories Come to Life
                                </h1>
                                <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                                    Join a community of passionate food lovers sharing recipes, cooking techniques, and culinary
                                    adventures through engaging reels and posts.
                                </p>
                            </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="4" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Play className="w-4 h-4 mr-2" />
                                Start Creating
                            </Button>
                            <Button variant="outline" size="4">
                                Explore Recipes
                            </Button>
                        </div>
                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-foreground">50K+</div>
                                <div className="text-sm text-muted-foreground">Recipes Shared</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-foreground">25K+</div>
                                <div className="text-sm text-muted-foreground">Food Creators</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-foreground">1M+</div>
                                <div className="text-sm text-muted-foreground">Food Lovers</div>
                            </div>
                        </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4 space-y-3 bg-card border-border">
                                    <img
                                        src={DeliciousPastaDishWithHerbs}
                                        alt="Pasta dish"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-accent" />
                                            <span className="text-sm text-muted-foreground">2.4k</span>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-4 space-y-3 bg-card border-border mt-8">
                                    <img
                                        src={FreshSaladBowlWithColorfulVegetables}
                                        alt="Fresh salad"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-accent" />
                                            <span className="text-sm text-muted-foreground">1.8k</span>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-4 space-y-3 bg-card border-border -mt-4">
                                    <img
                                        src={BreadBreaking}
                                        alt="Bread baking"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-accent" />
                                            <span className="text-sm text-muted-foreground">3.2k</span>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-4 space-y-3 bg-card border-border">
                                    <img
                                        src={ChocolateBerryDessert}
                                        alt="Chocolate dessert"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-accent" />
                                            <span className="text-sm text-muted-foreground">4.1k</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features */}
            <Feature />

            {/* community */}
            <Community />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    )
}