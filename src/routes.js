import Resort from './components/resort'
import Map from './components/map'

export default [
    {
        id: 1,
        title: "map view",
        url: "/map",
        isRoute: true,
        component: Map
    },
    {
        id: 2,
        title: "resort information",
        url: "/resort/:id",
        isRoute: true,
        component: Resort,
        requiredPath: '/resort'
    },
    {
        id: 3,
        title: "current weather",
        url: "#current",
        isRoute: false,
        requiredPath: '/resort'
    },
    {
        id: 4,
        title: "forecast",
        url: "#forecast",
        isRoute: false,
        requiredPath: '/resort'
    },
    {
        id: 5,
        title: "what is powderhunting?",
        url: "#explanation",
        isRoute: false,
    },
    {
        id: 6,
        title: "about me",
        url: "#about",
        isRoute: false,
    },
];
