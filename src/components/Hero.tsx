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
                AI overviews are blocking your rankings on Google, so why not get inside Google's AI overviews, snippets and AI citations? <b><i>Ranking on Google just isn't enough anymore.</i></b> The way to get your business recommended by ChatGPT, Gemini, Perplexity, and inside Google's AI overviews and inside all the major AI answer engines is easy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To get listed in AI search, you need to repurpose your information into machine-readable data (or structured data). It looks similar to HTML, but it's for Large Language Models/AI bots. <b>We specialize in AI Optimization by transforming your information into datasets AI can understand, </b>and distributing it across platforms AI bots crawl to learn from. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                → What this does, when AI sees your consistent information everywhere it looks, it creates an <b>"authority network of <i>entity recognition,"</i></b> so your business is recognized, validated and trusted by AI. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Some agencies are referring to this as "Search <b>Everywhere</b> Optimization".  The new SEO is "AI SEO," which is for search engines + AI search / answer engines.
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
            <div className="aspect-video w-full rounded-lg shadow-ai bg-muted border border-border overflow-hidden">
              <wistia-player
                media-id="il593oynbl"
                aspect="1.7777777777777777"
              ></wistia-player>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
