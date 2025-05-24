
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MapComponent = () => {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-lg border relative overflow-hidden">
      {/* Loading skeleton for map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
      </div>
      
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-lg font-medium">Map Loading...</p>
          <p className="text-sm">Interactive map will display here</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
