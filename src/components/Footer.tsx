export const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AEO</span>
              </div>
              <h3 className="text-xl font-semibold">Answer Engine Optimization</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              In today's digital landscape, being cited by answer engines like ChatGPT, Gemini, Perplexity, and Claude
              matters more than traditional Google rankings. Answer engines are becoming the primary way customers
              discover businesses — making Answer Engine Optimization (AEO) the new frontier of digital marketing.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">AEO Data Publishing</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Answer Engine Content Optimization</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Citation & Authority Building</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">AEO Performance Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Schedule a Call</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Request More Info</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AI Visibility Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};