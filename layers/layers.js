var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_waterbody_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "water_body",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "water body",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_waterbody_1, 1]);
var lyr_cropfieldboundaries_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "crop_field_boundaries",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "crop field boundaries",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_cropfieldboundaries_2, 1]);
var lyr_barren_land_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "barren_land",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "barren_land",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_barren_land_3, 1]);
var lyr_crop_type_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "crop_type",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "crop_type",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_crop_type_4, 1]);
var lyr_soil_type_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "soil_type",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "soil_type",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_soil_type_5, 1]);
var lyr_fertilizershops_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "fertilizer_shops",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "fertilizer shops",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_fertilizershops_6, 1]);
var lyr_roadnetwork_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "road_network",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "road network",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_roadnetwork_7, 1]);
var lyr_procurement_area_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "procurement_area",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "procurement_area",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_procurement_area_8, 1]);
var lyr_ponds_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ponds",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "ponds",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ponds_9, 1]);
var lyr_panchayathoffice_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "panchayath_office",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "panchayath office",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_panchayathoffice_10, 1]);
var lyr_industryboundaries_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "industry_boundaries",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "industry boundaries",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_industryboundaries_11, 1]);
var lyr_irrigationnetwork_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "irrigation_network",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "irrigation network",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_irrigationnetwork_12, 1]);
var lyr_buyers_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "buyers",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "buyers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_buyers_13, 1]);
var lyr_height_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "height",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "height",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_height_14, 1]);
var lyr_convertible_barren_land_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "convertible_barren_land",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "convertible_barren_land",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_convertible_barren_land_15, 1]);
var lyr_bestagriculturallands_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "best_agricultural_lands",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "best agricultural lands",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_bestagriculturallands_16, 1]);
var lyr_agri_lands_easily_accessible_via_roads_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "agri_lands_easily_accessible_via_roads",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "agri_lands_easily_accessible_via_roads",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_agri_lands_easily_accessible_via_roads_17, 1]);
var lyr_banana_analysis_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "banana_analysis",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "banana_analysis",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_banana_analysis_18, 1]);
var lyr_wheat_analysis_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "wheat_analysis",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "wheat_analysis",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_wheat_analysis_19, 1]);
var lyr_maize_analysis_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "maize_analysis",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "maize_analysis",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_maize_analysis_20, 1]);
var lyr_paddy_analysis_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Agro_estimate/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "paddy_analysis",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "paddy_analysis",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_paddy_analysis_21, 1]);

lyr_GoogleHybrid_0.setVisible(true);lyr_waterbody_1.setVisible(true);lyr_cropfieldboundaries_2.setVisible(true);lyr_barren_land_3.setVisible(true);lyr_crop_type_4.setVisible(false);lyr_soil_type_5.setVisible(false);lyr_fertilizershops_6.setVisible(false);lyr_roadnetwork_7.setVisible(true);lyr_procurement_area_8.setVisible(false);lyr_ponds_9.setVisible(false);lyr_panchayathoffice_10.setVisible(false);lyr_industryboundaries_11.setVisible(false);lyr_irrigationnetwork_12.setVisible(true);lyr_buyers_13.setVisible(false);lyr_height_14.setVisible(false);lyr_convertible_barren_land_15.setVisible(false);lyr_bestagriculturallands_16.setVisible(false);lyr_agri_lands_easily_accessible_via_roads_17.setVisible(false);lyr_banana_analysis_18.setVisible(false);lyr_wheat_analysis_19.setVisible(false);lyr_maize_analysis_20.setVisible(false);lyr_paddy_analysis_21.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_waterbody_1,lyr_cropfieldboundaries_2,lyr_barren_land_3,lyr_crop_type_4,lyr_soil_type_5,lyr_fertilizershops_6,lyr_roadnetwork_7,lyr_procurement_area_8,lyr_ponds_9,lyr_panchayathoffice_10,lyr_industryboundaries_11,lyr_irrigationnetwork_12,lyr_buyers_13,lyr_height_14,lyr_convertible_barren_land_15,lyr_bestagriculturallands_16,lyr_agri_lands_easily_accessible_via_roads_17,lyr_banana_analysis_18,lyr_wheat_analysis_19,lyr_maize_analysis_20,lyr_paddy_analysis_21];

document.getElementById("itemSelectionDropdown").addEventListener("change", function() {
  var selectedAnalysis = document.getElementById("itemSelectionDropdown").value;
  showSelectedLayer(selectedAnalysis);
});

function showSelectedLayer(selectedAnalysis) {
  var analysisLayers = {
      "paddy": "paddy_analysis",
      "wheat": "wheat_analysis",
      "banana": "banana_analysis",
      "maize": "maize_analysis",
      "bestAgri": "best agricultural lands",
      "easyAccess": "agri_lands_easily_accessible_via_roads",
      "convertible": "convertible_barren_land"
  };

  layersList.forEach(function(layer) {
      if (layer.get('title') === analysisLayers[selectedAnalysis]) {
          layer.setVisible(true);
      } 
      // else {
      //     layer.setVisible(false);
      // }
  });
}
