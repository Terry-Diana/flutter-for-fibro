
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapComponent from "@/components/MapComponent";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DoctorFinder = () => {
  // Mock data for recommended doctors
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Rheumatology",
      rating: 4.8,
      address: "123 Medical Center Dr, City, State 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9AM-5PM",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pain Management",
      rating: 4.9,
      address: "456 Health Plaza, City, State 12345",
      phone: "(555) 987-6543",
      hours: "Mon-Thu: 8AM-6PM, Fri: 8AM-4PM",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Find Recommended Doctors
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with healthcare professionals who understand fibromyalgia and can provide specialized care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Map Component */}
            <div className="order-2 lg:order-1">
              <MapComponent />
            </div>

            {/* Doctor List */}
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Recommended Doctors
              </h2>
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="hover-card">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <p className="text-primary font-medium">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                      <span className="text-sm text-gray-600">{doctor.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{doctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{doctor.hours}</span>
                    </div>
                    <Button className="w-full mt-4">
                      Contact Doctor
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorFinder;
