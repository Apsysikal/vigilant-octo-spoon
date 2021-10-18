export interface Project {
    canton: string
    zip: string
    number: number
    buildings: Building[]
}
  
export interface Building {
    buildingNumber: number
    buildingDescription: string
    floors: Floor[]
}
  
export interface Floor {
    floor: string
    cabinets: Cabinet[]
}
  
export interface Cabinet {
    cabinetDescription: string
    plants: Plant[]
}

export interface Plant {
    plantType: string
    plantNumber: number
    plantDescription: string
    devices: Device[]
}

export interface Device {
    deviceType: string
    deviceNumber: number
    description: string
    manufacturer: string
    model: string
    comments: Comment[]
    dataPoints: DataPoint[]
}

export interface Comment {
    dateCreated: string
    dateModified: string
    text: string
}

export interface DataPoint {
    dataPointType: string
    dataPointNumber: number
    description: string
}
