exports.getHeading = function (dir) {
    switch (dir) {
        case 'N':
            return 0;
        case 'NNW':
            return 337;
        case 'NW':
            return 315;
        case 'WNW':
            return 292;
        case 'W':
            return 270;
        case 'WSW':
            return 248;
        case 'SW':
            return 225;
        case 'SSW':
            return 202;
        case 'S':
            return 180;
        case 'SSE':
            return 158;
        case 'SE':
            return 135;
        case 'ESE':
            return 113;
        case 'E':
            return 90;
        case 'ENE':
            return 67;
        case 'NE':
            return 45;
        case 'NNE':
            return 22;
        default:
            console.log("unknown dir", dir);
            return 0;
    }
}


