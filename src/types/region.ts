export interface DongInfo {
  slug: string;
  name: string;
  fullName: string;
  districtSlug: string;
  districtName: string;
  regionSlug: string;
  regionName: string;
  characteristics?: string[];
  keyIssues?: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface District {
  slug: string;
  name: string;
  fullName: string;
  postalName: string;
  characteristics: string[];
  majorNeighborhoods: string[];
  keyIssues: string[];
}

export interface ServiceRegion {
  slug: string;
  name: string;
  fullName: string;
  shortName: string;
  metaDescription: string;
  districts: District[];
}

export interface RegionDataset {
  targetRegions: ServiceRegion[];
  primaryContact: {
    regionName: string;
    note: string;
  };
}
