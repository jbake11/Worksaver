var simplemaps_namap_mapdata = {
    main_settings: {
        //General settings
        width: 'responsive', //or 'responsive'
        background_color: '',
        background_transparent: 'no',
        border_color: '#ffffff',
        pop_ups: 'detect', //on_click, on_hover, or detect

        //State defaults
        state_description: 'State description',
        state_color: '#666',
        state_hover_color: '#ccc',
        state_url: '#',
        border_size: 0.5,
        all_states_inactive: 'no',
        all_states_zoomable: 'no',
        //Location defaults
        location_description: 'Location description',
        location_color: '#333',
        location_opacity: .8,
        location_hover_opacity: 1,
        location_url: '',
        location_size: 15,
        location_type: 'circle', // circle, square, image
        location_image_source: 'frog.png', //name of image in the map_images folder
        location_border_color: '#FFFFFF',
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: 'no',
        all_locations_hidden: 'no',
        //Labels
        label_color: '#000',
        label_hover_color: '#333',
        label_size: 30,
        label_font: 'Verdana',
        hide_labels: 'no',
        //Advanced settings - you probably can ignore these
        div: 'map',
        auto_load: 'yes',
        url_new_tab: 'no',
        images_directory: 'default', //e.g. 'map_images/'
        arrow_color: '#3B729F',
        arrow_color_border: '#88A4BC',
        back_image: 'no', //Use image instead of arrow for back zoom
        initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click
        popup_color: 'white',
        popup_opacity: .9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
        popup_nocss: 'no', //use your own css
        initial_zoom: -1, //-1 is zoomed out, 0 is for the first continent etc
        initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
        link_text: '(Link)', //Text mobile browsers will see for links
        zoom: 'yes', //use default regions
        zoom_out_incrementally: 'yes', // if no, map will zoom all the way out on click
        zoom_percentage: .99,
        fade_time: .1, //time to fade out
        zoom_speed: .5 //time to zoom between regions in seconds
    },
    state_specific: {
        //U.S. States
        HI: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default',
        },
        AK: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default',
            description: "Rankin Equipment<br>PO Box 1937<br>Yakima, WA  98907<br>509-452-1651<br>www.rankineqco.com<br>sales@rankineqco.com"
        },
        FL: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NH: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        VT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        ME: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        RI: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NY: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        PA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NJ: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        DE: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MD: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        VA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        WV: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        OH: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        IN: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        IL: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        CT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        WI: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        DC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        TN: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        AR: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MO: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        GA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        SC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        KY: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        AL: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        LA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MS: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        IA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MN: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        OK: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        TX: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NM: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        KS: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NE: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        SD: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        ND: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        WY: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        CO: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        UT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        AZ: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NV: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default',
        },
        OR: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        WA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        CA: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MI: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        ID: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        //Canada
        AB: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        BC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        SK: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        MB: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        ON: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        QC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NB: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        PE: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NS: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NF: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        NU: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default',
        },
        NT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        YT: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default'
        },
        "Mexico": {
            name: 'Mexico',
            description: 'default',
            color: 'default',
            hover_color: 'default',
            url: 'default',
            hide: 'yes'
        }
    },
    locations: {
        1: {
            name: 'New York City',
            lat: 40.7143528,
            lng: -74.0059731
        },
        2: {
            name: 'Minneapolis',
            lat: 44.983334,
            lng: -93.26667,
            color: 'default'
        }
    }

}











