import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <Card className="p-12 bg-white/10 backdrop-blur-lg border-white/20 shadow-glow max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Let AI
            <span className="block">Ignore Your Business</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Every day you wait, your competitors are getting their website recommended by ChatGPT, Gemini, and so many other AI platforms. Start your AI visibility transformation today.
          </p>

          <div className="flex justify-center mb-10">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90" asChild>
              <a href="#pricing">Get Recommended by AI</a>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-sm">300+ Businesses Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">⚡</span>
                </div>
                <span className="text-sm">24-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">🔒</span>
                </div>
                <span className="text-sm">100% Confidential</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
