import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Monthly",
    price: "$497",
    originalPrice: "$997",
    period: "Per month",
    description: "Jump-start your AI visibility with month-to-month flexibility",
    features: [
      "AI data publishing across 50+ platforms",
      "Monthly AI mention reporting",
      "Content optimization for 10 key topics",
      "Citation building campaign",
      "Priority email support"
    ],
    popular: false,
    discount: "50% OFF",
    paymentLink: "https://buy.stripe.com/dRm8wPgGXd8H12k3Zvcwg0p"
  },
  {
    name: "Quarterly",
    price: "$997",
    originalPrice: "$1,997",
    period: "Every 3 months",
    description: "Great balance of value and commitment for growing businesses",
    features: [
      "Everything in Monthly plan",
      "AI data publishing across 75+ platforms",
      "Bi-weekly AI mention reporting",
      "Content optimization for 15 key topics",
      "Advanced citation building",
      "Priority email & phone support",
      "Quarterly strategy calls",
      "Basic competitor analysis"
    ],
    popular: true,
    discount: "50% OFF",
    paymentLink: "https://buy.stripe.com/3cI5kD1M32u35iAgMhcwg00"
  },
  {
    name: "Annual",
    price: "$2,997",
    originalPrice: "$5,997",
    period: "Per year",
    description: "Best value for serious businesses committed to AI visibility leadership",
    features: [
      "Everything in Quarterly plan",
      "AI data publishing across 100+ platforms",
      "Weekly AI mention reporting",
      "Content optimization for 25 key topics",
      "Premium citation building",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Advanced competitor AI analysis",
      "Custom AI training data preparation"
    ],
    popular: false,
    discount: "50% OFF",
    paymentLink: "https://buy.stripe.com/5kQ14n0HZ8Sr7qI9jPcwg02"
  }
];

interface PricingProps {
  id?: string;
}

export const Pricing = ({ id }: PricingProps) => {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Transparent Pricing for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              AI Visibility Optimization Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           We specialize in <b>AI distribution + entity reinforcement </b>across the web, to create an <b><i>authority network</i> </b>where AI bots crawl to get their information from. Why? Because AI trusts <i><b>connected, repeated, and consistent </b></i>entity recognition across the web.  
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-6 relative ${plan.popular ? 'border-primary shadow-ai' : 'shadow-card'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="absolute -top-4 right-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {plan.discount}
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <div className="text-sm text-muted-foreground line-through">
                    {plan.originalPrice}
                  </div>
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-sm text-muted-foreground font-normal">/{plan.period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-xs leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant="default"
                className="w-full"
                size="lg"
                asChild
              >
                <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer">
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </a>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-subtle border-primary/20 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">AI Visibility Solutions</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We get our clients AI recommendations through our AI visibility system and offer monthly, quarterly and annual services to jump-start your online visibility, mentions, citations and recommendations across 15 of the primary AI search platforms.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold">Guaranteed Results</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold">Dedicated Support</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold">Fast Implementation</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
