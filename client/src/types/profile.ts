export interface ProfileStat {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  heroTitle?: string;
  heroAccent?: string;
  heroLabel?: string;
  introduction: string;
  location?: string;
  image: string;
  stats: ProfileStat[];
}
