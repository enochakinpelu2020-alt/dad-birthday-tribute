export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Wish {
  id: string;
  name: string;
  location?: string;
  message: string;
  timestamp: string;
}

export interface BiographySection {
  id: string;
  title: string;
  content: string;
}
