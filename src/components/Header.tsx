import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI Visibility Experts
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
            About
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">
            Services
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:block">
            Login
          </Button>
          <Button variant="hero" asChild>
            <a href="#pricing">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};