import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Data Publishing",
    description: "We publish your business data across 50+ high-authority platforms where AI bots crawl for information.",
    features: ["Schema markup optimization", "Knowledge graph submission", "Directory listings", "Review platform optimization"]
  },
  {
    title: "Content Optimization",
    description: "Create AI-friendly content that answers common customer questions in the format AI agents prefer.",
    features: ["FAQ optimization", "Question-based content", "Technical documentation", "Product descriptions"]
  },
  {
    title: "Citation Building",
    description: "Build authoritative citations and mentions across the web to establish credibility with AI systems.",
    features: ["News mentions", "Industry publications", "Expert quotes", "Case study features"]
  },
  {
    title: "Performance Monitoring",
    description: "Track how often your business is recommended by different AI platforms and optimize accordingly.",
    features: ["AI mention tracking", "Recommendation analytics", "Competitor analysis", "ROI reporting"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Make Your Business
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              AI-Visible
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach ensures your business is discoverable and recommended 
            by AI agents when prospects search for your products or services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-ai transition-smooth">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-secondary text-secondary-foreground shadow-ai max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why Traditional SEO Isn't Enough</h3>
            <p className="text-lg mb-6 opacity-90">
              Google's AI overviews, ChatGPT searches, and Perplexity answers are changing how people find businesses. 
              Being #1 on Google means nothing if AI gives the answer before users see your link.
            </p>
            <Button variant="ai" size="lg">
              Schedule Free AI Visibility Audit
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};