import { ChefHat } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-border">
            <div className="container max-w-11/12 mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <ChefHat className="w-3 h-3 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-serif font-bold">FoodReel</span>
                        </div>
                        <p className="text-sm text-muted-foreground">The social platform where food stories come to life.</p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Product</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>Mobile App</div>
                            <div>API</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Community</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>Creators</div>
                            <div>Challenges</div>
                            <div>Blog</div>
                            <div>Support</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-semibold">Company</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div>About</div>
                            <div>Careers</div>
                            <div>Privacy</div>
                            <div>Terms</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} FoodReel. All rights reserved.
            </div>
        </footer>
    )
}