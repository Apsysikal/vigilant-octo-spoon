const deviceTemplate = {
    description: "",
    dataPoints: []
};

const devices = [];

function addDevice(description) {
    let device = {
        description: description,
        dataPoints: []
    }

    devices.push(device);
}   

for (let index = 0; index < 5; index++) {
    addDevice(`device ${index}`);
}

devices.forEach(device => {
    for (let index = 0; index < 2; index++) {
        device["dataPoints"].push({ description: `dataPoint ${index}` });
    }
});

devices.forEach(device => {
    console.log(device.description);
    console.log(device.dataPoints)
});