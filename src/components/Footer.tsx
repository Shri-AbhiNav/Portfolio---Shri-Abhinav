import { Card } from "./ui/card";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        {/* Status Card */}
        <div className="max-w-md mx-auto">
          <Card className="machine-card p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono text-sm">ONLINE</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              "It works on my machine."
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Shri Abhinav. All rights reserved.
            </p>
          </Card>
        </div>
      </div>
    </footer>
  );
};
