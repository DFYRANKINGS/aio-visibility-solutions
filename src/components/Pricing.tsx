import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Quarterly",
    price: "$2,997",
    period: "Every 3 months",
    description: "Perfect for established businesses looking to dominate AI search results",
    features: [
      "AI data publishing across 50+ platforms",
      "Monthly AI mention reporting",
      "Content optimization for 10 key topics",
      "Citation building campaign",
      "Priority email support",
      "Quarterly strategy calls"
    ],
    popular: false
  },
  {
    name: "Annual",
    price: "$9,997",
    period: "Per year",
    description: "Best value for serious businesses committed to AI visibility leadership",
    features: [
      "Everything in Quarterly plan",
      "AI data publishing across 100+ platforms",
      "Weekly AI mention reporting",
      "Content optimization for 25 key topics",
      "Advanced citation building",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Competitor AI analysis",
      "Custom AI training data preparation"
    ],
    popular: true,
    savings: "Save $2,991"
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
              AI Visibility Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business goals. Both plans include everything 
            you need to dominate AI search results and get recommended by major AI platforms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-ai' : 'shadow-card'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.savings}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "ai" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.popular ? "Get Started Now" : "Choose Plan"}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-subtle border-primary/20 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're so confident in our AI visibility system that we offer a full refund 
              if you don't see measurable improvements in AI recommendations within 30 days.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold">Guaranteed Results</div>
                <div className="text-sm text-muted-foreground">Or your money back</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold">Dedicated Support</div>
                <div className="text-sm text-muted-foreground">Your success is our priority</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold">Fast Implementation</div>
                <div className="text-sm text-muted-foreground">See results in 30 days</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};