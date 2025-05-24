
import React from "react";
import { X, Calendar, MapPin } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
  event: string;
  location?: string;
}

interface ImageLightboxProps {
  image: GalleryImage;
  onClose: () => void;
}

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
          
          <div className="lg:w-1/3 p-6">
            <h3 className="text-2xl font-bold text-primary mb-4">{image.event}</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{new Date(image.date).toLocaleDateString()}</span>
              </div>
              {image.location && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{image.location}</span>
                </div>
              )}
            </div>
            
            <p className="text-gray-700 leading-relaxed">{image.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
