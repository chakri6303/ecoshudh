import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import {
  Recycle,
  Zap,
  Settings,
  Leaf,
  CheckCircle,
  Factory,
  Building,
  Home,
  Filter,
  Layers3,
  Activity,
  Sparkles,
  ShieldCheck,
  Container,
  Waves,
  TestTube
} from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

export default function HyDWTSPage() {
  const keyFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Energy-efficient",
      description: "Minimal power consumption and low operational costs"
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Compact & Modular",
      description: "Fits seamlessly into residential, commercial, and industrial spaces"
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Customizable",
      description: "Configurable with/without pre-treatment depending on influent sewage load"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
      title: "Low Maintenance",
      description: "Robust design requiring minimal intervention"
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-500" />,
      title: "Environment-Friendly",
      description: "Promotes water reuse, reduces sludge, and supports ESG compliance"
    }
  ];

  const applications = [
    {
      icon: <Home className="h-10 w-10 text-blue-500" />,
      title: "Residential",
      description: "Perfect for housing complexes and residential developments"
    },
    {
      icon: <Building className="h-10 w-10 text-green-500" />,
      title: "Commercial",
      description: "Ideal for offices, malls, and commercial establishments"
    },
    {
      icon: <Factory className="h-10 w-10 text-orange-500" />,
      title: "Industrial",
      description: "Scalable solution for manufacturing and industrial facilities"
    }
  ];

  const treatmentStages = [
    {
      stage: "Pre-Treatment",
      optional: false,
      processes: [
        { 
          name: "Oil & Grease Trap", 
          icon: <Layers3 className="h-5 w-5" />,
          description: "Removes oils and grease"
        },
        { 
          name: "Bar Screen & Grit Chamber", 
          icon: <Filter className="h-5 w-5" />,
          description: "Screens debris and removes grit"
        }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      stage: "Primary Treatment",
      optional: false,
      processes: [
        { 
          name: "Settler", 
          icon: <Waves className="h-5 w-5" />,
          description: "Removes suspended solids"
        }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      stage: "Secondary Treatment",
      optional: false,
      processes: [
        { 
          name: "Anaerobic Baffled Reactor (ABR)", 
          icon: <Activity className="h-5 w-5" />,
          description: "Multi-stage digestion process"
        },
        { 
          name: "Anaerobic Baffled Filter (ABF)", 
          icon: <TestTube className="h-5 w-5" />,
          description: "Fixed film polishing treatment"
        }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      stage: "Tertiary Treatment",
      optional: false,
      processes: [
        { 
          name: "Planted Gravel Filter (PGF)", 
          icon: <Leaf className="h-5 w-5" />,
          description: "Natural biological polishing"
        },
        { 
          name: "Activated Carbon Filter (ACF)", 
          icon: <Sparkles className="h-5 w-5" />,
          description: "Removes color, odor & organics"
        }
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      stage: "Disinfection",
      optional: false,
      processes: [
        { 
          name: "UV / Chlorination / Ozonation", 
          icon: <ShieldCheck className="h-5 w-5" />,
          description: "Pathogen-free reuse water"
        }
      ],
      color: "from-amber-500 to-amber-600"
    },
    {
      stage: "Storage & Reuse",
      optional: false,
      processes: [
        { 
          name: "Treated Water Tank", 
          icon: <Container className="h-5 w-5" />,
          description: "Ready for reuse or safe discharge"
        }
      ],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring", bounce: 0.5 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="glass-effect text-sm px-4 py-2 mb-6">
                🌊 Next-Generation Wastewater Treatment
              </Badge>
            </motion.div>
            
            <h1 className="gradient-text text-4xl md:text-7xl mb-6 font-bold">
              Hy-DWTS™
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-foreground/80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Hybrid-Decentralized Wastewater Treatment System
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Our flagship product - a next-generation solution designed to make wastewater treatment 
              sustainable, cost-effective, and future-ready. <strong>Smarter, Greener, and Built for Tomorrow.</strong>
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Hy-DWTS™?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hy-DWTS™ blends nature-based processes with smart engineering to deliver a system that transforms wastewater from liability to resource.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect hover:shadow-2xl transition-all duration-500 group hover:scale-105 h-full border-0">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Hy-DWTS Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What is Hy-DWTS™?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-0 mb-12">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  <strong className="text-foreground">Hy-DWTS™ (Hybrid Decentralized Wastewater Treatment System)</strong> is a next-generation 
                  sewage treatment technology developed by Ecoshudh that integrates anaerobic, aerobic, and natural polishing 
                  stages within a modular and compact design.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  By leveraging a hybrid treatment train of primary sedimentation, anaerobic digestion, bio-filtration, 
                  and tertiary polishing, the system ensures high BOD/COD removal efficiency, nutrient reduction, and pathogen control.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Engineered for low energy demand, reduced sludge yield, and minimal operator intervention, Hy-DWTS™ produces 
                  reuse-grade treated effluent compliant with CPCB and SPCB discharge norms, suitable for applications such as 
                  flushing, landscaping, and groundwater recharge.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Perfect for Every Scale
            </h2>
            <p className="text-xl text-muted-foreground">
              Scalable configuration makes it ideal for diverse applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect hover:shadow-2xl transition-all duration-500 group hover:scale-105 h-full border-0">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {app.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 px-4 mb-16 relative z-10 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Treatment Process Flow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive multi-stage treatment for optimal water reuse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="glass-effect border-0 overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-0">
                    {/* Stage Header */}
                    <div className={`p-4 bg-gradient-to-r ${stage.color} relative`}>
                      <div className="text-center">
                        <h3 className="font-bold text-base text-green-600">{stage.stage}</h3>
                        {stage.optional && (
                          <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs px-2 py-1 mt-1">
                            Optional
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Processes */}
                    <div className="p-4">
                      <div className="space-y-3">
                        {stage.processes.map((process, processIndex) => (
                          <motion.div 
                            key={processIndex}
                            className="flex items-start gap-3 p-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors group-hover:bg-secondary/15"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="text-primary mt-0.5 bg-primary/10 p-1.5 rounded-md">
                              {process.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-foreground mb-1 leading-tight">
                                {process.name}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {process.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}