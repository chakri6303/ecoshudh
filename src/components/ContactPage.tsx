import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    organization: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.organization || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    // Simulate form submission
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      designation: '',
      organization: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "contact@EcoShudh.org",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Mumbai, Maharashtra",
      description: "Visit our main office"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join our mission for cleaner water? We'd love to hear from you. 
              Reach out to learn more about our projects or to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Input
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="Your role (optional)"
                        className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Your organization name"
                        required
                        className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interest in our work or how you'd like to get involved..."
                      rows={6}
                      required
                      className="border-2 border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="default"
                    style={{ backgroundColor: '#14532d' }}
                    className="w-full hover:opacity-90 text-white font-semibold" 
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <CardContent>
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg mb-1">{info.title}</h3>
                          <p className="text-foreground mb-1">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="p-6 bg-primary text-white">
              <CardContent>
                <h3 className="text-lg mb-3">Ready to Make a Difference?</h3>
                <p className="mb-4 text-primary-foreground/90">
                  Join our network of partners who are committed to creating a sustainable 
                  and clean future for all communities.
                </p>
                <Button variant="secondary" className="w-full">
                  Become a Clean Future Partner
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Map Section 
      <section className="px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      */}
    </div>
  );
}
