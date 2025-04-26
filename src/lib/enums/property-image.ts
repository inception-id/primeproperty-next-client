export type PropertyImageTag = {
  english_label: string;
  indonesian_label: string;
};

export const PROPERTY_IMAGE_TAGS = [
  {
    english_label: "Living Room",
    indonesian_label: "Ruang Tamu",
  },
  {
    english_label: "Dining Room",
    indonesian_label: "Ruang Makan",
  },
  {
    english_label: "Bedroom",
    indonesian_label: "Kamar Tidur",
  },
  {
    english_label: "Bathroom",
    indonesian_label: "Kamar Mandi",
  },
  {
    english_label: "Front View",
    indonesian_label: "Tampak Depan",
  },
  {
    english_label: "Back View",
    indonesian_label: "Halaman Belakang",
  },
  {
    english_label: "Garden",
    indonesian_label: "Taman",
  },
  {
    english_label: "Swimming Pool",
    indonesian_label: "Kolam Renang",
  },
  {
    english_label: "Garage/Carport",
    indonesian_label: "Garasi/Carport",
  },
  {
    english_label: "Others",
    indonesian_label: "Ruang Lainnya",
  },
];

export type PropertyImage = PropertyImageTag & {
  is_cover: boolean;
  object_url: string;
  path: string;
};
