import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
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
        "fontFamily": "'Open Sans', sans-serif",
        "fontWeight": "400",
        "color": "#2d2d2d"
    },
    "main-container": {
        "paddingLeft": 320,
        "paddingRight": 320
    },
    "sc-container": {
        "borderRadius": 2,
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 16,
        "marginLeft": 16,
        "verticalAlign": "top",
        "width": 300,
        "cursor": "pointer"
    },
    "sc-header": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2,
        "verticalAlign": "top",
        "backgroundColor": "white",
        "display": "inline-block",
        "width": "inherit"
    },
    "sc-header h1": {
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 24,
        "marginLeft": 16
    },
    "sc-richmedia": {
        "width": "inherit",
        "height": 169
    },
    "sc-text": {
        "borderBottomLeftRadius": 2,
        "borderBottomRightRadius": 2,
        "verticalAlign": "top",
        "backgroundColor": "white",
        "display": "inline-block",
        "width": "inherit"
    },
    "sc-text p": {
        "marginTop": 16,
        "marginRight": 16,
        "marginBottom": 24,
        "marginLeft": 16
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
    "header-bar": {
        "height": 100,
        "backgroundColor": "rgba(238,238,238,1)",
        "boxShadow": "0 2px 4px 0 rgba(0, 0, 0, 0.2)"
    },
    "header-logo": {
        "marginLeft": 320,
        "width": 300,
        "height": 100,
        "position": "absolute",
        "left": 0
    },
    "header-menu": {
        "marginRight": 320,
        "textAlign": "right",
        "fontSize": 20,
        "position": "absolute",
        "right": 0,
        "height": 100
    },
    "header-menu ul": {
        "listStyleType": "none",
        "overflow": "hidden"
    },
    "header-menu li": {
        "listStyle": "none",
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "float": "left"
    },
    "header-menu li a": {
        "textDecoration": "none",
        "color": "inherit",
        "cursor": "pointer"
    },
    "active": {
        "fontWeight": "bold"
    }
});