import { Button } from "@radix-ui/themes";
import { Play } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center space-y-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                    Ready to Share Your Culinary Story?
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
                    Join thousands of food creators who are already sharing their passion, building their audience, and
                    inspiring others through FoodReel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="4"
                        variant="solid"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 cursor-pointer"
                    >
                    <Play className="w-4 h-4 mr-2" />
                         Start Creating Today
                    </Button>
                    <Button
                        size="4"
                        // variant="outline"
                        variant="surface"
                        className="border-primary-foreground text-white hover:bg-primary-foreground/10 cursor-pointer"
                        >
                        Watch Demo
                    </Button>
                </div>
            </div>
        </section>
    )
}