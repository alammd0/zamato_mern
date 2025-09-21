import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";
import { ChefHat } from "lucide-react"

export default function Navbar() {
    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container w-11/12 mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h1 className="text-2xl font-serif font-bold text-foreground">FoodReel</h1>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </Link>
                    <Link to="#community" className="text-muted-foreground hover:text-foreground transition-colors">
                        Community
                    </Link>
                    <Link to="#creators" className="text-muted-foreground hover:text-foreground transition-colors">
                        Creators
                    </Link>
                </nav>
                <div className="flex items-center gap-10">
                    <Button size="3" className="bg-primary hover:bg-primary/90 cursor-pointer">
                        <Link to="/register">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}