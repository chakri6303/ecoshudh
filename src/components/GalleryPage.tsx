import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1661405001746-264a95ad6fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHx8cml2ZXIlMjBjbGVhbmluZyUyMGVudmlyb25tZW50YWx8ZW58MXx8fHwxNzU4MDA5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "River Cleanup Initiative",
      description: "Before and after: Community volunteers cleaning polluted riverbanks",
      category: "cleanup"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1564605504543-1833fef7c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwY2xlYW58ZW58MXx8fHwxNzU4MDA5MTU5fDA&ixlib-rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Water Treatment Facility",
      description: "Modern sewage treatment plant installed in rural community",
      category: "treatment"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1632709117255-22050552a49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGNvbnNlcnZhdGlvbiUyMGF3YXJlbmVzc3xlbnwxfHx8fDE3NTgwMDkxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Conservation Awareness",
      description: "Educational campaign reaching over 500 students",
      category: "awareness"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1638556232174-4f001dd04cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXRzJTIwcHVyZSUyMGJsdWV8ZW58MXx8fHwxNzU4MDA5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pure Water Testing",
      description: "Quality testing results showing 99.9% purity achieved",
      category: "testing"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1080",
      title: "Community Workshop",
      description: "Hands-on training for water conservation techniques",
      category: "awareness"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1080",
      title: "Recycling System",
      description: "Innovative water recycling system reducing waste by 80%",
      category: "recycling"
    }
  ];

  const [filter, setFilter] = useState('all');
  const categories = ['all', 'cleanup', 'treatment', 'awareness', 'testing', 'recycling'];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? galleryItems.find(item => item.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Our Work Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documenting our journey towards cleaner water and sustainable communities through 
              visual stories of transformation and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All Projects' : category.replace('-', ' ')}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-12">Impact by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6">
                <CardContent>
                  <div className="text-3xl text-primary mb-2">2.5M</div>
                  <p>Liters Water Purified</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent>
                  <div className="text-3xl text-primary mb-2">150+</div>
                  <p>Families Benefited</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent>
                  <div className="text-3xl text-primary mb-2">12</div>
                  <p>Water Bodies Cleaned</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent>
                  <div className="text-3xl text-primary mb-2">500+</div>
                  <p>Students Educated</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Gallery Image</DialogTitle>
          </DialogHeader>
          {selectedImageData && (
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/90"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90"
                onClick={() => navigateLightbox('prev')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90"
                onClick={() => navigateLightbox('next')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <ImageWithFallback
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full h-[60vh] object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-2xl mb-2">{selectedImageData.title}</h3>
                <p className="text-muted-foreground">{selectedImageData.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
