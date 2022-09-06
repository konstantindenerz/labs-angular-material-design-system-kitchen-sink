export interface Talk {
  title: string;
  conference: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  bannerImageSrc?: string;
  tags?: string[];
}
