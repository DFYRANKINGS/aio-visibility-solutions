import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
                How to Get Your Business
                <span className="block text-primary">
                  Recommended by AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI overviews are blocking your rankings on Google, so why not get inside Google's AI overviews, snippets and AI citations? Ranking on Google just isn't enough anymore. The way to get your business recommended by ChatGPT, Gemini, Perplexity, and inside Google's AI overviews and inside all the major AI answer engines is easy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To get listed in AI search (answer engines) across the web, you need to repurpose your information into machine-readable data (which is structured data), that looks like HTML, but for LLMs/AI bots. We specialize in AI Optimization + Answer Engine Optimization + Generative Engine Optimization by turning your data into what AI can understand, and distribute it across platforms AI bots crawl to learn.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                → We provide "enterprise level services" at "small business level pricing."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">Get Listed in AI Search</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">See How It Works</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">Less than 4%</div>
                <div className="text-sm text-muted-foreground">Optimize for AI Citations</div>
              </Card>
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">AI Platforms</div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video w-full rounded-lg shadow-ai bg-muted border border-border flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-primary"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-foreground">Video Coming Soon</p>
              <p className="text-sm text-muted-foreground mt-1">
                Placeholder for AI Visibility overview video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
