import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/ai-visibility-hero.png";

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
              src="/lovable-uploads/62e7a81d-009a-4a19-b37b-cab49f9b19a6.png" 
              alt="AI Search Platforms - Get Recommended by Perplexity, iAsk and other AI agents" 
              className="rounded-lg shadow-ai mb-6 w-full"
            />
            <div className="relative z-10 bg-card/50 backdrop-blur-sm border rounded-lg p-8 shadow-ai">
              {/* AI Agents Recommending Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-6">AI Agents Recommending Your Business</h3>
                
                {/* Questions from prospects */}
                <div className="space-y-4">
                  <div className="bg-background/80 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">👤</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Customer asking:</span>
                    </div>
                    <p className="text-sm">"Best AI visibility service near me?"</p>
                  </div>
                  
                  <div className="bg-background/80 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">👤</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Business owner asking:</span>
                    </div>
                    <p className="text-sm">"How to get recommended by ChatGPT?"</p>
                  </div>
                </div>

                {/* AI Agents Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {/* ChatGPT */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">GPT</span>
                    </div>
                    <p className="text-xs font-medium">ChatGPT</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>

                  {/* Google Gemini */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <p className="text-xs font-medium">Gemini</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>

                  {/* Perplexity */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">⊥</span>
                    </div>
                    <p className="text-xs font-medium">Perplexity</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>

                  {/* Claude */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <p className="text-xs font-medium">Claude</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>

                  {/* DeepSeek */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DS</span>
                    </div>
                    <p className="text-xs font-medium">DeepSeek</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>

                  {/* More AIs indicator */}
                  <div className="bg-background/80 rounded-lg p-3 text-center border shadow-sm">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+10</span>
                    </div>
                    <p className="text-xs font-medium">More AIs</p>
                    <p className="text-xs text-green-600 mt-1">✓ Recommends</p>
                  </div>
                </div>

                {/* Your Business highlighted */}
                <div className="bg-gradient-primary/10 border-2 border-primary/20 rounded-lg p-4 text-center mt-6">
                  <div className="text-2xl mb-2">🏪</div>
                  <p className="font-semibold text-primary">Your Business</p>
                  <p className="text-xs text-muted-foreground mt-1">Gets recommended by all AI agents</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg blur-xl transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};