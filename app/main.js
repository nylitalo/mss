import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    ":root": {
        "MainColor": "#5699D2",
        "AccentColor": "#DFDA50",
        "AccentColor2": "#DF4B38",
        "AccentColor3": "#54E980",
        "AccentColor4": "#AD54E9",
        "BgColor": "#f4f3ee"
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "var(--bg-color)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "var(--bg-color)",
        "fontFamily": "'Josefin Sans', sans-serif",
        "fontWeight": "400",
        "color": "#2d2d2d"
    },
    "title": {
        "fontSize": 30,
        "fontWeight": "bold",
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 16,
        "marginLeft": 16,
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16
    },
    "main-container": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "sc-container": {
        "backgroundColor": "var(--bg-color)",
        "borderRadius": 2,
        "border": 1,
        "borderColor": "rgba(0, 0, 0, 0.25)",
        "borderStyle": "solid",
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 16,
        "marginLeft": 16,
        "verticalAlign": "top",
        "width": 250,
        "cursor": "pointer",
        "whiteSpace": "normal"
    },
    "sc-header": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2,
        "verticalAlign": "top",
        "display": "inline-block",
        "width": "inherit"
    },
    "sc-header h1": {
        "fontSize": 22,
        "fontStyle": "normal",
        "fontWeight": "bold",
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 24,
        "marginLeft": 16,
        "color": "var(--main-color)"
    },
    "sc-richmedia img": {
        "maxWidth": "100%",
        "maxHeight": "100%"
    },
    "sc-text": {
        "borderBottomLeftRadius": 2,
        "borderBottomRightRadius": 2,
        "verticalAlign": "top",
        "minHeight": 66
    },
    "sc-text p": {
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 24,
        "marginLeft": 16
    },
    "sc-container a": {
        "display": "block"
    },
    "hvr-float": {
        "boxShadow": "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        "transition": "box-shadow 0.1s ease-out",
        "display": "inline-block",
        "verticalAlign": "middle",
        "WebkitTransform": "perspective(1px) translateZ(0)",
        "transform": "perspective(1px) translateZ(0)",
        "WebkitTransitionDuration": "0.3s",
        "transitionDuration": "0.3s",
        "WebkitTransitionProperty": "transform",
        "transitionProperty": "transform",
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out"
    },
    "hvr-float:hover": {
        "boxShadow": "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
        "transition": "box-shadow 0.1s ease-in",
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "hvr-float:focus": {
        "boxShadow": "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
        "transition": "box-shadow 0.1s ease-in",
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "hvr-float:active": {
        "boxShadow": "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
        "transition": "box-shadow 0.1s ease-in",
        "WebkitTransform": "translateY(-8px)",
        "transform": "translateY(-8px)"
    },
    "header-container": {
        "position": "relative",
        "height": 100
    },
    "header-logo": {
        "position": "absolute",
        "left": 0,
        "marginLeft": "10%",
        "marginRight": "10%",
        "display": "inline"
    },
    "header-logo img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "header-menu": {
        "position": "absolute",
        "bottom": 0,
        "right": 0,
        "marginLeft": "10%",
        "marginRight": "10%",
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "header-menu ul": {
        "listStyleType": "none"
    },
    "header-menu li": {
        "listStyle": "none",
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 16,
        "marginLeft": 16
    },
    "menu-horizontal li": {
        "display": "inline"
    },
    "header-menu li a": {
        "textDecoration": "none",
        "color": "var(--main-color)",
        "cursor": "pointer"
    },
    "header-menu li a:hover": {},
    "header-menu icon": {
        "display": "none"
    },
    "active": {
        "fontWeight": "bold",
        "color": "var(--accent-color-2) !important"
    },
    "main-banner": {
        "height": 300,
        "overflow": "hidden"
    },
    "main-banner img": {
        "maxWidth": "100%"
    },
    "service-cards": {
        "width": "auto",
        "textAlign": "center",
        "float": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "big-button": {
        "fontSize": 20,
        "fontWeight": "400",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 16,
        "marginLeft": 16,
        "backgroundColor": "var(--accent-color-3)",
        "cursor": "pointer"
    },
    "service-menu": {},
    "footer": {
        "position": "relative",
        "bottom": 0,
        "paddingTop": 16,
        "paddingRight": 0,
        "paddingBottom": 16,
        "paddingLeft": 0,
        "marginTop": 48,
        "width": "100%",
        "backgroundColor": "var(--accent-color-4)"
    }
});