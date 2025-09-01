import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message transmitted successfully! I'll respond within 24 hours.");
    
    // Prepare WhatsApp message
    const whatsappMessage = `Hello, I'm ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp with the message
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 particle-bg relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            INITIATE CONNECTION
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something extraordinary? Let's establish a secure communication channel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="machine-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 neon-border bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary glow-text">
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neon-border bg-machine-dark/50 text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neon-border bg-machine-dark/50 text-foreground placeholder:text-muted-foreground"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="neon-border bg-machine-dark/50 text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Describe your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full machine-card bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Transmit Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <Card className="machine-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 neon-border bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent glow-text">
                  Contact Channels
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email Protocol",
                    value: "shriabhinav24@gmail.com",
                    href: "mailto:shriabhinav24@gmail.com"
                  },
                  {
                    icon: Phone,
                    label: "Voice Channel",
                    value: "+91 9693529897",
                    href: "tel:+919693529897"
                  },
                  {
                    icon: MapPin,
                    label: "Physical Location",
                    value: "New Delhi, India",
                    href: "#"
                  }
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div className="p-2 neon-border bg-machine-dark/50 rounded-lg">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <a
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Networks */}
            <Card className="machine-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 neon-border bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary glow-text">
                  Network Nodes
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    icon: Github, 
                    label: "GitHub", 
                    href: "https://github.com/Shri-AbhiNav",
                    gradient: "from-primary to-accent"
                  },
                  { 
                    icon: Linkedin, 
                    label: "LinkedIn", 
                    href: "https://www.linkedin.com/in/shri-abhinav-4a9585244",
                    gradient: "from-accent to-primary"
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="machine-card p-4 text-center group-hover:scale-105 transition-transform">
                      <div className={`mx-auto mb-2 w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center`}>
                        <social.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {social.label}
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};