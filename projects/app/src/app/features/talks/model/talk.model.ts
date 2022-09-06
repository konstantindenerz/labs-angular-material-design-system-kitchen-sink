export interface Talk {
  title: string;
  conference: string;
  startDate: Date;
  endDate: Date;
  location: string;
  country: string;
  bannerImageSrc?: string;
  tags?: string[];
}
