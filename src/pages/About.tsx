import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              AI Visibility Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're the pioneering team that recognized the seismic shift in how customers discover businesses. 
            When AI agents started answering questions before users could scroll to actual websites, we knew everything had changed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Problem We Solve
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2023, we watched as our clients' Google rankings became meaningless overnight. 
                Businesses ranking #1 saw their traffic plummet as AI overviews provided instant answers, 
                preventing users from ever clicking through to their websites.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional SEO agencies were still optimizing for search engines while customers 
                were already getting their answers from ChatGPT, Gemini, and Perplexity. We realized 
                the future wasn't about ranking for search engines—it was about being recommended by AI agents.
              </p>
            </div>
            <Card className="p-8 bg-gradient-subtle shadow-ai">
              <h3 className="text-2xl font-bold mb-4">The Turning Point</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Traditional Search Traffic</span>
                  <span className="text-destructive font-bold">-67% ↓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI Query Volume</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've spent over 18 months reverse-engineering how AI agents source their recommendations, 
              building the most comprehensive AI visibility system in the market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Agent Research</h3>
              <p className="text-muted-foreground">
                Deep analysis of how ChatGPT, Gemini, Perplexity, and 15+ other AI platforms 
                source and rank business recommendations.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Data Publishing</h3>
              <p className="text-muted-foreground">
                Proprietary network of 100+ high-authority platforms where we strategically 
                publish business data for maximum AI crawl visibility.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
              <p className="text-muted-foreground">
                Custom monitoring systems that track AI mention frequency across platforms 
                and optimize recommendations in real-time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep SEO expertise with cutting-edge AI research to stay ahead of the curve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Martinez</h3>
              <p className="text-primary font-semibold mb-3">Chief AI Strategist</p>
              <p className="text-sm text-muted-foreground">
                Former Google engineer with 8 years in search algorithms. 
                Now specializes in AI agent behavior analysis.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DK
              </div>
              <h3 className="text-xl font-bold mb-2">David Kim</h3>
              <p className="text-primary font-semibold mb-3">Data Publishing Director</p>
              <p className="text-sm text-muted-foreground">
                Built and manages our network of 100+ high-authority platforms. 
                Expert in structured data and knowledge graphs.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                AR
              </div>
              <h3 className="text-xl font-bold mb-2">Alex Rodriguez</h3>
              <p className="text-primary font-semibold mb-3">Performance Analytics Lead</p>
              <p className="text-sm text-muted-foreground">
                Develops custom tracking systems for AI mention monitoring. 
                PhD in Machine Learning from Stanford.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've helped over 500 businesses transform their AI visibility and dominate AI search results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Businesses Transformed</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">AI Platforms Mastered</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average Visibility Increase</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Card className="p-12 bg-white/10 backdrop-blur-lg border-white/20 shadow-glow max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work with the Experts?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join the 500+ businesses that trust AI Visibility Experts to get them recommended by AI agents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Free AI Audit
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
                Schedule Strategy Call
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;