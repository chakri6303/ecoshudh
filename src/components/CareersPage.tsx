import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Factory, 
  Droplets, 
  Users, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  TrendingUp,
  Leaf,
  Building
} from 'lucide-react';

export default function CareersPage() {
  const careerCategories = [
    {
      title: "Environmental Engineering",
      icon: Factory,
      description: "Technical roles in water treatment and environmental systems",
      jobs: [
        {
          title: "Environmental Engineer",
          company: "Water Treatment Plants",
          location: "Multiple Locations",
          type: "Full-time",
          description: "Work in sewage treatment plants and water purification systems. Design and implement environmental solutions.",
          skills: ["Water Treatment", "Environmental Science", "Process Engineering", "CAD Design"],
          experience: "2-5 years"
        },
        {
          title: "Water Resource Manager",
          company: "Government & Private Sector",
          location: "Various",
          type: "Full-time",
          description: "Manage rivers, lakes, and water supply projects. Develop sustainable water management strategies.",
          skills: ["Hydrology", "Project Management", "GIS", "Policy Development"],
          experience: "3-7 years"
        }
      ]
    },
    {
      title: "Environmental Consulting",
      icon: Briefcase,
      description: "Advisory roles helping organizations with water and pollution solutions",
      jobs: [
        {
          title: "Environmental Consultant",
          company: "Consulting Firms",
          location: "Global",
          type: "Full-time / Contract",
          description: "Provide solutions to companies on water usage and pollution control. Conduct environmental impact assessments.",
          skills: ["Environmental Assessment", "Regulatory Compliance", "Client Relations", "Report Writing"],
          experience: "1-4 years"
        },
        {
          title: "Sustainability Advisor",
          company: "Corporations",
          location: "Remote/Hybrid",
          type: "Full-time",
          description: "Help companies implement sustainable water practices and reduce environmental impact.",
          skills: ["Sustainability Strategy", "Carbon Footprint", "Environmental Auditing", "Stakeholder Engagement"],
          experience: "2-6 years"
        }
      ]
    },
    {
      title: "NGO & International Projects",
      icon: Globe,
      description: "Make a global impact through non-profit and international organizations",
      jobs: [
        {
          title: "Water Program Coordinator",
          company: "UN Water, WWF, UNICEF",
          location: "International",
          type: "Full-time",
          description: "Join global water and eco initiatives. Coordinate international water access and conservation programs.",
          skills: ["Program Management", "International Development", "Community Engagement", "Grant Writing"],
          experience: "2-5 years"
        },
        {
          title: "Environmental Project Manager",
          company: "International NGOs",
          location: "Field-based",
          type: "Full-time",
          description: "Lead environmental conservation projects in developing regions. Focus on water access and sanitation.",
          skills: ["Project Leadership", "Cross-cultural Communication", "Budget Management", "Impact Assessment"],
          experience: "3-8 years"
        }
      ]
    },
    {
      title: "Research & Development",
      icon: GraduationCap,
      description: "Innovative roles in environmental technology and research",
      jobs: [
        {
          title: "Environmental Research Scientist",
          company: "Universities & Research Institutes",
          location: "Academic Centers",
          type: "Full-time",
          description: "Conduct research on water purification technologies and environmental solutions.",
          skills: ["Research Methodology", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
          experience: "PhD preferred"
        },
        {
          title: "Green Technology Developer",
          company: "Tech Startups",
          location: "Innovation Hubs",
          type: "Full-time",
          description: "Develop new technologies for water treatment and environmental monitoring.",
          skills: ["Product Development", "Engineering Design", "Prototyping", "Technology Transfer"],
          experience: "2-6 years"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="water-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Environmental Careers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join the mission for clean water and sustainable environments. Discover rewarding career opportunities 
              in the growing environmental sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">
                <Droplets className="w-4 h-4 mr-2" />
                Water Engineering
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Environmental Science
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Global Impact
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Growing Field
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {careerCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-4">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.jobs.map((job, jobIndex) => (
                    <motion.div
                      key={job.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: jobIndex * 0.1 }}
                    >
                      <Card className="h-full glass-effect card-hover">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                              <CardDescription className="flex items-center text-sm mb-2">
                                <Building className="w-4 h-4 mr-1" />
                                {job.company}
                              </CardDescription>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </span>
                                <Badge variant="outline">{job.type}</Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm">{job.description}</p>
                          
                          <div>
                            <h4 className="font-medium mb-2">Required Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-4">
                            <span className="text-sm text-muted-foreground">
                              Experience: {job.experience}
                            </span>
                            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join EcoShudh's mission to create sustainable water solutions and environmental awareness. 
              Your career can be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-50 border-white"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Team
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Internship Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
