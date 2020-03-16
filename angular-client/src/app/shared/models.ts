export interface ProjectModel {
    name: string;
    discription: string;
    date: string;
    photos: Array<string>;
}

export interface ServiceModel {
    name: string;
    price: number;
    description: string;
    imageLink: string;
}