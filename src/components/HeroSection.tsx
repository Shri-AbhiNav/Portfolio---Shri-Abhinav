import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, Code, Zap } from "lucide-react";
import { useCallback } from "react";

export const HeroSection = () => {
  const handleDownloadCV = useCallback(() => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=15bSopJ63-XrByIDQByVMwQ5Jt-KaprxY';
    link.download = 'Shri_Abhinav_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  return (
    <section className="min-h-screen particle-bg machine-grid flex items-center justify-center relative pt-32">
      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 neon-border animate-float">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg animate-rotate-3d flex items-center justify-center">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-12 h-12 neon-border animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg animate-rotate-3d flex items-center justify-center">
          <Zap className="w-6 h-6 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Image with Machine Effects */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="machine-card w-full h-full rounded-full p-4 animate-glow-pulse">
              <div className="w-full h-full bg-gradient-to-br from-metallic-silver/20 to-primary/20 rounded-full flex items-center justify-center overflow-hidden scanning-line">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/shri Image.jpg" 
                    alt="Shri Abhinav" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Shri Abhinav
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-hologram">
            Full-Stack & Blockchain Developer
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Building decentralized applications with MERN Stack, Solidity, Web3 & Smart Contracts & centralized applications with Node.js, Express.js, MongoDB, React.js, and Next.js
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="machine-card bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button 
              onClick={handleDownloadCV}
              variant="outline" 
              className="neon-border bg-transparent text-primary hover:bg-primary/10"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/Shri-AbhiNav", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shri-abhinav-4a9585244", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shriabhinav24@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group"
                aria-label={label}
              >
                <Card className="machine-card p-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 neon-border rounded-full p-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce mx-auto"></div>
        </div>
      </div>
    </section>
  );
};