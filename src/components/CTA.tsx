import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <Card className="p-12 bg-white/10 backdrop-blur-lg border-white/20 shadow-glow max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Let AI Agents
            <span className="block">Ignore Your Business</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Every day you wait, your competitors are getting recommended by ChatGPT, Gemini, and other AI platforms 
            while your business remains invisible. Start your AI visibility transformation today with a Free AI Citation & Visibility Audit.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <textarea
                placeholder="Tell us about your business and goals"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
              />
              <Button variant="secondary" size="lg" className="w-full text-lg px-8 py-6">
                Get Your Free Audit Now
              </Button>
              
              {/* Trust Signals */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-8 text-white/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-sm">500+ Businesses Served</span>
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
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};