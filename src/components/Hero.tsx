import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
                Get your business recommended by ChatGPT, Gemini, Perplexity, and all major AI agents where your prospects are asking questions and making decisions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ai" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">Get Listed in AI Search</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">See How It Works</a>
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
            <img 
              src="/lovable-uploads/1c81b497-ffeb-499f-bf63-9ee876be1a36.png" 
              alt="AI Search Platforms - Get Recommended by Perplexity, iAsk and other AI agents" 
              className="rounded-lg shadow-ai w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};