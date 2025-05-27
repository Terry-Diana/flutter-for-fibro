
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapComponent from "@/components/MapComponent";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { mockDoctors } from "@/data/mockDoctors";

const DoctorFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [doctors] = useState(mockDoctors);

  const specialties = ["all", "Rheumatology", "Pain Management", "Neurology", "Internal Medicine"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

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

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, specialty, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === "all" ? "All Specialties" : specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Map Component */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <MapComponent />
              </div>
            </div>

            {/* Doctor List */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-primary">
                  {filteredDoctors.length} Doctor{filteredDoctors.length !== 1 ? 's' : ''} Found
                </h2>
              </div>
              
              <div className="space-y-4">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
                    <Button 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedSpecialty("all");
                      }}
                      variant="outline"
                      className="mt-4"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorFinder;
