import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Eye, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

export default function AboutPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const teamMembers = [
    {
      name: "Mr. Srinivas Repaka",
      position: "Managing Director & CEO",
      initials: "SR",
      details: "With over 15 years of experience in environmental technology, Srinivas leads EcoShudh's mission to revolutionize wastewater treatment. His vision for sustainable solutions has positioned the company as a leader in eco-friendly water management."
    },
    {
      name: "Mr. Gowtham Tadepalli", 
      position: "Chief Operating Officer",
      initials: "GT",
      details: "Gowtham brings exceptional operational expertise to EcoShudh, ensuring every project delivers maximum efficiency. His commitment to operational excellence has streamlined our processes and enhanced customer satisfaction across all sectors."
    },
    {
      name: "Ms. Aarathi Vandanapu",
      position: "Chief Growth Officer",
      initials: "AV",
      details: "Aarathi spearheads EcoShudh's expansion strategy, identifying new opportunities and fostering partnerships. Her innovative approach to market development has accelerated our growth and expanded our reach to new communities worldwide."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.5 }}
            >
              <Badge variant="outline" className="mb-8 glass-effect text-lg px-6 py-2">
                💧 Our Journey
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-8 gradient-text font-bold">
              About EcoShudh
            </h1>
            
            <motion.p 
              className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Smart, Sustainable, and Future-Ready Wastewater Solutions
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0, rotateY: 45 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
              style={{ y: y1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1564605504543-1833fef7c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwY2xlYW58ZW58MXx8fHwxNzU4MDA5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Water treatment facility"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"
              />
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass-effect rounded-full p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TrendingUp className="h-8 w-8 text-primary" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ y: y2 }}
            >
              <Badge variant="outline" className="mb-6 glass-effect">
                🏢 Who We Are
              </Badge>
              
              <h2 className="text-4xl mb-8 gradient-text font-bold">Who We Are</h2>
              
              <motion.div className="space-y-6">
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  EcoShudh is a next-generation hybrid sewage treatment solution that merges the reliability of decentralized wastewater treatment systems with the precision of advanced engineered polishing units. Designed to deliver high efficiency, low maintenance, and long-term sustainability, EcoShudh ensures compliance with stringent discharge standards while enabling safe treated water reuse.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Its modular design adapts to diverse sewage characteristics, site conditions, and end-use applications, making it a versatile choice for residential communities, industries, institutions, and commercial spaces. EcoShudh offers a future-ready, eco-friendly, and cost-effective alternative to conventional STPs - empowering clients to conserve water, reduce costs, and contribute to a greener planet.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="px-4 py-32 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🎯 Our Purpose
            </Badge>
            <h2 className="text-4xl md:text-6xl gradient-text font-bold mb-6">
              Our Purpose
            </h2>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer max-w-2xl"
            >
              <Card className="glass-effect border-0 p-10 h-full relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative text-center">
                  <motion.div 
                    className="flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-accent mr-6">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold group-hover:gradient-text transition-all duration-300">
                      We exist to restore ecosystems, empower communities and create a future where every drop sustains life
                    </h2>
                  </motion.div>
                  
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-32 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              🚀 Our Mission
            </Badge>
            <h2 className="text-4xl md:text-6xl gradient-text font-bold mb-6">
              Our Mission
            </h2>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer max-w-2xl"
            >
              <Card className="glass-effect border-0 p-10 h-full relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative text-center">
                  <motion.div 
                    className="flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-accent to-primary mr-6">
                      <Eye className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold group-hover:gradient-text transition-all duration-300">
                       On a mission to regenerate water for people and planet
                    </h2>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Eye className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-8 glass-effect">
              👥 Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl gradient-text font-bold mb-6">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders driving EcoShudh's mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="glass-effect border-0 p-6 relative overflow-hidden w-80 h-96 group">
                  <CardContent className="relative h-full flex flex-col p-0">
                    {/* Container for flip effect */}
                    <div className="w-full h-full relative">
                      {/* Front - Image */}
                      <div className="absolute inset-0 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
                        {/* Image area - takes up most of the card */}
                        <div className="flex-1 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center mb-3 shadow-inner relative overflow-hidden">
                          {/* Blank image placeholder */}
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
                              <span className="text-sm text-gray-600 font-semibold">
                                {member.initials}
                              </span>
                            </div>
                          </div>
                          
                          {/* Photo frame effect */}
                          <div className="absolute inset-2 border border-white/50 rounded-md pointer-events-none"></div>
                          
                          {/* Corner decorations */}
                          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-300 rounded-tl"></div>
                          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-300 rounded-tr"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-300 rounded-bl"></div>
                          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-300 rounded-br"></div>
                        </div>
                        
                        {/* Name and title area */}
                        <div className="text-center space-y-1">
                          <h3 className="text-lg font-bold gradient-text line-clamp-2">
                            {member.name}
                          </h3>
                          <p className="text-primary font-semibold text-sm line-clamp-2">
                            {member.position}
                          </p>
                        </div>
                      </div>

                      {/* Back - Details */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            {member.initials}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 gradient-text">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold mb-4 text-sm">
                          {member.position}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                          {member.details}
                        </p>
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
