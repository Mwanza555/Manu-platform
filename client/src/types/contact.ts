export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email?: string;
  location?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  platform: "instagram" | "facebook" | "linkedin" | "behance" | "website";
}
