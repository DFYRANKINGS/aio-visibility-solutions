import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AEO Data Publishing",
    description: "We publish your business data across 55+ high-authority platforms where answer engines crawl for information.",
    features: ["Schema markup optimization", "Knowledge graph submission", "FAQs / QNAs / help articles", "Review platform optimization"]
  },
  {
    title: "Answer Engine Content Optimization",
    description: "Create AEO-friendly content that answers common customer questions in the exact format answer engines prefer to cite.",
    features: ["FAQ optimization", "Question-based content", "GMB services optimization", "Product descriptions"]
  },
  {
    title: "Citation & Authority Building",
    description: "Build authoritative citations and mentions across the web so answer engines trust and recommend your business.",
    features: ["Social media mentions", "Industry publications", "Expert quotes", "Case study features"]
  },
  {
    title: "AEO Performance Reporting",
    description: "Reports on your distribution across answer engines, plus direct links to your AI-crawlable pages.",
    features: ["Live URL tracking", "Monthly reporting", "GMB analysis", "AEO visibility gap reports"]
  }
];

interface ServicesProps {
  id?: string;
}

export const Services = ({ id }: ServicesProps) => {
  return (
    <section id={id} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Optimize Your Business For
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Answer Engines
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive Answer Engine Optimization (AEO) approach ensures your business is recognized, discoverable, and
            recommended by answer engines when prospects search for your services.
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
              Google's AI overviews, ChatGPT, and Perplexity are changing how people find businesses.
              Ranking #1 on Google means nothing if answer engines never cite you. Answer Engine Optimization (AEO) is how you show up.
            </p>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90">
              <a href="#pricing">Get Recommended by Answer Engines</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
