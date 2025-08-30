import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <Card className="p-12 bg-white/10 backdrop-blur-lg border-white/20 shadow-glow max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Let AI Agents
            <span className="block">Ignore Your Business</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Every day you wait, your competitors are getting recommended by ChatGPT, Gemini, and other AI platforms 
            while your business remains invisible. Start your AI visibility transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Start Free AI Audit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              Schedule Strategy Call
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30 Days</div>
              <div className="text-sm opacity-80">To See Results</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};