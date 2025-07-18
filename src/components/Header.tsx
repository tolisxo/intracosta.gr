import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const countryFlagColors: { [key: string]: [string, string?] } = {
  Germany: ['#EAB308', '#FFFFFF'],
  Austria: ['#EAB308', '#FFFFFF'],
  Netherlands: ['#EAB308', '#FFFFFF'],
  Belgium: ['#EAB308', '#FFFFFF'],
  Poland: ['#EAB308', '#FFFFFF'],
  Luxembourg: ['#EAB308', '#FFFFFF'],
  Denmark: ['#EAB308', '#FFFFFF'],
  Greece: ['#EAB308', '#FFFFFF'],
};

const GeographyMap: React.FC = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 150 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  outline: 'none',
                  transition: 'fill 0.3s',
                  fill: countryFlagColors[geo.properties.NAME] ? '#EAB308' : '#e5e7eb',
                  cursor: countryFlagColors[geo.properties.NAME] ? 'pointer' : 'default'
                },
                hover: {
                  fill: countryFlagColors[geo.properties.NAME] ? '#FFFFFF' : '#e5e7eb',
                  stroke: countryFlagColors[geo.properties.NAME] ? '#EAB308' : '#e5e7eb',
                  filter: countryFlagColors[geo.properties.NAME] ? 'brightness(1.05)' : 'brightness(0.95)',
                  transition: 'fill 0.3s'
                },
                pressed: { outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default GeographyMap;