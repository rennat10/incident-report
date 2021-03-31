var map;
var service;
var prevInfoWindow = false;

var table;

function initMap() {
    var directionsService = new google.maps.DirectionsService;

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: -7.279268, lng: 112.797217}
    });
    var listRoute = []

    // table = $('#rekap').DataTable({
    //     "scrollX": true
    // });

    // rekapData = table.rows().data();

    // for(var i = 0; i < rekapData.length; i++) {
    //     //console.log(rekapData[i])

    //     originLatLng = rekapData[i][11].split(",");
    //     listRoute.push(
    //         {
    //             routeOrigin: rekapData[i][5],
    //             originAddress: rekapData[i][8],
    //             originLat: parseFloat(originLatLng[0]),
    //             originLng: parseFloat(originLatLng[1]),
    //             incidentMessage: rekapData[i][2],
    //             incidentType: rekapData[i][4]
    //         }
    //     )

    //     if(rekapData[i][6] == '-' || rekapData[i][6] == rekapData[i][5]){
    //         listRoute[i]["routeDestination"] = '-';
    //         listRoute[i]["destinationAddress"] = '-';
    //         listRoute[i]['destinationLat'] = '-';
    //         listRoute[i]['destinationLng'] = '-';
    //     }
    //     else{
    //         destinationLatLng = rekapData[i][12].split(",");

    //         listRoute[i]["routeDestination"] = rekapData[i][6];
    //         listRoute[i]["destinationAddress"] = rekapData[i][9];
    //         listRoute[i]['destinationLat'] = parseFloat(destinationLatLng[0]);
    //         listRoute[i]['destinationLng'] = parseFloat(destinationLatLng[1]);
    //     }

    //     if(rekapData[i][7] == '-'){
    //         listRoute[i]["routeWay"] = '-';
    //         listRoute[i]["wayAddress"] = '-';
    //         listRoute[i]['wayLat'] = '-';
    //         listRoute[i]['wayLng'] = '-';
    //     }
    //     else{
    //         var routeWays = [];
    //         var waysAddress = [];
    //         var waysLat = [];
    //         var waysLng = [];

    //         $(rekapData[i][7]).find('li').each(function (i, e) {
    //             routeWays.push($(e).text());
    //         });

    //         $(rekapData[i][10]).find('li').each(function (i, e) {
    //             waysAddress.push($(e).text());
    //         });

    //         $(rekapData[i][13]).find('li').each(function (i, e) {
    //             wayLatLng = $(e).text().split(',');
    //             waysLat.push(parseFloat(wayLatLng[0]));
    //             waysLng.push(parseFloat(wayLatLng[1]));
    //         });

    //         listRoute[i]["routeWay"] = routeWays;
    //         listRoute[i]["wayAddress"] = waysAddress;
    //         listRoute[i]['wayLat'] = waysLat;
    //         listRoute[i]['wayLng'] = waysLng;
    //     }
    // }


    // for(var i = 0; i < listRoute.length; i++) {

    //     var cnt = 1;
    //     if(listRoute[i]['routeDestination'] != '-'){
    //         cnt += 1;
    //     }
    //     if(listRoute[i]['routeWay'] != '-'){
    //         cnt += listRoute[i]['routeWay'].length;
    //     }

    //     if(cnt == 1){
    //         displayOnePosition(listRoute[i]);
    //     }
    //     else if(cnt == 2){
    //         newRoute = [];
    //         newRoute["routeOrigin"] = listRoute[i]["routeOrigin"];
    //         newRoute["originAddress"] = listRoute[i]["originAddress"];
    //         newRoute["originLat"] = listRoute[i]["originLat"];
    //         newRoute["originLng"] = listRoute[i]["originLng"];
    //         newRoute["incidentMessage"] = listRoute[i]["incidentMessage"];
    //         newRoute["incidentType"] = listRoute[i]["incidentType"]; 
            
    //         if(listRoute[i]["routeDestination"] != '-'){
    //             newRoute["routeDestination"] = listRoute[i]["routeDestination"];
    //             newRoute["destinationAddress"] = listRoute[i]["destinationAddress"];
    //             newRoute["destinationLat"] = listRoute[i]['destinationLat'];
    //             newRoute["destinationLng"] = listRoute[i]['destinationLng'];
    //         }
    //         else{
    //             newRoute["routeDestination"] = listRoute[i]["routeWay"][0];
    //             newRoute["destinationAddress"] = listRoute[i]["wayAddress"][0];
    //             newRoute["destinationLat"] = listRoute[i]['wayLat'][0];
    //             newRoute["destinationLng"] = listRoute[i]['wayLng'][0];
    //         }

    //         var directionsDisplay = new google.maps.DirectionsRenderer({
    //             polylineOptions: {
    //                 strokeColor: "red",
    //                 strokeOpacity: 0.8,
    //                 strokeWeight: 4
    //             },
    //             suppressMarkers: true
    //         });
    
    //         directionsDisplay.setMap(map);
    //         displayTwoPosition(directionsService, directionsDisplay, newRoute);
    //     }
    //     else if(cnt >= 3){
    //         newRoute = [];
    //         newRoute["routeOrigin"] = listRoute[i]["routeOrigin"];
    //         newRoute["originAddress"] = listRoute[i]["originAddress"];
    //         newRoute["originLat"] = listRoute[i]["originLat"];
    //         newRoute["originLng"] = listRoute[i]["originLng"];
    //         newRoute["incidentMessage"] = listRoute[i]["incidentMessage"];
    //         newRoute["incidentType"] = listRoute[i]["incidentType"];

    //         if(listRoute[i]["routeDestination"] != '-'){
    //             newRoute["routeDestination"] = listRoute[i]["routeDestination"];
    //             newRoute["destinationAddress"] = listRoute[i]["destinationAddress"];
    //             newRoute["destinationLat"] = listRoute[i]['destinationLat'];
    //             newRoute["destinationLng"] = listRoute[i]['destinationLng'];

    //             newRoute["routeWay"] = listRoute[i]["routeWay"];
    //             newRoute["wayAddress"] = listRoute[i]["wayAddress"];
    //             newRoute["wayLat"] = listRoute[i]['wayLat'];
    //             newRoute["wayLng"] = listRoute[i]['wayLng'];
    //         }
    //         else{
    //             ways = [];
    //             for(j = 0; j < listRoute[i]["routeWay"].length; j++){
    //                 ways.push(
    //                     {
    //                         routeWay: listRoute[i]["routeWay"][j],
    //                         wayAddress: listRoute[i]["wayAddress"][j],
    //                         wayLat: listRoute[i]["wayLat"][j],
    //                         wayLng: listRoute[i]["wayLng"][j]
    //                     }
    //                 )
    //             }

    //             for(j = 0; j < ways.length; j++){
    //                 ways[j]["distance"] = calculateDistance(newRoute["originLat"], newRoute["originLng"], 
    //                                                         ways[j]["wayLat"], ways[j]["wayLng"]);
    //             }

    //             ways.sort(function(a, b) { 
    //                 return a.distance - b.distance;
    //             });
                
    //             newRoute["routeDestination"] = ways[ways.length - 1]["routeWay"];
    //             newRoute["destinationAddress"] = ways[ways.length - 1]["wayAddress"];
    //             newRoute["destinationLat"] = ways[ways.length - 1]['wayLat'];
    //             newRoute["destinationLng"] = ways[ways.length - 1]['wayLng'];

    //             newRoute["routeWay"] = [];
    //             newRoute["wayAddress"] = [];
    //             newRoute["wayLat"] = [];
    //             newRoute["wayLng"] = [];

    //             for(j = 0; j < ways.length-1; j++){
    //                 newRoute["routeWay"].push(ways[j]["routeWay"]);
    //                 newRoute["wayAddress"].push(ways[j]["wayAddress"]);
    //                 newRoute["wayLat"].push(ways[j]["wayLat"]);
    //                 newRoute["wayLng"].push(ways[j]["wayLng"]);
    //             }
    //         }

    //         var directionsDisplay = new google.maps.DirectionsRenderer({
    //             polylineOptions: {
    //                 strokeColor: "red",
    //                 strokeOpacity: 0.8,
    //                 strokeWeight: 4
    //             },
    //             suppressMarkers: true
    //         });
    
    //         directionsDisplay.setMap(map);
    //         displayManyPositions(directionsService, directionsDisplay, newRoute);

    //     }
        
    // }
    
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    
    var theta = lng1-lng2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344

    return dist
}

function getMarkerImage(incidentType) {
    if(incidentType == "Lalu-Lintas"){
        icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/yellow.png",
            size: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32),
            labelOrigin: new google.maps.Point(16, 10)
        }
    }
    else if(incidentType == "Kebakaran"){
        icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/red.png",
            size: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32),
            labelOrigin: new google.maps.Point(16, 10)
        }
    }
    else if(incidentType == "Bencana-Alam"){
        icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/green.png",
            size: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32),
            labelOrigin: new google.maps.Point(16, 10)
        }
    }
    else if(incidentType == "Lain-Lain") {
        icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/grey.png",
            size: new google.maps.Size(32, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(16, 32),
            labelOrigin: new google.maps.Point(16, 10)
        }
    }

    return icon;
}

function getDirectionColor(incidentType) {
    if(incidentType == "Lalu-Lintas"){
        return "yellow";
    }
    else if(incidentType == "Kebakaran"){
        return "red";
    }
    else if(incidentType == "Bencana-Alam"){
        return "green";
    }
    else if(incidentType == "Lain-Lain"){
        return "grey";
    }
}

function displayOnePosition(route){
    var contentStringStart = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<div class="firstHeading">' + 
                                '<h5>'+ route.routeOrigin +'</h5>'+
                                '<p><b>'+ route.originAddress + '</b></p>' +
                            '</div>' + 
                            '<div id="bodyContent">'+
                                '<p>' + route.incidentMessage + '</p>'+
                            '</div>'+
                        '</div>';

    var infoWindowStart = new google.maps.InfoWindow({
        content: contentStringStart
    });

    var startMarker = new google.maps.Marker({
        position: {lat: route.originLat, lng: route.originLng},
        map: map,
        icon: getMarkerImage(route.incidentType),
        title: route.routeOrigin
    });

    startMarker.addListener('click', function() {
        if(prevInfoWindow) {
            prevInfoWindow.close();
        }
    
        prevInfoWindow = infoWindowStart;

        infoWindowStart.open(map, startMarker);
        infoWindowStart.setZIndex(1000);
    });

    // var infoWindow = new google.maps.InfoWindow();
    // infoWindow.setContent(route.incidentMessage);
    // infoWindow.setPosition({lat: route.originLat, lng: route.originLng});
    // infoWindow.open(map, startMarker);
}

function displayTwoPosition(directionsService, directionsDisplay, route) {

    directionsService.route({
        origin: {lat: route.originLat, lng: route.originLng},
        destination: {lat: route.destinationLat, lng: route.destinationLng},
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);

            var leg = response.routes[0].legs[0];

            var contentStringStart = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<div class="firstHeading">' + 
                                        '<h5>'+ route.routeOrigin +'</h5>'+
                                        '<p><b>'+ leg.start_address + '</b></p>' +
                                    '</div>' + 
                                    '<div id="bodyContent">'+
                                        '<p>' + route.incidentMessage + '</p>'+
                                    '</div>'+
                                '</div>';

            var infoWindowStart = new google.maps.InfoWindow({
                content: contentStringStart
            });

            var contentStringEnd = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<div class="firstHeading">' + 
                                        '<h5>'+ route.routeDestination +'</h5>'+
                                        '<p><b>'+ leg.end_address + '</b></p>' +
                                    '</div>' + 
                                    '<div id="bodyContent">'+
                                        '<p>' + route.incidentMessage + '</p>'+
                                    '</div>'+
                                '</div>';

            var infoWindowEnd = new google.maps.InfoWindow({
                content: contentStringEnd
            });

            var startMarker = new google.maps.Marker({
                position: leg.start_location,
                map: map,
                icon: getMarkerImage(route.incidentType),
                label: 'S',
                title: route.routeOrigin
            });

            var endMarker = new google.maps.Marker({
                position: leg.end_location,
                map: map,
                icon: getMarkerImage(route.incidentType),
                label: 'D',
                title: route.routeDestination
            });

            startMarker.addListener('click', function() {
                if(prevInfoWindow) {
                    prevInfoWindow.close();
                }
         
                prevInfoWindow = infoWindowStart;

                infoWindowStart.open(map, startMarker);
                infoWindowStart.setZIndex(1000);
            });

            endMarker.addListener('click', function() {
                if(prevInfoWindow) {
                    prevInfoWindow.close();
                }
         
                prevInfoWindow = infoWindowEnd;

                infoWindowEnd.open(map, endMarker);
                infoWindowEnd.setZIndex(1000);
            });

            var center_point = response.routes[0].overview_path.length/2;

            // var infowindow = new google.maps.InfoWindow();
            // infowindow.setContent(route.incidentMessage);
            // infowindow.setPosition(response.routes[0].overview_path[center_point|0]);
            // infowindow.open(map);
        
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });

}

function displayManyPositions(directionsService, directionsDisplay, route){
    var waypts = [];
    for(i = 0; i < route["routeWay"].length; i++){
        waypts.push({
            location: route["routeWay"][i],
            stopover: true
        });
    }

    directionsService.route({
        origin: {lat: route.originLat, lng: route.originLng},
        destination: {lat: route.destinationLat, lng: route.destinationLng},
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'

    }, function(response, status){
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var leg = response.routes[0].legs[0];

            console.log(leg);

            var contentStringStart = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<div class="firstHeading">' + 
                                        '<h5>'+ route.routeOrigin +'</h5>'+
                                        '<p><b>'+ leg.start_address + '</b></p>' +
                                    '</div>' + 
                                    '<div id="bodyContent">'+
                                        '<p>' + route.incidentMessage + '</p>'+
                                    '</div>'+
                                '</div>';

            var infoWindowStart = new google.maps.InfoWindow({
                content: contentStringStart
            });

            var contentStringEnd = '<div id="content">'+
                                    '<div id="siteNotice">'+
                                    '</div>'+
                                    '<div class="firstHeading">' + 
                                        '<h5>'+ route.routeDestination +'</h5>'+
                                        '<p><b>'+ leg.end_address + '</b></p>' +
                                    '</div>' + 
                                    '<div id="bodyContent">'+
                                        '<p>' + route.incidentMessage + '</p>'+
                                    '</div>'+
                                '</div>';

            var infoWindowEnd = new google.maps.InfoWindow({
                content: contentStringEnd
            });

            var startMarker = new google.maps.Marker({
                position: leg.start_location,
                map: map,
                icon: getMarkerImage(route.incidentType),
                label: 'S',
                title: route.routeOrigin
            });

            var endMarker = new google.maps.Marker({
                position: leg.end_location,
                map: map,
                icon: getMarkerImage(route.incidentType),
                label: 'D',
                title: route.routeDestination
            });

            console.log(leg.end_location);

            startMarker.addListener('click', function() {
                if(prevInfoWindow) {
                    prevInfoWindow.close();
                }
         
                prevInfoWindow = infoWindowStart;

                infoWindowStart.open(map, startMarker);
                infoWindowStart.setZIndex(1000);
            });

            endMarker.addListener('click', function() {
                if(prevInfoWindow) {
                    prevInfoWindow.close();
                }
         
                prevInfoWindow = infoWindowEnd;

                infoWindowEnd.open(map, endMarker);
                infoWindowEnd.setZIndex(1000);
            });

            var center_point = response.routes[0].overview_path.length/2;

            // var infowindow = new google.maps.InfoWindow();
            // infowindow.setContent(route.incidentMessage);
            // infowindow.setPosition(response.routes[0].overview_path[center_point|0]);
            // infowindow.open(map);

        } else {
            console.log('Directions request failed due to ' + status);
        }
    })
}

