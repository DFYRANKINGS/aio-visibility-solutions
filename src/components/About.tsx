import { Card } from "@/components/ui/card";

interface AboutProps {
  id?: string;
}

export const About = ({ id = "about" }: AboutProps) => {
  return (
    <>
      {/* About Hero Section */}
      <section id={id} className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About
            <span className="block text-primary">
              Answer Engine Optimization
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're the pioneering team that used to rank our clients on multiple first pages of Google for their most competitive keywords.
            We recognized the seismic shift early — customers were discovering businesses inside answer engines like ChatGPT long before
            they scrolled a search results page. When AI overviews started answering questions on Google itself, we knew traditional SEO
            was no longer enough. Answer Engine Optimization (AEO) is what replaced it.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                The Problem AEO Solves
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've been behind the scenes since 1998 building websites, generating leads, and ranking clients on Google.
                But in 2023, we watched our clients' Google rankings become meaningless overnight because no one was scrolling
                the page to find them. Even #1 rankings saw traffic plummet. Why? Because AI overviews at the top of Google were
                giving searchers instant answers — there was no need to scroll down and discover their websites.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That was the pivoting moment. We reverse-engineered our ranking strategy for a new goal: getting our clients cited
                <i> inside</i> answer engines. After months of research, we figured out where ChatGPT, Google Gemini, and Perplexity
                source their information — and how to get our clients' data in front of them. Within months, our clients were being
                recommended by answer engines that were answering their prospects' questions. Then we discovered something even bigger:
                when those prospects clicked through, they converted at a higher rate. Why? Because most of their questions had already
                been answered, and they were ready to buy. That's the power of Answer Engine Optimization.
              </p>
            </div>
            <Card className="p-8 bg-gradient-subtle shadow-ai">
              <h4 className="text-2xl font-bold mb-4">The Turning Point</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Traditional Search Traffic</span>
                  <span className="text-destructive font-bold">-67% ↓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Answer Engine Query Volume</span>
                  <span className="text-primary font-bold">+420% ↑</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Users Trusting AI Answers</span>
                  <span className="text-accent font-bold">78%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our AEO Expertise
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've spent 18+ months reverse-engineering how businesses get discovered inside answer engines. We went from ranking
              on Google to distributing our clients' information directly to the platforms answer engines source from — giving them
              exactly what they need to cite our clients when answering prospects' questions. That's how we built the most
              comprehensive Answer Engine Optimization system available today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-3">Answer Engine Research</h4>
              <p className="text-muted-foreground">
                Deep analysis of how ChatGPT, Gemini, Perplexity, and 15+ other answer engines
                source and rank the businesses they recommend.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">AEO Data Publishing</h4>
              <p className="text-muted-foreground">
                A proprietary network of 55+ high-authority platforms where we strategically
                publish your business data for maximum answer engine visibility.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-3">Performance Tracking</h4>
              <p className="text-muted-foreground">
                Live reporting so you always know where you stand across answer engines,
                with access to your AI-crawlable URLs and real-time optimization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've helped over 300 businesses transform their AEO footprint and dominate answer engine results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Businesses Transformed</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Answer Engines Mastered</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average AEO Visibility Increase</div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
