
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { Calendar, MapPin } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
  event: string;
  location?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Mock gallery data
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
      alt: "Community support meeting",
      caption: "Our monthly support group meeting where members shared their experiences and coping strategies.",
      date: "2024-01-15",
      event: "Support Group Meeting",
      location: "Community Center"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      alt: "Awareness workshop",
      caption: "Educational workshop about fibromyalgia symptoms and treatment options.",
      date: "2024-02-20",
      event: "Awareness Workshop",
      location: "Medical Center"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
      alt: "Gentle yoga session",
      caption: "Therapeutic yoga session designed specifically for fibromyalgia patients.",
      date: "2024-03-10",
      event: "Healing Yoga",
      location: "Wellness Studio"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800",
      alt: "Community walk",
      caption: "Nature walk to promote gentle exercise and community bonding.",
      date: "2024-03-25",
      event: "Community Walk",
      location: "City Park"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Community Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Moments from our community events, support groups, and awareness activities.
            </p>
          </div>

          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg mb-2">{image.event}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(image.date).toLocaleDateString()}
                      </div>
                      {image.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {image.location}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty state
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  No Events Yet
                </h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting community events. Join our next event to be part of our growing gallery!
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Join Our Next Event!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
