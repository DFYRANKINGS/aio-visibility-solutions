import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "AI Visibility Hub™ Software",
    tagline: "DIY — Run it yourself for total control.",
    price: "$497",
    originalPrice: "$1,497",
    period: "One-time",
    description: "Get more AI-driven calls and cases while managing your visibility profile on your terms.",
    features: [
      "Get recommended by AI for your case types and cities",
      "Hundreds to thousands of AI-ready data points generated from your website",
      "Position your firm across platforms AI systems crawl, train, and learn from",
      "Find and answer the exact questions your future clients are asking AI",
      "Uncover unanswered questions AI can't fully answer yet — and own them",
      "Generate citation-ready content designed to get pulled into AI answers",
      "Build authority signals AI uses to decide who to recommend",
      "Discover and structure your firm's reviews and reputation for AI trust",
      "Optimize every page of your website so AI understands and cites it",
      "14-tool Authority Builder Suite to strengthen trust, expertise, and visibility",
      "BONUS: Instant AI Content Publisher™ — turn your content into ready-to-publish pages",
      "BONUS: AI Freshness Engine™ — keeps your firm active and re-evaluated every 30 days",
      "BONUS: AI Indexing + Submission System™ — gets your content discovered faster",
      "Ongoing updates as AI platforms evolve",
      "67% savings for a limited time"
    ],
    popular: false,
    discount: "67% OFF",
    paymentLink: "https://buy.stripe.com/dRm8wPgGXd8H12k3Zvcwg0p"
  },
  {
    name: "DFY — Full Annual Plan",
    tagline: "Hands-off positioning, managed by our team.",
    price: "$2,997",
    originalPrice: "$5,997",
    period: "Per year",
    description: "We build and optimize your firm's AI visibility profile for maximum exposure.",
    features: [
      "We position your firm to be recommended by AI for your case types and locations",
      "We build and expand your AI visibility every month — so your presence compounds over time",
      "We publish your firm across platforms AI systems crawl, train, and learn from",
      "We find the exact questions your future clients are asking AI — and make sure your firm answers them",
      "We uncover unanswered questions and position your firm where others aren't showing up",
      "We create citation-ready content designed to be pulled into AI answers and recommendations",
      "We optimize every page of your website so AI understands, trusts, and cites your firm",
      "We structure your firm's reputation, reviews, and authority signals so AI favors you",
      "We continuously analyze your visibility gaps and expand where you're missing opportunities",
      "We layer your AI visibility month after month to highly trusted platforms",
      "We analyze your GMB listing and make recommendations to increase your visibility across Google",
      "We handle indexing and submission across Google, Bing, and AI search platforms",
      "Dataset publishing to 55+ platforms across the web",
      "AI distribution + entity reinforcement creates an \"authority network\" for your law firm",
      "Priority support and dedicated management — we handle everything for you"
    ],
    popular: true,
    discount: "50% OFF",
    paymentLink: "https://buy.stripe.com/5kQ14n0HZ8Sr7qI9jPcwg02"
  },
  {
    name: "Bilingual Distribution — English + Español",
    tagline: "Twice the distribution. Twice the AI authority.",
    price: "$4,997",
    originalPrice: "$9,997",
    period: "Per year",
    description: "Everything in the Full Annual DFY Plan — delivered in both English and Spanish for double the AI visibility and expanded reach into Spanish-speaking markets.",
    features: [
      "Everything included in the Full Annual DFY Plan",
      "Bilingual AI distribution — English + Español across 55+ platforms",
      "Spanish-language entity reinforcement for AI search systems",
      "Bilingual citation-ready content built to be pulled into AI answers",
      "Spanish-language question discovery — capture queries competitors ignore",
      "Bilingual authority signals across trusted multilingual platforms",
      "Expanded AI referral capability into Spanish-speaking markets",
      "Positions your firm as the bilingual AI authority in your practice areas",
      "Twice the distribution surface = compounding AI visibility over time",
      "We analyze your GMB listing and make recommendations to increase your visibility across Google",
      "We handle indexing and submission across Google, Bing, and AI search platforms",
      "Dataset publishing to 55+ platforms across the web in both English + Español",
      "AI distribution + entity reinforcement creates an \"authority network\" for your law firm",
      "Priority support and dedicated bilingual management"
    ],
    popular: false,
    discount: "50% OFF",
    paymentLink: "https://buy.stripe.com/3cI5kD1M32u35iAgMhcwg00"
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
              We get our clients AI recommendations through our AI visibility system and offer monthly, quarterly and annual services to jump-start your online visibility, mentions, citations and recommendations across 15 of the primary AI search platforms. <b><i>Get your business recognized, validated and trusted by AI.</i></b>            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold">Guaranteed Distribution</div>
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
