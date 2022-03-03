export type Nullable<T> = T | null;

export type TypeResponseData = {
    name:string
    height:string
    mass:string
    hair_color:string
    skin_color:string
    eye_color:string
    birth_year:string
    gender:string
    homeworld:string
    films:string[]
    species:string[]
    vehicles:string[]
    starships:string[]
    created:string
    edited:string
    url:string
}

export interface StarWarsPersonsState {
    person: Nullable<TypeResponseData>;
    allPersons: Nullable<TypeResponseData[]>;
    countPersons: Nullable<number>;
    searchFilter: string;
    currentPage: number;
    isLoading: boolean;
}

export interface GetCurrentPersonPayloadType {
    title: string;
}

export interface GetAllPersonPayloadType {
    page: string
    title?: string
}

export interface SearchPersonsPayloadType {
    title: string
}


export interface GetAllPersonsPayloadType {
    count: number;
    next: Nullable<string>;
    previous: Nullable<string>;
    results: TypeResponseData[];
}

