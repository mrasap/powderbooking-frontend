import Resort from './components/resort'
import ResortPopup from './components/resort/resortPopup'

import Map from './components/map'

export default [
    {
        id: 1,
        title: "map view",
        url: "/map",
        isRoute: true,
        component: Resort
    },
    {
        id: 2,
        title: "resort information",
        url: "/resort/:id",
        isRoute: true,
        component: ResortPopup
    },
    {
        id: 3,
        title: "what is powderhunting?",
        url: "#explanation",
        isRoute: false,
    },
    {
        id: 4,
        title: "about me",
        url: "#about",
        isRoute: false,
    },
];
