import React from 'react';
import 'leaflet/dist/leaflet.css';
// Default map settings
export const DEFAULT_MAP_SETTINGS = {
  center: [13.7565, 121.0583],
  zoom: 10
};
// Default tile layer URL (OpenStreetMap)
export const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Satellite view
export const SATELLITE_TILE_LAYER_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const SATELLITE_TILE_LAYER_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
// Terrain view
export const TERRAIN_TILE_LAYER_URL = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
export const TERRAIN_TILE_LAYER_ATTRIBUTION = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)';