import { Link } from "react-router-dom"

const ChooseRegister = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8" role="region" aria-labelledby="choose-register-title">
        <header className="text-center space-y-2">
          <h1 id="choose-register-title" className="font-serif text-3xl font-bold text-foreground">
            Join FoodReel
          </h1>
          <p className="text-muted-foreground text-balance">Pick how you want to join our culinary community.</p>
        </header>

        <div className="space-y-4">
          <div className="space-y-2">
            <Link
                to="/user/register"
                className="block w-full p-6 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">User</h3>
                    <p className="text-sm text-muted-foreground">
                        Share your culinary creations, discover new recipes, and connect with fellow food lovers.
                    </p>
                </div>
            </Link>

            <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/user/login" className="text-primary hover:underline font-medium">
                    Sign in
                </Link>
            </div>
          </div>

          <div className="space-y-2">
            <Link
                to="/food-partner/register"
                className="block w-full p-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group"
            >
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Food Partner</h3>
                    <p className="text-sm text-primary-foreground/80">
                        Showcase your restaurant, share professional content, and reach food enthusiasts.
                    </p>
                </div>
            </Link>

            <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/food-partner/login" className="text-primary hover:underline font-medium">
                    Sign in
                </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChooseRegister
