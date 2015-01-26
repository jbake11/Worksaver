var simplemaps_namap_mapdata = {
    main_settings: {
        //General settings
        width: 'responsive', //or 'responsive'
        background_color: '',
        background_transparent: 'yes',
        border_color: '#ffffff',
        pop_ups: 'detect', //on_click, on_hover, or detect

        //State defaults
        state_description: 'Click for distributors',
        state_color: '#898788',
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
            name: 'Hawaii Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/hawaii-distributors'
        },
        AK: {
            name: 'Alaska Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/alaska-distributors',
            description: "Rankin Equipment<br>PO Box 1937<br>Yakima, WA  98907<br>509-452-1651<br>www.rankineqco.com<br>sales@rankineqco.com"
        },
        FL: {
            name: 'Florida Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/florida-distributors'
        },
        NH: {
            name: 'New Hamsphire Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/new-hampshire-distributors'
        },
        VT: {
            name: 'Vermont Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/vermont-distributors'
        },
        ME: {
            name: 'Maine Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/maine-distributors'
        },
        RI: {
            name: 'Rhode Island Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/rhode-island-distributors'
        },
        NY: {
            name: 'New York Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/new-york-distributors'
        },
        PA: {
            name: 'Pennsylvania Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/pennsylvania-distributors'
        },
        NJ: {
            name: 'New Jersey Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/new-jersey-distributors'
        },
        DE: {
            name: 'Delaware Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/delaware-distributors'
        },
        MD: {
            name: 'Maryland Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/maryland-distributors'
        },
        VA: {
            name: 'Virginia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/virginia-distributors'
        },
        WV: {
            name: 'West Virginia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/west-virginia-distributors'
        },
        OH: {
            name: 'Ohio Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/ohio-distributors'
        },
        IN: {
            name: 'Indiana Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/indiana-distributors'
        },
        IL: {
            name: 'Dealer Direct',
            description: 'Click to View locations by County',
            color: 'default',
            hover_color: 'default',
            url: '/illinois-dealers'
        },
        CT: {
            name: 'Connecticut Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/connecticut-distributors'
        },
        WI: {
            name: 'Wisconsin Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/wisconsin-distributors'
        },
        NC: {
            name: 'North Carolia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/north-carolina-distributors'
        },
        DC: {
            name: 'default',
            color: 'default',
            hover_color: 'default',
            url: '#'
        },
        MA: {
            name: 'Massachusetts Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/massachusetts-distributors'
        },
        TN: {
            name: 'Tennessee Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/tennessee-distributors'
        },
        AR: {
            name: 'Arkansas Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/arkansas-distributors'
        },
        MO: {
            name: 'Missouri Disributors',
            color: 'default',
            hover_color: 'default',
            url: '/missouri-distributors'
        },
        GA: {
            name: 'Georgia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/georgia-distributors'
        },
        SC: {
            name: 'South Carolina Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/south-carolina-distributors'
        },
        KY: {
            name: 'Kentucky Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/kentucky-distributors'
        },
        AL: {
            name: 'Alabama Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/alabama-distributors'
        },
        LA: {
            name: 'Louisiana Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/louisiana-distributors'
        },
        MS: {
            name: 'Mississippi Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/mississippi-distributors'
        },
        IA: {
            name: 'Dealer Direct',
            description: 'Click to View locations by County',
            color: 'default',
            hover_color: 'default',
            url: '/iowa-dealers'
        },
        MN: {
            name: 'Minnesota Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/minnesota-distributors'
        },
        OK: {
            name: 'Oklahoma',
            color: 'default',
            hover_color: 'default',
            url: '/oklahoma-distributors'
        },
        TX: {
            name: 'Texas Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/texas-distributors'
        },
        NM: {
            name: 'New Mexico Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/bew-mexico-distributors'
        },
        KS: {
            name: 'Kansas Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/kansas-distributors'
        },
        NE: {
            name: 'Nebraksa Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/nebraska-distributors'
        },
        SD: {
            name: 'South Dakota Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/south-dakota-distributors'
        },
        ND: {
            name: 'North Dakota Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/north-dakota-distributors'
        },
        WY: {
            name: 'Wyoming Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/wyoming-distributors'
        },
        MT: {
            name: 'Montana Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/montana-distributors'
        },
        CO: {
            name: 'Colorado Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/colorado-distributors'
        },
        UT: {
            name: 'Utah Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/utah-distributors'
        },
        AZ: {
            name: 'Arizona Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/arizona-distributors'
        },
        NV: {
            name: 'Nevada Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/nevada-distributors'
        },
        OR: {
            name: 'Oregon Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/oregon-distributors'
        },
        WA: {
            name: 'Washington Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/washington-distributors'
        },
        CA: {
            name: 'California  Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/california-distributors'
        },
        MI: {
            name: 'Michigan Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/michigan-distributors'
        },
        ID: {
            name: 'Idaho Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/idaho-distributors'
        },
        //Canada
        AB: {
            name: 'Alberta Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/alberta-distributors'
        },
        BC: {
            name: 'British Columbia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/british-columbia-distributors'
        },
        SK: {
            name: 'Saskatchewan Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/saskatchewan-distributors'
        },
        MB: {
            name: 'Manitoba Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/manitoba-distributors'
        },
        ON: {
            name: 'Ontario Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/ontario-distributors'
        },
        QC: {
            name: 'Quebec Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/quebec-distributors'
        },
        NB: {
            name: 'New Brunswick Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/new-brunswick-distributors'
        },
        PE: {
            name: 'Prince Edward Island Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/prince-edward-island-distributors'
        },
        NS: {
            name: 'Nova Scotia Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/nova-scotia-distributors'
        },
        NF: {
            name: 'Newfoundland Distributors',
            color: 'default',
            hover_color: 'default',
            url: '/newfoundland-distributors'
        },
        NU: {
            name: 'Nunavut',
            color: 'default',
            hover_color: 'default',
            url: '#'
        },
        NT: {
            name: 'Northwest Territories',
            color: 'default',
            hover_color: 'default',
            url: '#'
        },
        YT: {
            name: 'Yukon Territory',
            color: 'default',
            hover_color: 'default',
            url: '#'
        }
    }

};












