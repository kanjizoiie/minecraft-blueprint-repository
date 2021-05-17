import * as React from "react";

import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import Geolocation from 'ol/Geolocation';
import { Attribution, defaults as defaultControls } from 'ol/control';

import "ol/ol.css";
import "./map.scss";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import CircleStyle from 'ol/style/Circle';
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

interface MapProps { }


export class OpenLayersMap extends React.Component<MapProps, {}> {
  private map: Map;
  private attribution: Attribution;
  private geolocation: Geolocation;


  private mapContainer: HTMLElement;

  constructor(props: any) {
    super(props);
  }


  componentDidMount() {
    let view = new View({
      center: [0, 0],
      zoom: 0.4,
    })
    this.attribution = new Attribution({
      collapsible: true,
    });
    this.map = new Map({
      target: this.mapContainer,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      controls: defaultControls({ attribution: false }).extend([this.attribution]),
      view: view
    });
    this.geolocation = new Geolocation({
      // enableHighAccuracy must be set to true to have the heading value.
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: view.getProjection(),
    });


    let positionFeature = new Feature();

    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2,
          }),
        }),
      })
    );


    this.geolocation.on('change:position', () => {
      let position = this.geolocation ? this.geolocation.getPosition() : [0, 0];

      positionFeature.setGeometry(new Point(position));
      this.map.setView(
        new View({
          center: position,
          zoom: 2,
        })
      )
    });

    new VectorLayer({
      map: this.map,
      source: new VectorSource({
        features: [positionFeature],
      }),
    });

    window.requestAnimationFrame(() => {
      this.map.updateSize();
      this.geolocation.setTracking(true);
    })
  }

  shouldComponentUpdate() {
    return false;
  }


  render() {
    return (<div className="map" ref={(element) => (this.mapContainer = element)}></div>)
  }
}
