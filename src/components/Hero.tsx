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
                Answer Engine Optimization
                <span className="block text-primary">
                  Get Recommended by AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Answer Engine Optimization (AEO) is the new SEO. AI overviews are blocking your rankings on Google — so the goal now is to get <b>inside</b> Google's AI overviews, snippets, and AI citations. <b><i>Ranking on Google just isn't enough anymore.</i></b> Optimizing for answer engines is how you get your business recommended by ChatGPT, Gemini, Perplexity, Google's AI overviews, and every major AI answer engine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To get cited by answer engines, you need to repurpose your information into machine-readable data (structured data). It looks similar to HTML, but it's built for Large Language Models and AI bots. <b>We specialize in Answer Engine Optimization (AEO) — transforming your information into datasets AI can understand,</b> and distributing it across the platforms answer engines trust to gather and learn from.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                → What this does: when answer engines see your consistent information everywhere they look, it creates an <b>"authority network of <i>entity recognition,"</i></b> so your business is recognized, validated, and trusted by AI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Some agencies call this "Search <b>Everywhere</b> Optimization." We call it what it is: <b>Answer Engine Optimization (AEO)</b> — the new SEO for AI answer engines <i>and</i> traditional search.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">Get Recommended by Answer Engines</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#services">See How AEO Works</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">Less than 4%</div>
                <div className="text-sm text-muted-foreground">Of Businesses Optimize for AEO</div>
              </Card>
              <Card className="p-4 text-center shadow-card">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Answer Engines</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video w-full rounded-lg shadow-ai bg-muted border border-border overflow-hidden">
              <iframe
                src="https://fast.wistia.net/embed/iframe/pahw7r57u7"
                title="Wistia Video"
                allow="autoplay; fullscreen"
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
