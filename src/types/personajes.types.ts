export interface Object {
    Information:Information;
    personajes: Personaje[];
}

export interface Personaje {
    created:  Date;
    episode:  string[];
    gender:   string;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
   }

export interface Information {
    count: number;
    nextPage:  string;
    amountPages: number;
    prevPage:  string;
   }