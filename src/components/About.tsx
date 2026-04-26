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
              AI Visibility Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're the pioneering team that used to rank our clients on multiple first pages of Google with their most prominent keywords.
            We recognized the seismic shift early, in how customers were discovering businesses just playing with AI in different answer
            engines, like ChatGPT and so many more. But when AI agents started answering questions on Google before users would otherwise
            scroll down the page to actual websites, we knew everything had changed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                The Problem We Solve
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've been behind the scenes since 1998 creating websites, generating leads for our clients, and ranking them on Google.
                But in 2023, we watched as our clients' Google rankings became meaningless overnight because no one was scrolling down
                the page anymore to find them. Our clients' businesses that were ranking #1 even saw their traffic plummet. What we
                discovered was AI overviews at the top of Google were providing instant answers, so people searching no longer needed
                to continue scrolling down the page to discover their websites.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This was the pivoting moment that we decided to reverse-engineer our ranking strategy, to get our clients inside AI search.
                After going from overwhelm to perplexed, we finally figured out where AI agents like ChatGPT, Google Gemini, and Perplexity
                were getting their information from, and how to get our clients' information in front of them. Within a few short months—our
                clients started getting recommended by AI agents who were answering their prospects' questions... which is when we made an
                even bigger discovery: When those prospects clicked on the link and went to their websites, they had a higher conversion rate.
                Why? Because most of their questions had already been answered, and they were pretty much ready to get started.
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Expertise
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've spent 18+ months reverse-engineering how we got our clients discovered online. We went from ranking on Google to
              distributing our clients' information directly to platforms where AI agents source their information, to give them precisely
              what they needed to answer our clients' prospects' questions. This is how we got started and have been building the most
              comprehensive AI visibility system on the Internet ever since.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-3">AI Agent Research</h4>
              <p className="text-muted-foreground">
                Deep analysis of how ChatGPT, Gemini, Perplexity, and 15+ other AI platforms 
                source and rank business recommendations.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">Data Publishing</h4>
              <p className="text-muted-foreground">
                Proprietary network of 100+ high-authority platforms where we strategically 
                publish business data for maximum AI crawl visibility.
              </p>
            </Card>
            
            <Card className="p-6 text-center shadow-card">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-3">Performance Tracking</h4>
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep SEO expertise with cutting-edge AI research to stay ahead of the curve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              <h4 className="text-xl font-bold mb-2">Sarah Martinez</h4>
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
              <h4 className="text-xl font-bold mb-2">David Kim</h4>
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
              <h4 className="text-xl font-bold mb-2">Alex Rodriguez</h4>
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Track Record
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've helped over 500 businesses transform their AI visibility and dominate AI search.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Businesses Transformed</div>
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
    </>
  );
};