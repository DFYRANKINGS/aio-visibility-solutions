import { Card } from "@/components/ui/card";

const platforms = [
  { name: "ChatGPT", company: "OpenAI", icon: "🤖" },
  { name: "Gemini", company: "Google", icon: "💎" },
  { name: "Grok", company: "X.AI", icon: "🚀" },
  { name: "Perplexity", company: "Perplexity AI", icon: "🔍" },
  { name: "DeepSeek", company: "DeepSeek AI", icon: "🌊" },
  { name: "Claude", company: "Anthropic", icon: "🧠" },
  { name: "Copilot", company: "Microsoft", icon: "💼" },
  { name: "Meta AI", company: "Meta", icon: "🌐" },
  { name: "Bard", company: "Google", icon: "✨" },
  { name: "Bing Chat", company: "Microsoft", icon: "🔎" },
  { name: "Pi", company: "Inflection AI", icon: "🤝" },
  { name: "You.com", company: "You.com", icon: "📱" },
];

export const AIPlatforms = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Recommended to Your Prospects in
            <span className="block text-primary">
              15+ Major AI Platforms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We ensure your FAQs, case studies, and help articles are transformed into structured data, and distributed across 55+ platforms where LLMs and major AI bots crawl to gather their information from. AI bots / answer engines learn how to answer your prospects' questions (and give them a link to your website). The more platforms you are distributed to, the more your chances of being recognized + recommended.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-ai transition-smooth group cursor-pointer">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-bounce">
                {platform.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{platform.name}</h3>
              <p className="text-sm text-muted-foreground">{platform.company}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-subtle border-primary/20 shadow-ai max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Problem is Real</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Studies show that 67% of users never scroll past AI-generated answers. Why? Because their questions have been answered, or someone else was recommended in those answers. No need to scroll down Google! 
              If your business isn't being recommended by AI agents, you're practically invisible to potential customers. Very few people scroll down Google to search for websites to search for information.  Answer engines are providing the information they are looking for and recommending experts.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">-67%</div>
                <div className="text-sm">Traditional Search Traffic</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+420%</div>
                <div className="text-sm">AI Query Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">78%</div>
                <div className="text-sm">Trust AI Recommendations</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
