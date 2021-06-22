## Goal

1. Show custom marker in locations
2. Add popup for the marker

## GeoJSON

**GeoJSON →** open standard file format for representing map data in JSON format. Not mapbox specific, globally accepted, so easy to use the data between multiple types of applications.

Consists of

1. **Feature collection →** _Array of objects._ List of feature objects.
   1. **Feature object →** Contains the geometry object and properties object.
      1. **Geometry object →** either a point, line or polygon. Accepted values are `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, or `MultiPolygon`
      2. **Properties object →** misc data, like name, location, phone number. Can be anything user defined.

## Links

1. Extension - https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer
2. https://docs.mapbox.com/help/glossary/map-loads/
3. Marker API - https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker
