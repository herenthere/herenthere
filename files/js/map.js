// var waypoints = [];
// var directionsHandler = {};
// var nearbySearchRange = 15;

// waypoints.push('waypoint1');

// $(document).ready(function(){
//     var next = 1;
//     $(".add-more").click(function(e){
//       e.preventDefault();
//       var addto = "#waypoint" + next;
//       var addRemove = "#waypoint" + (next);
      
//       next++;

//       var brek = '<br id="br' + next + '" name="br' + next + '">';
//       var dateStop =  '<input class="controlsplusdate" id="datestop' + next + '" name="datestop' + next + '" type="text" placeholder="Date">';
//       var newIn = '<input class="controlsplus" id="waypoint' + next + '" name="waypoint' + next + '" type="text" placeholder="Add a stop...">';
//       waypoints.push('waypoint' + next);
//       // TODO add datestop push
//       // console.log(waypoints);
      
//       var brInput = $(brek);
//       var dateStopInput = $(dateStop);
//       var newInput = $(newIn);
      
//       var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div>';
//       var removeButton = $(removeBtn);
//       // console.log(removeBtn);
      
//       $(addto).after(newInput);
//       $(addto).after(dateStopInput);
//       $(addto).after(brInput);                     
      
//       $(addRemove).after(removeButton);

//       directionsHandler.updateWaypoints();
      
//       // $("#count").val(next);
//       $('.remove-me').click(function(e){
//         // e.preventDefault();
//         var waypointNum = this.id.charAt(this.id.length-1);
//         var brekID = "#br" + waypointNum;
//         var datestopID = "#datestop" + waypointNum;
//         var waypointID = "#waypoint" + waypointNum;
        
//         var index = waypoints.indexOf('waypoint' + waypointNum);
//         // console.log('it ran');
//         // console.log(waypoints);
//         if(index != -1){
//           waypoints.splice(index, 1);
//           directionsHandler.updateWaypoints();
//         }
//         // console.log(this);
//         // console.log(waypoints);
//         $(this).remove();
//         $(brekID).remove();
//         $(datestopID).remove();
//         $(waypointID).remove();
//       });
//     });
// });

// $(function(dateID) {
//     $( "#" + dateID ).datepicker({
//       prevText:"click for previous months",
//       nextText:"click for next months",
//       showOtherMonths:true,
//       selectOtherMonths: false
//     });
//     $( "#" + dateID ).datepicker({
//       prevText:"click for previous months",
//       nextText:"click for next months",
//       showOtherMonths:true,
//       selectOtherMonths: true
//     });
//   });

// Update range values
function updateRangeValue() {
    var nearbySearchRangeSlider = document.getElementById('ex1');
    nearbySearchRange = nearbySearchRangeSlider.value;
}

function updateTimeDrivingNotStopping() {
    var timeDrivingNotStoppingSetting = document.getElementById('maxtimedrive');
    timeDrivingNotStopping = timeDrivingNotStoppingSetting.value;
}

// Initialize Google Maps map. Give it skin, then variables map, then camera location, then autocomplete functions.
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7128, lng: -74.0059},
        fullscreenControl: false,
        mapTypeControlOptions: {
        mapTypeIds: ['styled_map', 'satellite'],
        position: google.maps.ControlPosition.TOP_RIGHT  
        },
        
        zoom: 9
    });

    // var types = document.getElementById('type-selector');

    var infowindow = new google.maps.InfoWindow();
    var infowindowcontent = document.getElementById('infowindow-content');
    var inputs = {};

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
        },
        ],

        {name: 'Map'}
    );

    // Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Assign directions handler
    directionsHandler = new AutocompleteDirectionsHandler(map);

    // infowindow
    infowindow.setContent(infowindowcontent);
}

    // var marker = new google.maps.Marker({
    //   map: map,
    //   anchorPoint: new google.maps.Point(0, -29)
    // });

/**
* @constructor
*/
function AutocompleteDirectionsHandler(map) {
    var originInput = document.getElementById('origin-input');
    var destinationInput = document.getElementById('destination-input');
    var originInputPlaceId = document.getElementById('origin-input-placeid');
    var destinationInputPlaceId = document.getElementById('destination-input-placeid');
    var scenicRadio = document.getElementById('switch_left');
    
    //add toggle button on map screen
    this.scenic = scenicRadio.checked;

    this.markerPlaces = [];
    this.markers = [];

    this.waypointsAutocomplete = [];
    this.waypointsPlaceIds = [];
    this.waypointRoutes = [];

    this.map = map;        
    
    this.travelMode = 'DRIVING';
    this.directionsService = new google.maps.DirectionsService;
    this.service = new google.maps.places.PlacesService(map);
    //this.directionsResult = google.maps.DirectionsService.getDirections();
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(map);

    // this.waypoints = [{location: {placeId: 'ChIJOwg_06VPwokRYv534QaPC8g'}}];

    if(originInputPlaceId.value && destinationInputPlaceId.value){
        this.originPlaceId = originInputPlaceId.value;
        // console.log(this.originPlaceId);
        this.destinationPlaceId = destinationInputPlaceId.value;
        // console.log(this.destinationPlaceId);

        this.route();
        // directionsServiceRoute(this, this.originPlaceId, this.destinationPlaceId, this.travelMode, this.waypointRoutes);
    }
    else{
        this.originPlaceId = null;
        this.destinationPlaceId = null;
    }

    var originAutocomplete = new google.maps.places.Autocomplete(
        originInput, {placeIdOnly: true});
    var destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput, {placeIdOnly: true});

    // this.setupClickListener('changemode-driving', 'DRIVING');

    this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
    this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
    
    this.updateWaypoints();
}

AutocompleteDirectionsHandler.prototype.updateWaypoints = function(){
        // console.log(document.getElementById(waypoints[0]));

    var me = this;

    for (i = 0; i < waypoints.length; i++){
            me.waypointsAutocomplete.push(new google.maps.places.Autocomplete(
                document.getElementById(waypoints[i]), {placeIdOnly: true}
        ));

        me.waypointsPlaceIds.push(null);
    }

    for (x = 0; x < me.waypointsAutocomplete.length; x++){
        me.setupPlaceChangedListener(me.waypointsAutocomplete[x], x);
    }
}
    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    // AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
    //   var radioButton = document.getElementById(id);
    //   var me = this;
    //   radioButton.addEventListener('click', function() {
    //     me.travelMode = mode;
    //     me.route();
    //   });
    // };

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
    var me = this;
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', this.map);
    
    autocomplete.addListener('place_changed', function() {
        // infowindow.close();
        // market.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
        }
        if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
        } 
        else if (mode === 'DEST'){
            me.destinationPlaceId = place.place_id;
        }
        else {
            me.waypointsPlaceIds[mode] = place.place_id;
            me.waypointRoutes.push({location: {placeId: me.waypointsPlaceIds[mode]}});
        }

        me.route();
    });
};

AutocompleteDirectionsHandler.prototype.route = function() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
        // window.alert("Please select an origin and destination!")
        return;
    }
    var me = this;

    // console.log(this.waypointRoutes);

    //Calling google.maps.DirectionsService.route method, passing a request: DirectionsRequest and callback: function(DirectionsResult, DirectionsStatus)
    directionsServiceRoute(me, this.originPlaceId, this.destinationPlaceId, this.travelMode, this.waypointRoutes, this.scenic);
};

function directionsServiceRoute(me, originPlaceId, destinationPlaceId, travelMode, waypoints, scenic){
    // console.log("SCENIC = " + scenic);
    me.directionsService.route(
        //DirectionsRequest Object
        {
            origin: {'placeId': originPlaceId},
            destination: {'placeId': destinationPlaceId},
            //Pass Waypoints
            waypoints: waypoints,
            travelMode: travelMode,
            optimizeWaypoints: true,
            avoidHighways: scenic,
            avoidTolls: scenic
        },
        
        function(response, status) {
        if (status === 'OK') {            
            // store
            me.directionsDisplay.setDirections(response);
            clearPOI(me);
            showPOI(me, response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function clearPOI(me){
    removeMarkers(me);
}

function showPOI(me, directionsResult){
    var legs = directionsResult.routes[0].legs;
    var steps = [];
    var cumulative_length = 0;
    var cumulative_duration = 0;
    var cumulative_duration_hours = 0;
    var nearbySearchRangeMeters = 1609.34 * nearbySearchRange;

    for(var x = 0; x < legs.length; x++) {
        steps = legs[x].steps;

        me.service.nearbySearch(
            {
                location: legs[x].start_location,
                radius: nearbySearchRangeMeters
            },

            function(results, status, pagination){
                if(results){
                    // me.markerPlaces.push(results);
                    createMarkers(me, results);
                }
            }
        )
        
        for(var i = 0; i < steps.length; i++) {
            cumulative_length += steps[i].distance.value;
            cumulative_duration += steps[i].duration.value;
            cumulative_duration_hours = cumulative_duration / 3600;

            //range TODO
            if(cumulative_length >= (nearbySearchRangeMeters * 2)) {
                if(cumulative_duration_hours >= timeDrivingNotStopping) {
                    console.log(timeDrivingNotStopping);
                    //nearby search    
                    me.service.nearbySearch(
                        {
                            //keyword
                            location: steps[i].end_location,
                            radius: nearbySearchRangeMeters
                        },                          
                        
                        function(results, status, pagination){
                            if(results){
                                // me.markerPlaces.push(results);
                                createMarkers(me, results);
                            }
                        }
                    )
                
                    cumulative_duration = 0;
                    cumulative_duration_hours = 0;
                }
                // console.log(steps[i].instructions);
                // console.log(steps[i].end_location);
                //nearby search start location
                // me.service.nearbySearch(
                // {
                //     //keyword
                //     location: steps[i].start_location,
                //     radius: nearbySearchRangeMeters
                // },                          
                
                // function(results, status, pagination){
                //     if(results){
                //         // me.markerPlaces.push(results);
                //         createMarkers(me, results);
                //     }
                // }
                // )
                cumulative_length = 0;
            }
        }
    }
}

    //Create markers given a list of places
function createMarkers(me, places) {
    //var bounds = map.getBounds();      
    //var placesList = document.getElementById('places');

    for (var i = 0, place; place = places[i]; i++) {

        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(30, 30)
        };

        var marker = new google.maps.Marker({
            map: me.map,
            icon: image,
            title: place.name,
            position: place.geometry.location,
            optimized: false,    
        });
        
        // shape: {
        //     coords: [place.geometry.location.lat(), place.geometry.location.lng(), 0.05],
        //     type: 'circle'
        // }

        me.markers.push(marker);

        var priceLevel = '';
        var placeRating = 0;
        var placeWebsite = '';
        var placeUrl = '';

        switch(place.price_level){
            case 0:
                priceLevel = 'Free';
                break;
            case 1:
                priceLevel = 'Inexpensive';
                break;
            case 2:
                priceLevel = 'Moderate';
                break;
            case 3:
                priceLevel = 'Expensive';
                break;
            case 4:
                priceLevel = 'Very Expensive';
                break;
            default:
                priceLevel = 'Unavailable';
        }

        if(place.rating) {
            placeRating = place.rating;
        }
        else{
            placeRating = 'Unavailable';
        }

        if(place.website) {
            placeWebsite = place.website;
        }
        else{
            placeWebsite = 'Unavailable';
        }

        if(place.url) {
            placeUrl = place.url;
        }
        else{
            placeUrl = 'https://www.google.com/search?q=' + place.name;
            placeUrl = placeUrl.replace(/\s/g,'');
        }
            
        var contentString = '<div id="content">' +
            '<h1>' + place.name + '</h1>' +
            '<img src= ' + place.icon + '><br><br><br>' +
            '<p>' + '<b>Rating:</b> ' + placeRating + '</p>' +
            '<p>' + '<b>Price:</b> ' + priceLevel + '</p>' +
            '<p>' + '<b>Wesbite:</b> ' + place.website + '</p>' +
            '<p>' + '<a target="_blank" href=' + placeUrl + '><b>Click for More Information</b></a></p>' +
            '<p><button>' + '' + '>' + '<b>ADD WAYPOINT</b></button></p>' +
            '</div>';        

        attachInfoWindow(marker, contentString);

        //bounds.extend(place.geometry.location);
    }
    //map.fitBounds(bounds);
}

function attachInfoWindow(marker, contentString) {
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infoWindow.open(marker.get('map'), marker);
    });
}

function removeMarkers(me) {
    initLength = me.markers.length;
    for (var i = 0; i < initLength; i++) {
        me.markers[i].setMap(null);
    }

    me.markers = [];
}

// Callback used by async scripted link below
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}