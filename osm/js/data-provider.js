/**
 * Created by yuriy.horobey on 25-Apr-16.
 */
//todo: replace with ajax to http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson
function DataProvider(_onUpdatedCallback) {
    var __FAKED_DATA__ = {
        "type": "FeatureCollection",
        "metadata": {
            "generated": 1461606743000,
            "url": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson",
            "title": "USGS Significant Earthquakes, Past Month",
            "status": 200,
            "api": "1.5.2",
            "count": 12
        },
        "features": [{
            "type": "Feature",
            "properties": {
                "mag": 7.8,
                "place": "27km SSE of Muisne, Ecuador",
                "time": 1460851117280,
                "updated": 1461091767134,
                "tz": -300,
                "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005j32",
                "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005j32.geojson",
                "felt": 149,
                "cdi": 9.1,
                "mmi": 8.1,
                "alert": "orange",
                "status": "reviewed",
                "tsunami": 1,
                "sig": 1136,
                "net": "us",
                "code": "20005j32",
                "ids": ",at00o5r3xd,us20005j32,pt16107050,gcmt20160416235837,",
                "sources": ",at,us,pt,gcmt,",
                "types": ",cap,dyfi,finite-fault,general-link,general-text,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,poster,shakemap,tectonic-summary,",
                "nst": null,
                "dmin": 2.139,
                "rms": 1,
                "gap": 41,
                "magType": "mww",
                "type": "earthquake",
                "title": "M 7.8 - 27km SSE of Muisne, Ecuador"
            },
            "geometry": {"type": "Point", "coordinates": [-79.9398, 0.3715, 19.16]},
            "id": "us20005j32"
        },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.7,
                    "place": "2km NW of Ozu, Japan",
                    "time": 1460738756630,
                    "updated": 1460760920000,
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005ija",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005ija.geojson",
                    "felt": 1,
                    "cdi": 3.4,
                    "mmi": 6.77,
                    "alert": "yellow",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 650,
                    "net": "us",
                    "code": "20005ija",
                    "ids": ",us20005ija,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 2.675,
                    "rms": 1.03,
                    "gap": 61,
                    "magType": "mb",
                    "type": "earthquake",
                    "title": "M 5.7 - 2km NW of Ozu, Japan"
                },
                "geometry": {"type": "Point", "coordinates": [130.8463, 32.8805, 10]},
                "id": "us20005ija"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 7,
                    "place": "1km WSW of Kumamoto-shi, Japan",
                    "time": 1460737506260,
                    "updated": 1460997743154,
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005iis",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005iis.geojson",
                    "felt": 57,
                    "cdi": 8.5,
                    "mmi": 9.33,
                    "alert": "red",
                    "status": "reviewed",
                    "tsunami": 1,
                    "sig": 2048,
                    "net": "us",
                    "code": "20005iis",
                    "ids": ",at00o5oo9v,pt16106053,us20005iis,gcmt20160415162506,",
                    "sources": ",at,pt,us,gcmt,",
                    "types": ",cap,dyfi,finite-fault,general-link,general-text,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,poster,scitech-link,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 0.364,
                    "rms": 1.12,
                    "gap": 39,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 7.0 - 1km WSW of Kumamoto-shi, Japan"
                },
                "geometry": {"type": "Point", "coordinates": [130.7259, 32.782, 10]},
                "id": "us20005iis"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.4,
                    "place": "95km NW of Port-Olry, Vanuatu",
                    "time": 1460670627630,
                    "updated": 1460695768036,
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005i6p",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005i6p.geojson",
                    "felt": 1,
                    "cdi": 6.1,
                    "mmi": 6.39,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 1,
                    "sig": 631,
                    "net": "us",
                    "code": "20005i6p",
                    "ids": ",pt16105055,at00o5n8ns,us20005i6p,gcmt20160414215026,",
                    "sources": ",pt,at,us,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-link,impact-text,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 1.233,
                    "rms": 1.09,
                    "gap": 23,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.4 - 95km NW of Port-Olry, Vanuatu"
                },
                "geometry": {"type": "Point", "coordinates": [166.3518, -14.5225, 16]},
                "id": "us20005i6p"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6,
                    "place": "6km E of Uto, Japan",
                    "time": 1460646226920,
                    "updated": 1460731124540,
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005i1a",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005i1a.geojson",
                    "felt": 7,
                    "cdi": 4.8,
                    "mmi": 7.68,
                    "alert": "yellow",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 653,
                    "net": "us",
                    "code": "20005i1a",
                    "ids": ",us20005i1a,gcmt20160414150347,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-text,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 0.447,
                    "rms": 0.87,
                    "gap": 32,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.0 - 6km E of Uto, Japan"
                },
                "geometry": {"type": "Point", "coordinates": [130.732, 32.6934, 5.96]},
                "id": "us20005i1a"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.2,
                    "place": "7km SW of Ueki, Japan",
                    "time": 1460636796430,
                    "updated": 1460989611601,
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005hzn",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005hzn.geojson",
                    "felt": 28,
                    "cdi": 7.9,
                    "mmi": 8.39,
                    "alert": "red",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 2022,
                    "net": "us",
                    "code": "20005hzn",
                    "ids": ",us20005hzn,gcmt20160414122636,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,general-link,general-text,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,poster,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 0.342,
                    "rms": 1.23,
                    "gap": 17,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.2 - 7km SW of Ueki, Japan"
                },
                "geometry": {"type": "Point", "coordinates": [130.6345, 32.8494, 10]},
                "id": "us20005hzn"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.9,
                    "place": "74km SE of Mawlaik, Burma",
                    "time": 1460555717870,
                    "updated": 1460651201046,
                    "tz": 390,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005hqz",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005hqz.geojson",
                    "felt": 286,
                    "cdi": 5.9,
                    "mmi": 5.9,
                    "alert": "yellow",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 901,
                    "net": "us",
                    "code": "20005hqz",
                    "ids": ",us20005hqz,gcmt20160413135517,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,general-text,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 3.684,
                    "rms": 1.17,
                    "gap": 23,
                    "magType": "mwb",
                    "type": "earthquake",
                    "title": "M 6.9 - 74km SE of Mawlaik, Burma"
                },
                "geometry": {"type": "Point", "coordinates": [94.8995, 23.1329, 134.76]},
                "id": "us20005hqz"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.6,
                    "place": "42km WSW of Ashkasham, Afghanistan",
                    "time": 1460284138660,
                    "updated": 1461326799686,
                    "tz": 270,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005gsg",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005gsg.geojson",
                    "felt": 117,
                    "cdi": 5.8,
                    "mmi": 4.41,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 738,
                    "net": "us",
                    "code": "20005gsg",
                    "ids": ",us20005gsg,gcmt20160410102858,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-text,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 0.792,
                    "rms": 1.03,
                    "gap": 17,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.6 - 42km WSW of Ashkasham, Afghanistan"
                },
                "geometry": {"type": "Point", "coordinates": [71.1357, 36.4709, 211.59]},
                "id": "us20005gsg"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.7,
                    "place": "106km W of Sola, Vanuatu",
                    "time": 1459999973790,
                    "updated": 1460152502000,
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005fzn",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005fzn.geojson",
                    "felt": 2,
                    "cdi": 6.6,
                    "mmi": 5.17,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 1,
                    "sig": 692,
                    "net": "us",
                    "code": "20005fzn",
                    "ids": ",at00o58v6w,us20005fzn,pt16098051,gcmt20160407033253,",
                    "sources": ",at,us,pt,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 6.775,
                    "rms": 0.93,
                    "gap": 25,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.7 - 106km W of Sola, Vanuatu"
                },
                "geometry": {"type": "Point", "coordinates": [166.5711, -13.9942, 26.79]},
                "id": "us20005fzn"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.7,
                    "place": "105km WSW of Sola, Vanuatu",
                    "time": 1459925928770,
                    "updated": 1459959326934,
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005fsi",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005fsi.geojson",
                    "felt": 1,
                    "cdi": 6.5,
                    "mmi": 5.26,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 1,
                    "sig": 691,
                    "net": "us",
                    "code": "20005fsi",
                    "ids": ",pt16097050,at00o57a23,us20005fsi,gcmt20160406065850,",
                    "sources": ",pt,at,us,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 6.686,
                    "rms": 1.36,
                    "gap": 19,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.7 - 105km WSW of Sola, Vanuatu"
                },
                "geometry": {"type": "Point", "coordinates": [166.5981, -14.0821, 24]},
                "id": "us20005fsi"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 6.9,
                    "place": "81km NNW of Port-Olry, Vanuatu",
                    "time": 1459671833800,
                    "updated": 1459720168213,
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005e8t",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005e8t.geojson",
                    "felt": 3,
                    "cdi": 6.5,
                    "mmi": 6.71,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 1,
                    "sig": 734,
                    "net": "us",
                    "code": "20005e8t",
                    "ids": ",at00o51tzt,pt16094050,us20005e8t,gcmt20160403082353,",
                    "sources": ",at,pt,us,gcmt,",
                    "types": ",cap,dyfi,geoserve,impact-link,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 1.149,
                    "rms": 1.41,
                    "gap": 28,
                    "magType": "mww",
                    "type": "earthquake",
                    "title": "M 6.9 - 81km NNW of Port-Olry, Vanuatu"
                },
                "geometry": {"type": "Point", "coordinates": [166.8205, -14.3519, 35]},
                "id": "us20005e8t"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.2,
                    "place": "5km NNE of Crescent, Oklahoma",
                    "time": 1459227181180,
                    "updated": 1459683999957,
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/us20005d3n",
                    "detail": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20005d3n.geojson",
                    "felt": 719,
                    "cdi": 5.3,
                    "mmi": 4.73,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": 0,
                    "sig": 652,
                    "net": "us",
                    "code": "20005d3n",
                    "ids": ",us20005d3n,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": 0.168,
                    "rms": 0.48,
                    "gap": 100,
                    "magType": "mwr",
                    "type": "earthquake",
                    "title": "M 4.2 - 5km NNE of Crescent, Oklahoma"
                },
                "geometry": {"type": "Point", "coordinates": [-97.575, 35.9951, 4.94]},
                "id": "us20005d3n"
            }],
        "bbox": [-97.575, -14.5225, 4.94, 166.8205, 36.4709, 211.59]
    }
    if (typeof _onUpdatedCallback === 'function') {
        _onUpdatedCallback(__FAKED_DATA__);
    }
};