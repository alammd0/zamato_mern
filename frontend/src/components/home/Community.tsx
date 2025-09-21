import { Button } from "@radix-ui/themes";
import PeopleCookie from "../../assets/People.jpg";


export default function Community() {
    return (
        <section id="community" className="py-20">
            <div className="container max-w-11/12 mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                            Join a Thriving Community of Food Creators
                        </h2>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Connect with home cooks, professional chefs, food bloggers, and culinary enthusiasts from around the
                            world. Share your knowledge, learn new techniques, and be inspired by diverse food cultures.
                        </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-muted-foreground">Weekly cooking challenges and contests</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-muted-foreground">Live cooking sessions with expert chefs</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-muted-foreground">Recipe collaboration and feedback</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-muted-foreground">Seasonal ingredient spotlights</span>
                        </div>
                    </div>
                    <Button size="4" className="bg-primary hover:bg-primary/90">
                        Join the Community
                    </Button>
                    </div>
                    <div className="relative">
                    <img
                        src={PeopleCookie}
                        alt="Community cooking"
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}