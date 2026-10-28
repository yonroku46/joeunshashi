export interface District {
  slug: string;
  name: string;
  fullName: string;
  postalName: string;
  characteristics: string[];
  majorNeighborhoods: string[];
  keyIssues: string[]; // 예: 해풍/염분, 노후 단지 단열 취약, 결로 등
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
