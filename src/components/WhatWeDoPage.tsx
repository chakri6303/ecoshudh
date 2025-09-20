import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Search, 
  Lightbulb, 
  Truck, 
  Factory, 
  Building, 
  ArrowRight,
  Target,
  Wrench,
  GraduationCap,
  Handshake
} from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedBackground from './AnimatedBackground';

export default function WhatWeDoPage() {

  const engagementSteps = [
    {
      title: "Discover",
      subtitle: "Listening First",
      icon: <Search className="h-10 w-10 text-blue-500" />,
      description: "We start by understanding the unique needs of your project water challenges, site conditions, and sustainability goals.",
      principle: "Every solution begins with your context.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design",
      subtitle: "Tailored for Impact",
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      description: "Our engineers craft modular, scalable, and eco-smart solutions that align with compliance, cost efficiency, and long-term reuse potential.",
      principle: "No one-size-fits-all we design for purpose.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Deliver", 
      subtitle: "Seamless Execution",
      icon: <Truck className="h-10 w-10 text-orange-500" />,
      description: "From installation to commissioning, we ensure on-time delivery with minimal disruption and maximum quality.",
      principle: "Commitment you can trust.",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Empower",
      subtitle: "Knowledge in Your Hands", 
      icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
      description: "We train facility teams, provide simple manuals, and ensure the system is easy to operate and maintain without heavy technical dependency.",
      principle: "Sustainability thrives when people are empowered.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sustain",
      subtitle: "Partnership Beyond Handover",
      icon: <Handshake className="h-10 w-10 text-green-600" />,
      description: "Through monitoring, audits, and AMC support, we ensure consistent performance and long-term impact on water savings and compliance.",
      principle: "Our relationship doesn't end, it evolves.",
      color: "from-emerald-500 to-blue-500"
    }
  ];

  const clientTypes = [
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Real Estate Developers",
      description: "Sustainable water solutions for residential and commercial projects"
    },
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Industries",
      description: "Customized treatment systems for industrial wastewater management"
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Architects & MEPs",
      description: "Integrated design solutions that complement your project vision"
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Facility Managers",
      description: "Reliable, low-maintenance systems for operational excellence"
    }
  ];

  // const benefits = [
  //   "Save water, energy, and operational costs",
  //   "Meet compliance requirements with ease",
  //   "Support net-zero water goals",
  //   "Scalable and space-efficient designs",
  //   "Transform wastewater into a valuable resource"
  // ];

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
              className="inline-block mb-6"
            >
              <Badge variant="secondary" className="px-6 py-2 text-lg font-semibold bg-primary/10 text-primary">
                What We Do
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Restoring Water,<br />
              Reviving Communities,<br />
              Renewing the Planet
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Approach</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                        
                At EcoShudh, we are redefining how communities and industries treat wastewater. 
                We design and deliver next-generation Sewage Treatment Plants (STPs) that go beyond 
                compliance - driving sustainability, efficiency, and long-term value creation.
                
                </p>
                <p>
                  Our solutions are built on <strong className="text-primary">Hybrid Decentralized Wastewater 
                  Treatment Systems Hy-DWTS™</strong> that combine proven natural processes with advanced 
                  engineering. This ensures reliable performance, minimal energy use, and reduced operational costs.
                </p>
                
                <p>
                  We partner with real estate developers, industries, architects, MEP's and facility 
                  managers to create customized STP solutions tailored to their needs. From residential 
                  communities to commercial complexes and industrial facilities, our systems are designed 
                  to be scalable, space-efficient, and future-ready.
                </p>

                <p>
                  By transforming wastewater into a resource, EcoShudh not only helps clients save water, 
                  energy, and money but also supports their journey toward net-zero water and sustainable 
                  development goals.
                </p>

                <motion.div 
                  className="bg-gradient-to-r from-primary/10 to-teal-500/10 p-6 rounded-2xl border border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-primary font-semibold text-xl">
                    In short, we don't just build STP's we build resilient water systems that 
                    regenerate, reuse, and respect nature.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 glass-effect">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {client.icon}
                      </motion.div>
                      <h3 className="font-semibold text-gray-800 mb-2">{client.title}</h3>
                      <p className="text-sm text-gray-600">{client.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose EcoShudh?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions deliver measurable impact across multiple dimensions of sustainability and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-0 glass-effect">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                    <p className="font-medium text-gray-800">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* The EcoShudh Way Section */}
      <section className="px-4 py-20 relative bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">The EcoShudh Way</h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              Discover • Design • Deliver • Empower • Sustain
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step engagement model ensures every project delivers exceptional results 
              from initial consultation to long-term sustainability.
            </p>
          </motion.div>

          {/* Cards in 2x2 grid with 5th card centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First row - 2 cards */}
            {engagementSteps.slice(0, 2).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    <motion.div 
                      className={`bg-gradient-to-r ${step.color} bg-opacity-10 p-3 rounded-lg border-l-4 border-primary`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-semibold text-primary text-sm flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {step.principle}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Second row - 2 cards */}
            {engagementSteps.slice(2, 4).map((step, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    <motion.div 
                      className={`bg-gradient-to-r ${step.color} bg-opacity-10 p-3 rounded-lg border-l-4 border-primary`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-semibold text-primary text-sm flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {step.principle}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Fifth card centered - spans both columns */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="w-full md:w-1/2">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      >
                        {engagementSteps[4].icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{engagementSteps[4].title}</h3>
                        <p className="text-sm text-gray-600">{engagementSteps[4].subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {engagementSteps[4].description}
                    </p>

                    <motion.div 
                      className={`bg-gradient-to-r ${engagementSteps[4].color} bg-opacity-10 p-3 rounded-lg border-l-4 border-primary`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-semibold text-primary text-sm flex items-center gap-2">
                        <ArrowRight className="h-3 w-3" />
                        {engagementSteps[4].principle}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}