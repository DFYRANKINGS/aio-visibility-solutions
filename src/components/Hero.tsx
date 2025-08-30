import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/ai-visibility-hero.jpg";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Get Your Business
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Recommended by AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI overviews are stealing your traffic. Ranking #1 on Google isn't enough anymore. 
                Get your business recommended by ChatGPT, Gemini, Perplexity, and all major AI agents.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ai" size="lg" className="text-lg px-8 py-6">
                Start AI Visibility Audit
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">AI Recommendation Rate</div>
              </Card>
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted-foreground">Increase in Visibility</div>
              </Card>
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">AI Platforms</div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AI Visibility Dashboard showing business recommendations across multiple AI platforms"
                className="rounded-lg shadow-ai w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-xl transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};