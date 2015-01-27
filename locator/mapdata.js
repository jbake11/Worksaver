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
            description: 'Contact Worksaver for distributor information',
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
            description: 'Henry Mitchem Equipment Co.<br>2219 W. Griffin Road<br>Leesburg, FL  34748<br>352-787-4109<br>www.mitchemequipment.com',
            url: '/florida-distributors'
        },
        NH: {
            name: 'New Hamsphire Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'JS Woodhouse<br>11A Evergreen Dr.<br>Fairfield, ME  04937<br>207-453-7788<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/new-hampshire-distributors'
        },
        VT: {
            name: 'Vermont Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'JS Woodhouse<br>1314 Union St<br>West Springfield, MA  01090<br>413-736-5462<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/vermont-distributors'
        },
        ME: {
            name: 'Maine Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'JS Woodhouse<br>11A Evergreen Dr.<br>Fairfield, ME  04937<br>207-453-7788<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
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
            description: 'JS Woodhouse<br>6412 Deere Rd<br>Syracuse, NY  13206<br>315-463-5201<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/new-york-distributors'
        },
        PA: {
            name: 'Pennsylvania Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Hamilton Equipment<br>567 South Reading Road<br>Ephrata, PA  17522<br>800-733-0275<br>www.haminc.com<br>sales@haminc.com',
            url: '/pennsylvania-distributors'
        },
        NJ: {
            name: 'New Jersey Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Hamilton Equipment<br>567 South Reading Road<br>Ephrata, PA  17522<br>800-733-0275<br>www.haminc.com<br>sales@haminc.com',
            url: '/new-jersey-distributors'
        },
        DE: {
            name: 'Delaware Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Hamilton Equipment<br>567 South Reading Road<br>Ephrata, PA  17522<br>800-733-0275<br>www.haminc.com<br>sales@haminc.com',
            url: '/delaware-distributors'
        },
        MD: {
            name: 'Maryland Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'JS Woodhouse<br>1314 Union St<br>West Springfield, MA  01090<br>413-736-5462<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/maryland-distributors'
        },
        VA: {
            name: 'Virginia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Hamilton Equipment Inc.<br>467 Oakland Circle<br>Raphine VA   24472<br>540-377-2628<br>www.haminc.com<br>sales@haminc.com',
            url: '/virginia-distributors'
        },
        WV: {
            name: 'West Virginia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Hamilton Equipment<br>567 South Reading Road<br>Ephrata, PA  17522<br>800-733-0275<br>www.haminc.com<br>sales@haminc.com',
            url: '/west-virginia-distributors'
        },
        OH: {
            name: 'Ohio Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Implement Sales Inc.<br>229 N. 4  Mile Run Rd.<br>Youngstown, OH  44515<br>Youngstown, OH  44515<br>800-233-0815<br>www.buhler.com<br>mneely@buhler.com',
            url: '/ohio-distributors'
        },
        IN: {
            name: 'Indiana Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Implement Sales Inc.<br>2242 Koetter Dr.<br>Clarksville, IN  47129<br>800-467-4726<br>www.buhler.com<br>rbundy@buhler.com',
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
            description: 'JS Woodhouse<br>1314 Union St<br>West Springfield, MA  01090<br>413-736-5462<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/connecticut-distributors'
        },
        WI: {
            name: 'Wisconsin Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Edney Distributing Co.<br>2571 W. Wisconsin<br>Portage, WI  53901<br>888-443-3639<br>www.edneyco.com<br>sales@edneyco.com',
            url: '/wisconsin-distributors'
        },
        NC: {
            name: 'North Carolia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Tri-States Distributors<br>PO Box 1121<br>Statesville, NC  28677<br>704-873-0531<br>www.tristatedistributors.net<br>info@tristatedistributors.net',
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
            description: 'JS Woodhouse<br>1314 Union St<br>West Springfield, MA  01090<br>413-736-5462<br>www.jswoodhouse.com<br>info@jswoodhouse.com',
            url: '/massachusetts-distributors'
        },
        TN: {
            name: 'Tennessee Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Implement Sales Inc.<br>PO Box 249, Hwy 70 West<br>West Memphis, AR  72303<br>800-489-4726<br>www.buhler.com<br>jthomas@buhler.com',
            url: '/tennessee-distributors'
        },
        AR: {
            name: 'Arkansas Distributors',
            color: 'default',
            hover_color: 'default',
            description: "Implement Sales Inc.<br>PO Box 249, Hwy 70 West<br>West Memphis, AR  72303<br>800-489-4726<br>www.buhler.com<br>jthomas@buhler.com",
            url: '/arkansas-distributors'
        },
        MO: {
            name: 'Missouri Disributors',
            color: 'default',
            hover_color: 'default',
            description: 'ACI Distributors<br>3220 New Town Blvd.<br>St. Charles, MO  63301<br>800-237-0562<br>www.acidist.com<BR>joyce@acidistributor.com<hr>Beaver Valley Supply Co.<br>Hwy 36 East<br>Atwood KS  67730<br>800-928-1280<br>www.beavervalleysupply.com<br>beavervalley@sbcglobal.net',
            url: '/missouri-distributors'
        },
        GA: {
            name: 'Georgia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Implement Sales Co<br>1574 Stone Ridge Dr.<br>Stone Mountain, GA  30083<br>800-955-9592<br>www.implementsalesga.com<br>sales@implementsalesga.com',
            url: '/georgia-distributors'
        },
        SC: {
            name: 'South Carolina Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Tri-States Distributors<br>PO Box 1121<br>Statesville, NC  28677<br>704-873-0531<br>www.tristatedistributors.net<br>info@tristatedistributors.net',
            url: '/south-carolina-distributors'
        },
        KY: {
            name: 'Kentucky Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Implement Sales Inc.<br>2242 Koetter Dr.<br>Clarksville, IN  47129<br>800-467-4726<br>www.buhler.com<br>rbundy@buhler.com',
            url: '/kentucky-distributors'
        },
        AL: {
            name: 'Alabama Distributors',
            color: 'default',
            hover_color: 'default',
            description: "Implement Sales Co<br>1574 Stone Ridge Dr.<br>Stone Mountain, GA  30083<br>800-955-9592<br>www.implementsalesga.com<br>sales@implementsalesga.com",
            url: '/alabama-distributors'
        },
        LA: {
            name: 'Louisiana Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'White’s Inc.<br>Box 2344<br>Houston, TX 77252<br>800-231-9559<br>www.whitesinc.com<br>wholegoodsales@whitesinc.com<br><hr>Implement Sales Inc.<br>PO Box 249, Hwy 70 West<br>West Memphis, AR  72303<br>800-489-4726<br>www.buhler.com<br>jthomas@buhler.com',
            url: '/louisiana-distributors'
        },
        MS: {
            name: 'Mississippi Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'White’s Inc.<br>Box 2344<br>Houston, TX 77252<br>800-231-9559<br>www.whitesinc.com<br>wholegoodsales@whitesinc.com<br><hr>Implement Sales Inc.<br>PO Box 249, Hwy 70 West<br>West Memphis, AR  72303<br>800-489-4726<br>www.buhler.com<br>jthomas@buhler.com',
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
            description: 'Edney Distributing Co.<br>8485 215th St. West<br>Lakeville, MN  55044<br>888-443-3639<br>www.edneyco.com<br>sales@edneyco.com',
            url: '/minnesota-distributors'
        },
        OK: {
            name: 'Oklahoma',
            color: 'default',
            hover_color: 'default',
            description: 'Southwest Distributing<br>PO Box 456<br>Clinton, OK  73601<br>800-522-4056<br>www.swdistributors.net<br>southwestdist@omega1wireless.net',
            url: '/oklahoma-distributors'
        },
        TX: {
            name: 'Texas Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'White’s Inc.<br>Box 2344<br>Houston, TX 77252<br>800-231-9559<br>www.whitesinc.com<br>wholegoodsales@whitesinc.com<br>',
            url: '/texas-distributors'
        },
        NM: {
            name: 'New Mexico Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Beaver Valley<br>9591 Normfield Blvd<br>Denver, CO  80238<br>800-528-2872<br>www.beavervalleysupply.com<br>info@beavervalleysupply.com',
            url: '/new-mexico-distributors'
        },
        KS: {
            name: 'Kansas Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Beaver Valley Supply Co.<br>Hwy 36 East<br>Atwood KS  67730<br>800-928-1280<br>www.beavervalleysupply.com<br>beavervalley@sbcglobal.net',
            url: '/kansas-distributors'
        },
        NE: {
            name: 'Nebraksa Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Beaver Valley Supply<br>Hwy 36 East<br>Atwood KS  67730<br>800-928-1280<br>www.beavervalleysupply.com<br>beavervalley@sbcglobal.net',
            url: '/nebraska-distributors'
        },
        SD: {
            name: 'South Dakota Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Edney Distributing Co.<br>P.O. Box 198<br>Huron SD 57350<br>888-443-3639<br>www.edneyco.com<br>sales@edneyco.com',
            url: '/south-dakota-distributors'
        },
        ND: {
            name: 'North Dakota Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Edney Distributing Co.<br>1230 43rd St. NW<br>Fargo, ND  58102<br>888-443-3639<br>www.edneyco.com<br>sales@edneyco.com',
            url: '/north-dakota-distributors'
        },
        WY: {
            name: 'Wyoming Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'General Implement<br>5516 Holiday Ave<br>Billings, MT  59101<br>800-772-3165<br>www.generalimp.com<br>jhove@arnoldmachinery.com',
            url: '/wyoming-distributors'
        },
        MT: {
            name: 'Montana Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'General Implement<br>5516 Holiday Ave<br>Billings, MT  59101<br>800-772-3165<br>www.generalimp.com<br>jhove@arnoldmachinery.com',
            url: '/montana-distributors'
        },
        CO: {
            name: 'Colorado Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Beaver Valley<br>9591 Normfield Blvd<br>Denver, CO  80238<br>800-528-2872<br>www.beavervalleysupply.com<br>info@beavervalleysupply.com',
            url: '/colorado-distributors'
        },
        UT: {
            name: 'Utah Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'General Implement<br>2955 West 2100 South<br>Salt Lake City, UT  84119<br>800-767-0555<br>www.gerneralimp.com',
            url: '/utah-distributors'
        },
        AZ: {
            name: 'Arizona Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Contact Worksaver for distributor information',
            url: '/arizona-distributors'
        },
        NV: {
            name: 'Nevada Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Contact Worksaver for distributor information',
            url: '/nevada-distributors'
        },
        OR: {
            name: 'Oregon Distributors',
            color: 'default',
            hover_color: 'default',
            description: "Rankin Equipment<br>PO Box 1937<br>Yakima, WA  98907<br>509-452-1651<br>www.rankineqco.com<br>sales@rankineqco.com",
            url: '/oregon-distributors'
        },
        WA: {
            name: 'Washington Distributors',
            color: 'default',
            hover_color: 'default',
            description: "Rankin Equipment<br>PO Box 1937<br>Yakima, WA  98907<br>509-452-1651<br>www.rankineqco.com<br>sales@rankineqco.com",
            url: '/washington-distributors'
        },
        CA: {
            name: 'California  Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Contact Worksaver for distributor information',
            url: '/california-distributors'
        },
        MI: {
            name: 'Michigan Distributors',
            color: 'default',
            hover_color: 'default',
            descrtiption: 'Wiles Sales<br>10273 Mt. Hope Rd.<br>Carson City, MI  48811<br>800-584-1076<br>www.wilessales.com<br>wilessales@wilessales.com',
            url: '/michigan-distributors'
        },
        ID: {
            name: 'Idaho Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'General Implement<br>300 East Overland Rd.<br>Meridian, ID  83642<br>800-676-0555<br>www.generalimp.com',
            url: '/idaho-distributors'
        },
        //Canada
        AB: {
            name: 'Alberta Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Westward Parts<br>6517 67th St.<br>Red Deer, AB  T4P 1A3<br>403-342-5510<br>www.westwardparts.com<br>info@westwardparts.com',
            url: '/alberta-distributors'
        },
        BC: {
            name: 'British Columbia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Westward Parts<br>6517 67th St.<br>Red Deer, AB  T4P 1A3<br>403-342-5510<br>www.westwardparts.com<br>info@westwardparts.com',
            url: '/british-columbia-distributors'
        },
        SK: {
            name: 'Saskatchewan Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Westward Parts<br>201 Henderson Drive<br>Regina, SK  S4N 7E2<br>306-721-2113<br>www.westwardparts.com<br>info@westwardparts.com',
            url: '/saskatchewan-distributors'
        },
        MB: {
            name: 'Manitoba Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Westward Parts<br>1435 St. James St.<br>Winnipeg, MB  R3H OW9<br>204-697-2444<br>www.westwardparts.com<br>info@westwardparts.com',
            url: '/manitoba-distributors'
        },
        ON: {
            name: 'Ontario Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
            url: '/ontario-distributors'
        },
        QC: {
            name: 'Quebec Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
            url: '/quebec-distributors'
        },
        NB: {
            name: 'New Brunswick Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
            url: '/new-brunswick-distributors'
        },
        PE: {
            name: 'Prince Edward Island Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
            url: '/prince-edward-island-distributors'
        },
        NS: {
            name: 'Nova Scotia Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
            url: '/nova-scotia-distributors'
        },
        NF: {
            name: 'Newfoundland Distributors',
            color: 'default',
            hover_color: 'default',
            description: 'Farm Fleet<br>23703 Wellburn Rd  RR #3<br>St. Mary’s ON  N4X 1C6<br>519-461-1499<br>www.farmfleet.com<br>paul.stubbens@farmfleet.com',
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











