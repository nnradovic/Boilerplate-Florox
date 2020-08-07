import React, { useRef, useEffect, useState, SyntheticEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContextMenuTrigger from "react-contextmenu/modules/ContextMenuTrigger";
import ContextMenu from "react-contextmenu/modules/ContextMenu";
import MenuItem from "react-contextmenu/modules/MenuItem";
import { Card, Button, Col, Row } from "react-bootstrap";
import { loadModules } from 'esri-loader';

function PipeMapComponent() {
    const mapRef = useRef(null);
    const timeSliderRef = useRef(null);

    const [geoJsonLayerPointChecked, setGeoJsonLayerPointChecked] = useState(true);
    const [geoJsonLayerLineChecked, setGeoJsonLayerLineChecked] = useState(true);
    const [geoJsonLayerPolygonChecked, setGeoJsonLayerPolygonChecked] = useState(true);
    const [wfsLayerChecked, setWfsLayerChecked] = useState(true);

    const [geoJsonPointLayer, setGeoJsonPointLayer] = useState(null);
    const [geoJsonLineLayer, setGeoJsonLineLayer] = useState(null);
    const [geoJsonPolygonLayer, setGeoJsonPolygonLayer] = useState(null);
    const [wfsLayer, setWfsLayer] = useState(null);

    function webMap() {
        const options = {
            url: 'https://js.arcgis.com/3.33/'
        };

        loadModules([
            "esri/arcgis/utils",
            "esri/config",
            "esri/graphic",
            "esri/geometry/Point",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/InfoTemplate",
            "esri/TimeExtent",
            "esri/dijit/TimeSlider"
        ], options).then(([arcgisUtils, esriConfig, Graphic, Point, Symbol, InfoTemplate, TimeExtent, TimeSlider]) => {
            // Add WFS service to corsEnabledServers
            esriConfig.defaults.io.corsEnabledServers.push("https://wfs-poc.azurewebsites.net/");
            esriConfig.defaults.io.corsEnabledServers.push("https://localhost:44350");

            // Create ArcGIS webmap
            const createMapOptions = {
                geometryServiceURL: "https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
            };
            arcgisUtils.createMap("89c11c74217048dbae5cf0daba59343d", "mapDiv", createMapOptions).then(function (response) {

                const map = response.map;
                map.on("click", function (event) {
                    if (event.graphic) {
                        console.log(event.graphic.attributes);
                    } else {
                        console.log('No feature clicked');
                    }
                });
                const testWfsLayer = response.itemInfo.itemData.operationalLayers[1].layerObject;
                setWfsLayer(response.itemInfo.itemData.operationalLayers[1].layerObject);
                const geoJsonLayers = response.itemInfo.itemData.operationalLayers[0].featureCollection.layers;
                setGeoJsonPointLayer(geoJsonLayers[2].layerObject);
                setGeoJsonLineLayer(geoJsonLayers[1].layerObject);
                setGeoJsonPolygonLayer(geoJsonLayers[0].layerObject);

                function initSlider() {
                    var timeSlider = new TimeSlider({
                        style: "width: 100%;"
                    }, timeSliderRef.current);

                    var timeExtent = new TimeExtent();
                    timeExtent.startTime = new Date("1/1/1980 UTC");
                    timeExtent.endTime = new Date("12/31/2009 UTC");
                    timeSlider.setThumbCount(1);
                    timeSlider.createTimeStopsByTimeInterval(timeExtent, 2, "esriTimeUnitsYears");
                    timeSlider.setThumbIndexes([5]);
                    timeSlider.setThumbMovingRate(2000);
                    timeSlider.startup();
                    map.setTimeSlider(timeSlider);

                    var labels = timeSlider.timeStops.map((timeStop, i) => {
                        if (i % 2 === 0) {
                            return timeStop.getUTCFullYear();
                        } else {
                            return "";
                        }
                    });

                    timeSlider.setLabels(labels);

                    timeSlider.on("time-extent-change", (evt) => {
                        var selectedDate = evt.endTime;
                        testWfsLayer.customParameters = { dateTime: selectedDate.toISOString() };
                        testWfsLayer.refresh();
                    });
                }
                initSlider();

                // Create Marker
                var markerSymbol = new Symbol({
                    "color": [0, 255, 0, 64],
                    "size": 90,
                    "angle": 0,
                    "xoffset": 0,
                    "yoffset": 0,
                    "type": "esriSMS",
                    "style": "esriSMSCircle",
                    "outline": {
                        "color": [0, 0, 0, 255],
                        "width": 1,
                        "type": "esriSLS",
                        "style": "esriSLSSolid"
                    }
                });

                // Create InfoTemplate
                const infoTemplate = new InfoTemplate("Attributes", "Test info template ${testAttribute}");

                // Create Graphic
                const pointGraphic = new Graphic(new Point(141412.19, 398535.57), markerSymbol, { testAttribute: "TestValue" }, infoTemplate);

                try {
                    map.graphics.add(pointGraphic);
                }
                catch (ex) {
                    console.log(ex);
                }
            }).catch((error) => console.log(error))
        });
    }

    function handleWfsCheckbox(event) {
        setWfsLayerChecked(event.target.checked);
        event.target.checked ? wfsLayer.show() : wfsLayer.hide();
    }

    function handleGeoJsonCheckbox(event) {
        let layer = null;
        switch (event.target.id) {
            case "geoJsonPointLayerCheckbox":
                setGeoJsonLayerPointChecked(event.target.checked);
                layer = geoJsonPointLayer;
                break;
            case "geoJsonLineLayerCheckbox":
                setGeoJsonLayerLineChecked(event.target.checked);
                layer = geoJsonLineLayer;
                break;
            case "geoJsonPolygonLayerCheckbox":
                setGeoJsonLayerPolygonChecked(event.target.checked);
                layer = geoJsonPolygonLayer;
                break;
        }
        if (layer) {
            event.target.checked ? layer.show() : layer.hide();
        }
    }

    useEffect(() => {
        webMap();
    }, []);

    return (
        <div className="frame">
            <Card className="rounded border-0 border-shadow h-v100-map">
                <Card.Header className="d-flex align-items-center rounded-top h-row text-base">
                    <FontAwesomeIcon icon="search" className="mr-2 muted-text" />
                    <input
                        type="text"
                        id="search"
                        name="fname"
                        className="border-0"
                        placeholder="search"
                    />
                    <div className="ml-auto">
                        <Button className="mr-2">
                            <FontAwesomeIcon
                                icon="filter"
                                className="mr-2 active-text text-primary white"
                            />
                    Filter
                  </Button>
                        <Button
                            variant="link"
                            className="border-0 shadow-none text-base muted-text"
                        >
                            Toggle
                    <FontAwesomeIcon icon="caret-down" className="ml-2 fa-lg" />
                        </Button>
                    </div>
                </Card.Header>
                <ContextMenuTrigger id="same_unique_identifier">
                    <div id="mapDiv" className="map-view h-v100-main" ref={mapRef} >
                        <div id="timeSliderDiv" ref={timeSliderRef}></div>
                    </div>
                    {/* <div>
                        <input id="wfsLayerCheckbox" type="checkbox" checked={wfsLayerChecked} onChange={handleWfsCheckbox} />
                        <label htmlFor="wfsLayerCheckbox">WFS layer (pumps)</label>
                        <br />
                        <input id="geoJsonPointLayerCheckbox" type="checkbox" checked={geoJsonLayerPointChecked} onChange={handleGeoJsonCheckbox} />
                        <label htmlFor="geoJsonPointLayerCheckbox">GeoJSON layer (Point)</label>
                        <br />
                        <input id="geoJsonLineLayerCheckbox" type="checkbox" checked={geoJsonLayerLineChecked} onChange={handleGeoJsonCheckbox} />
                        <label htmlFor="geoJsonLineLayerCheckbox">GeoJSON layer (Line)</label>
                        <br />
                        <input id="geoJsonPolygonLayerCheckbox" type="checkbox" checked={geoJsonLayerPolygonChecked} onChange={handleGeoJsonCheckbox} />
                        <label htmlFor="geoJsonPolygonLayerCheckbox">GeoJSON layer (Polygon)</label>
                    </div> */}
                </ContextMenuTrigger>

            </Card>




            <ContextMenu
                id="same_unique_identifier"
                className="white-bg border-shadow rounded "
            >
                <MenuItem data={{ foo: "bar" }}>
                    <a className="nav-link pr-4" href="/list">
                        <div className="d-flex">
                            <div className="d-flex w-icon mr-2 align-items-center">
                                <FontAwesomeIcon icon="search" className="mr-2 muted-text" />
                            </div>
                            <div className="muted-text pr-2">Action 1</div>
                        </div>
                    </a>
                </MenuItem>
                <MenuItem data={{ foo: "bar" }}>
                    <a className="nav-link pr-4" href="/list">
                        <div className="d-flex">
                            <div className="d-flex w-icon mr-2 align-items-center">
                                <FontAwesomeIcon icon="filter" className="mr-2 muted-text" />
                            </div>
                            <div className="muted-text pr-2">Action 2</div>
                        </div>
                    </a>
                </MenuItem>
            </ContextMenu>
        </div >
    )
}

export default PipeMapComponent