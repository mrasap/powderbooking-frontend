import Resort from './components/resort'
import Map from './components/map'

export default [
    {
        id: 1,
        title: "map view",
        url: "/",
        isRoute: true,
        component: Map
    },
    {
        id: 2,
        title: "resort information",
        url: "/resort/:id",
        isRoute: true,
        component: Resort
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
