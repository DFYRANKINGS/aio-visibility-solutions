export const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold">AI Visibility Experts</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              In today's digital landscape, AI visibility in search platforms like ChatGPT, Gemini, and Claude 
              is more crucial than traditional Google rankings. AI agents are becoming the primary way customers 
              discover businesses, making AI optimization the new frontier of digital marketing.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">AI Data Publishing</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Content Optimization</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Citation Building</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">Performance Monitoring</a></li>
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
            © 2024 AI Visibility Experts. All rights reserved.
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