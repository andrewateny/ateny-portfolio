{import React from 'react';
import andrewAsset from "@/assets/andrew.jpg";

export function ProfileAvatar() {
  return (
    <div className="relative inline-block rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20">
      <img 
        src={andrewAsset} 
        alt="Andrew" 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Backup plan: if the asset import fails, load it directly from the folder
          e.currentTarget.src = "/src/assets/andrew.jpg";
        }}
      />
    </div>
  );
}
