import { Button } from "@radix-ui/themes";
import { Film, Image } from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="w-120 text-white p-8 bg-accent-foreground/10 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex gap-8 flex-col">
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-accent">FoodReel</h3>
                        <p className="text-gray-400">
                            Find the best restaurants, cafés, and bars in India.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <Button className="footer-custom-btn">
                            <Film size={20} />
                            Reels
                        </Button>
                    
                        <Button className="footer-custom-btn">
                            <Image size={20} />
                            Posts
                        </Button>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} FoodReel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}