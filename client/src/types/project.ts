export interface Project {
  id: string;
  slug: string;

  title: string;
  category: string;
  year: string;

  shortDescription: string;
  description: string;

  coverImage: string;
  responsiveCover: {
    basePath: string;
    widths: number[];
    width: number;
    height: number;
  };

  gallery: ProjectImage[];

  client?: string;
  services: string[];

  featured?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}
