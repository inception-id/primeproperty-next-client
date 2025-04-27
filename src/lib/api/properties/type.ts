import { TFacility } from "@/lib/enums/facilities";
import { PropertyImage } from "@/lib/enums/property-image";

export type Property = {
  id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
  site_path: string;
  title: string;
  description: string;
  province: string;
  regency: string;
  street: string;
  gmap_iframe: string;
  price: number;
  images: PropertyImage[];
  purchase_status: string;
  sold_status: string;
  measurements: PropertyMeasurements;
  building_type: string;
  building_condition: string;
  building_furniture_capacity: string;
  building_certificate: string;
  specifications: PropertySpecifications;
  facilities: TFacility[];
  is_deleted: boolean;
};

export type PropertyMeasurements = {
  building_area: number;
  building_level: number;
  land_area: number;
};

export type PropertySpecifications = {
  bathrooms: number;
  bedrooms: number;
  carport: number;
  electrical_power: number;
  garage: number;
};
