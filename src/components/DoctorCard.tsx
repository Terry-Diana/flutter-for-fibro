
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, Award, Users } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  hours: string;
  location: string;
  experience: string;
  languages: string[];
  image: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="hover-card">
      <CardHeader>
        <div className="flex items-start gap-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-primary mb-1">
              {doctor.name}
            </CardTitle>
            <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{doctor.rating}</span>
                <span>({doctor.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>{doctor.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
          <span className="text-sm text-gray-600">{doctor.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">{doctor.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">{doctor.hours}</span>
        </div>
        {doctor.languages.length > 0 && (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              Languages: {doctor.languages.join(", ")}
            </span>
          </div>
        )}
        <div className="flex gap-2 pt-2">
          <Button className="flex-1">
            Contact Doctor
          </Button>
          <Button variant="outline">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
