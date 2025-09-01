import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database,
  CalendarDays,
  MapPin, 
  Server, 
  Globe, 
  GitBranch, 
  Terminal,
  Cpu,
  Zap,
  Shield,
  Coins,
  Keyboard,
  TrendingUp,
  Search
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Arsenal",
    icon: Globe,
    skills: [
      { name: "React.js", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: Code2 },
      { name: "Web3.js", level: 85, icon: Globe },
      { name: "Tailwind CSS", level: 85, icon: Code2 },
      { name: "Next.js", level: 80, icon: Globe },
    ]
  },
  {
    title: "Backend Engine",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, icon: Server },
      { name: "Express.js", level: 88, icon: Server },
      { name: "RESTful APIs", level: 92, icon: Zap },
      { name: "GraphQL", level: 75, icon: Zap },
      { name: "Socket.io", level: 80, icon: Server },
    ]
  },
  {
    title: "Blockchain Core",
    icon: Shield,
    skills: [
      { name: "Solidity", level: 88, icon: Shield },
      { name: "Smart Contracts", level: 85, icon: Shield },
      { name: "Ethereum", level: 90, icon: Coins },
      { name: "Web3 Integration", level: 82, icon: Globe },
      { name: "DeFi Protocols", level: 78, icon: Coins },
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90, icon: Database },
      { name: "IPFS", level: 75, icon: Database },
      { name: "PostgreSQL", level: 75, icon: Database },
      { name: "Redis", level: 70, icon: Database },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: [
      { name: "Git/GitHub", level: 95, icon: GitBranch },
      { name: "Hardhat", level: 80, icon: Terminal },
      { name: "Docker", level: 75, icon: Cpu },
      { name: "AWS", level: 70, icon: Cpu },
      { name: "Cpanel", level: 70, icon: Cpu },
    ]
  },
  {
    title: "Miscellaneous Expertise",
    icon: Coins,
    skills: [
      { name: "Typing Speed 80+ WPM", level: 95, icon: Keyboard },
      { name: "Indian Stock Market Trading", level: 85, icon: TrendingUp },
      { name: "Forex Trading", level: 80, icon: TrendingUp },
      { name: "Cryptocurrency Trading", level: 85, icon: Coins },
      { name: "Technical & Fundamental Analysis", level: 82, icon: Search },
    ]
  }
  
];

export const SkillsSection = () => {
  return (
    <section className="py-20 machine-grid relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack & blockchain technologies powering Web3 applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <Card className="machine-card h-full p-6 hover:scale-[1.02] transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 neon-border bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary glow-text">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="space-y-2 animate-slide-up"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-accent" />
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-machine-dark border border-primary/20"
                        />
                        {/* Animated overlay */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out scanning-line"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Status */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">System Status:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-mono">OPERATIONAL</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Overall System Performance */}
        <div className="mt-12">
          <Card className="machine-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary glow-text">
              WEB3 PERFORMANCE METRICS
            </h3>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {[
                { label: "Smart Contracts", value: 92 },
                { label: "DApp Development", value: 88 },
                { label: "Web3 Integration", value: 90 },
                { label: "Security Audits", value: 85 }
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">
                    {metric.value}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Work Experience */}
        <div className="mt-12">
          <Card className="machine-card p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary glow-text">
              WORK EXPERIENCE
            </h3>
            
            {/* Blockchain Developer Experience */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="text-xl font-bold text-accent">BLOCKCHAIN DEVELOPER</h4>
                <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                  <span className="flex items-center mr-4">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    Oct 2023 – Jul 2025
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    INDORE, MP, INDIA
                  </span>
                </div>
              </div>
              <div className="pl-4 border-l-2 border-primary/30">
                <p className="font-semibold mb-2">WTM IT LIMITED</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Collaborated with the development team to design, implement, and test smart contracts using Solidity on the Ethereum blockchain.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Contributed to the identification and resolution of bugs, ensuring the reliability and functionality of deployed smart contracts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Collaborated with cross-functional teams to develop user-friendly interfaces for interacting with smart contracts and blockchain data.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* React Developer Intern Experience */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="text-xl font-bold text-accent">REACT DEVELOPMENT INTERN</h4>
                <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                  <span className="flex items-center mr-4">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    Jul 2023 – Sep 2023
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Greater Noida, INDIA
                  </span>
                </div>
              </div>
              <div className="pl-4 border-l-2 border-primary/30">
                <p className="font-semibold mb-2">Triluxo Technologies Pvt. Ltd</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Worked closely with other team members to identify and remove software bugs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Consulted with department and customers to discuss project development and proposals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provided weekly detailed reports to keep manager informed on milestones and updates.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};