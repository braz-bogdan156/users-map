export type User = {
    id: number | string;
    name: string;
    lat: number;
    lon: number;
    interests: string[];
};

// Cluster options
export type ClusterOptions = {
    showCoverageOnHover?: boolean;
    spiderfyOnMaxZoom?: boolean;
    zoomToBoundsOnClick?: boolean;
    disableClusteringAtZoom?: number;
};

export type UserMapViewProps = {
  users: User[];
};
