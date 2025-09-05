import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp, Search, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    company: "TechFlow SaaS",
    industry: "B2B Software",
    challenge: "Invisible in AI search results despite strong SEO rankings",
    solution: "Comprehensive AI Overview optimization and structured data enhancement",
    results: [
      { metric: "AI Visibility", increase: "+340%", icon: TrendingUp },
      { metric: "Qualified Leads", increase: "+280%", icon: Users },
      { metric: "Revenue Growth", increase: "+195%", icon: DollarSign }
    ],
    timeframe: "3 months",
    quote: "We went from being completely invisible in AI searches to dominating our industry queries. The ROI has been incredible.",
    testimonialAuthor: "Sarah Chen, CEO",
    tags: ["AI Overview", "Lead Generation", "SaaS"]
  },
  {
    id: 2,
    company: "Urban Dental Group",
    industry: "Healthcare",
    challenge: "Local competitors appearing in AI recommendations while they remained hidden",
    solution: "Local AI optimization, review integration, and medical expertise positioning",
    results: [
      { metric: "Local AI Mentions", increase: "+450%", icon: Search },
      { metric: "New Patients", increase: "+120%", icon: Users },
      { metric: "Online Revenue", increase: "+89%", icon: DollarSign }
    ],
    timeframe: "2 months",
    quote: "Patients now find us through AI assistants asking for dental recommendations. It's like having a 24/7 referral system.",
    testimonialAuthor: "Dr. Michael Torres, Practice Owner",
    tags: ["Local SEO", "Healthcare", "Reviews"]
  },
  {
    id: 3,
    company: "EcoLux Furniture",
    industry: "E-commerce",
    challenge: "Amazon and big retailers dominating AI shopping recommendations",
    solution: "Product optimization for generative engines and shopping AI integration",
    results: [
      { metric: "AI Shopping Mentions", increase: "+520%", icon: TrendingUp },
      { metric: "Direct Sales", increase: "+210%", icon: DollarSign },
      { metric: "Brand Recognition", increase: "+180%", icon: Search }
    ],
    timeframe: "4 months",
    quote: "AI assistants now recommend our furniture over major retailers. We've leveled the playing field against giants.",
    testimonialAuthor: "Amanda Rodriguez, Marketing Director",
    tags: ["E-commerce", "Product Optimization", "Brand Building"]
  }
];

interface CaseStudiesProps {
  id?: string;
}

export const CaseStudies = ({ id }: CaseStudiesProps) => {
  return (
    <section id={id} className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses across industries transformed their AI visibility and achieved measurable growth with our optimization strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="group hover:shadow-elegant transition-all duration-300 bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{study.industry}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Our Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-primary mb-3">Results in {study.timeframe}</h4>
                  <div className="space-y-3">
                    {study.results.map((result, index) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground">{result.metric}</span>
                          </div>
                          <span className="font-bold text-primary text-sm">{result.increase}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-t border-border pt-6">
                  <blockquote className="text-sm text-muted-foreground italic mb-3 leading-relaxed">
                    "{study.quote}"
                  </blockquote>
                  <p className="text-xs text-primary font-medium">— {study.testimonialAuthor}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique, but the results speak for themselves. Let's create your AI visibility success story.
          </p>
        </div>
      </div>
    </section>
  );
};