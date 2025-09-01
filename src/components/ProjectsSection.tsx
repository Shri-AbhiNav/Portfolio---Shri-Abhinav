import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Server, Globe } from "lucide-react";

const projects = [
  
  {
    title: "PolForge - DeFi Staking Protocol",
    description: "The PolForge DeFi Staking Protocol is a web-based application for managing jewelry stock, sales, and customer data. It streamlines inventory tracking and business operations for jewelry stores.",
    tech: ["Solidity", "React", "TypeScript", "Ether.js", "Web3.js", "Hardhat"],
    image: "/api/placeholder/400/250",
    liveUrl: "https://native-staking-contract.netlify.app",
    githubUrl: "https://github.com/Shri-AbhiNav/PolForge-DeFi_Staking_Protocol",
    color: "from-accent to-blockchain-green"
  },
  {
    title: "Blockchain Certificate Verification",
    description: "Blockchain-based Certificate Verification System built on the Polygon Amoy Testnet. It allows institutions to issue tamper-proof digital certificates, which can be publicly verified on the blockchain.",
    tech: ["Solidity", "React", "Web3.js", "Typescript"],
    image: "/api/placeholder/400/250",
    liveUrl: "https://certificate-verification-web3.netlify.app",
    githubUrl: "https://github.com/Shri-AbhiNav/Blockchain_Certificate_Verification",
    color: "from-blockchain-green to-ethereum-purple"
  },
  {
    title: "Indo Crypto Token",
    description: "Decentralized finance platform with yield farming, liquidity pools, and automated market making using Solidity smart contracts.",
    tech: ["React", "Solidity", "Web3.js", "Hardhat"],
    image: "/api/placeholder/400/250",
    liveUrl: "https://684bdeba49b9984cc2f02c1d--adorable-toffee-0ef563.netlify.app",
    githubUrl: "https://github.com/Shri-AbhiNav/Indo-Crypto-Token",
    color: "from-primary to-accent"
  },
];

const techIcons = {
  "React": Globe,
  "Node.js": Server,
  "MongoDB": Database,
  "Express": Server,
  "Solidity": Globe,
  "Web3.js": Globe,
  "Web3": Globe,
  "Ethers.js": Globe,
  "Hardhat": Server,
  "IPFS": Database,
  "CoinGecko API": Globe
};

export const ProjectsSection = () => {
  return (
    <section className="py-20 particle-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Building Technology for a Better Tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="machine-card h-full overflow-hidden group-hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="w-full h-full bg-gradient-to-br from-machine-dark/80 to-transparent flex items-center justify-center scanning-line">
                  {project.title === "Indo Crypto Token" ? (
                    <img 
                      src="/world.jpg" 
                      alt="Indo Crypto Token Logo" 
                      className="h-24 w-24 rounded-full object-cover border-2 border-primary/30"
                    />
                  ) : project.title === "PolForge - DeFi Staking Protocol" ? (
                    <img 
                      src="/image.png" 
                      alt="PolForge - DeFi Staking Protocol Logo" 
                      className="h-24 w-24 rounded-full object-cover border-2 border-primary/30"
                    />
                  ) : project.title === "Blockchain Certificate Verification" ? (
                    <img 
                      src="/microfinance.png" 
                      alt="Microfinance Dashboard Logo" 
                      className="h-24 w-24 rounded-full object-cover border-2 border-primary/30"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-primary/60">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  )}
                </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary glow-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech as keyof typeof techIcons] || Globe;
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1 px-3 py-1 neon-border bg-machine-dark/50 text-sm"
                        >
                          <Icon className="w-3 h-3" />
                          {tech}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border bg-transparent text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Shri-AbhiNav?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button className="machine-card bg-gradient-to-r from-accent to-primary text-primary-foreground hover:scale-105 transition-transform">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};