import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">EcoShudh</span>
            </div>
            <p className="text-gray-300">
              Voice for Pure Water - Creating sustainable solutions for water conservation and purity.
            </p>
            <p className="text-sm text-gray-400">
              Every Drop Counts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => onPageChange('home')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => onPageChange('about')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => onPageChange('gallery')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => onPageChange('contact')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Our Focus */}
          <div>
            <h3 className="text-lg mb-4">Our Focus</h3>
            <div className="space-y-2 text-gray-300">
              <p>Sewage Treatment</p>
              <p>Water Recycling</p>
              <p>River/Lake Cleaning</p>
              <p>Awareness Campaigns</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@EcoShudh.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 EcoShudh. All rights reserved. | Making every drop count for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
}
