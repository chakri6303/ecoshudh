import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Recycle, 
  ArrowRight, 
  Play, 
  Zap,
  Settings,
  TrendingDown,
  RefreshCw,
  CheckCircle,
  Award,
  Palette,
  Headphones,
  Target,
  PlayCircle
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const featureAreas = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Smarter Technology",
      description: "Get the best of both worlds with a hybrid system that uses natural processes + smart engineering for reliable treatment."
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-primary" />,
      title: "Lower Running Costs",
      description: "Save on power and operations with an energy-efficient system that keeps OPEX low."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Space-Saving Design",
      description: "Free up valuable built-up area with a compact and modular STP that fits seamlessly into your project layout."
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Less Sludge, Less Hassle",
      description: "Reduce sludge handling and disposal costs with optimized biological treatment."
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      title: "Water You Can Reuse",
      description: "Produce clean, reuse-ready water for flushing, landscaping, cooling, and recharge, lowering fresh water demand."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Compliance Made Easy",
      description: "Stay worry-free with systems that meet CPCB/SPCB norms, while boosting green ratings and ESG performance."
    }
  ];

  const whyEcoShudh = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Proven Expertise",
      description: "Years of experience in wastewater treatment solutions"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Custom Designs",
      description: "Tailored solutions for your specific requirements"
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "End-to-End Support",
      description: "Complete support from design to maintenance"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Sustainability Focus",
      description: "Environmental responsibility at the core of our solutions"
    }
  ];

  const impactMetrics = [
    { icon: "💧", value: "50M+", label: "Liters of Water Reused", suffix: "L" },
    { icon: "🌱", value: "200+", label: "Communities Served", suffix: "" },
    { icon: "♻️", value: "25K+", label: "CO₂ Emissions Avoided", suffix: "kg" },
    { icon: "⚡", value: "30%", label: "Energy Savings", suffix: "" }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Banner Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring", bounce: 0.5 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="glass-effect text-sm px-4 py-2 mb-6">
                🌊 Voice for Pure Water
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl xl:text-8xl mb-6 font-bold gradient-text leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Smarter Sewage Treatment.{" "}
              <span className="block mt-2">Sustainable Communities</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Revolutionizing wastewater treatment with Hy-DWTS™ technology. 
              Compact, efficient, and sustainable solutions for modern communities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                onClick={() => onPageChange('contact')}
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 px-10 py-6 text-lg font-semibold"
              >
                Talk to an Expert
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onPageChange('about')}
                className="group glass-effect hover:bg-white/20 border-2 px-10 py-6 text-lg font-semibold"
              >
                <Play className="mr-3 h-5 w-5" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Offer Section */}
      <section className="py-32 px-4 relative">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🏗️ What We Offer
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-6 gradient-text">
              Hy-DWTS™ Technology
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              Experience our revolutionary hybrid wastewater treatment system through advanced 3D visualization
            </p>
            
            {/* 3D Cutaway Placeholder */}
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-5xl mx-auto mb-16"
            >
              <Card className="glass-effect border-0 p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-50" />
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl mb-6"
                  >
                    🏭
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">3D Cutaway View</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Interactive X-Ray visualization of Hy-DWTS™ components and treatment stages
                  </p>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Coming Soon - Interactive 3D Model
                  </Badge>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🔬 Introduction
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 gradient-text">
              Meet Hy-DWTS™
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-0 p-12">
              <CardContent>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto">
                  <span className="text-primary font-semibold">Hy-DWTS™ (Hybrid Decentralized Wastewater Treatment System)</span> is a next-generation sewage treatment technology developed by EcoShudh that integrates anaerobic, aerobic, and natural polishing stages within a modular and compact design. 
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto mt-6">
                  By leveraging a hybrid treatment train of primary sedimentation, anaerobic digestion, bio-filtration, and tertiary polishing, the system ensures high BOD/COD removal efficiency, nutrient reduction, and pathogen control.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="py-32 px-4 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          style={{ y: y2 }}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              ⚡ Features
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-6 gradient-text">
              Hy-DWTS™ – Built for Your Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Six key advantages that make our hybrid wastewater treatment system the smart choice for modern communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0, rotateY: 45 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  rotateY: 5,
                  scale: 1.05
                }}
                className="cursor-pointer group"
              >
                <Card className="glass-effect border-0 p-8 text-center h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="relative">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        filter: "drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {area.icon}
                    </motion.div>
                    
                    <h3 className="text-xl mb-4 font-semibold group-hover:gradient-text transition-all duration-300">
                      {area.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                      whileHover={{ width: "60%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why EcoShudh Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🏆 Why EcoShudh?
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 gradient-text">
              Why Choose EcoShudh?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Smart, sustainable, and compliance-ready wastewater solutions. With Hy-DWTS™, you save space, energy, and costs—while meeting regulations and achieving green building & ESG goals.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyEcoShudh.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="cursor-pointer group"
              >
                <Card className="glass-effect border-0 p-8 text-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="relative">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Sustainability Metrics */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              📊 Impact & Sustainability
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 gradient-text">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Measurable results that make a difference for communities and the environment
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="glass-effect border-0 p-8 text-center h-full">
                  <CardContent>
                    <motion.div 
                      className="text-6xl mb-6"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      {metric.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-3xl md:text-4xl mb-3 gradient-text font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", bounce: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {metric.value}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🤝 Our Clients
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 gradient-text">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Join the growing list of satisfied clients who trust EcoShudh for their wastewater treatment needs
            </p>
            
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 p-16">
                <div className="text-center">
                  <div className="text-8xl mb-6">🏢</div>
                  <h3 className="text-2xl font-semibold mb-4">Client Logos</h3>
                  <p className="text-muted-foreground">
                    Logo showcase coming soon - featuring our valued partners and clients
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              💬 Testimonials
            </Badge>
            <h2 className="text-4xl md:text-6xl mb-8 gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Real stories from real customers about their experience with Hy-DWTS™
            </p>
            
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-0 p-16">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl mb-6"
                  >
                    <PlayCircle className="h-20 w-20 mx-auto text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">Video Testimonials</h3>
                  <p className="text-muted-foreground">
                    Customer success stories and testimonial videos coming soon
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <Badge variant="secondary" className="text-primary bg-white/90 px-6 py-3 text-lg">
                🚀 Ready to Get Started?
              </Badge>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl mb-8 text-white font-bold leading-tight">
              Transform Your Wastewater{" "}
              <span className="block mt-2">Management Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to implement a sustainable, efficient, and cost-effective wastewater treatment solution? 
              Let our experts design a custom Hy-DWTS™ system for your specific needs.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onPageChange('contact')}
                className="group bg-white text-primary hover:bg-white/90 shadow-xl px-12 py-6 text-xl font-semibold"
              >
                Request Your Custom Hy-DWTS™ Proposal
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange('about')}
                className="group border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-10 py-6 text-lg font-semibold"
              >
                Learn More About Us
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-3"
                >
                  💡
                </motion.div>
              </Button>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 opacity-20">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-white/30"
              />
            </div>
            <div className="absolute bottom-10 right-10 opacity-20">
              <motion.div
                animate={{ y: [0, -30, 0], rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="w-24 h-24 rounded-full bg-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
