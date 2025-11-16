export interface strain {
    Id: number,
    Name: string,
    Testing: string,
    THC: number,
    CBD: number,
    Genetics: string,
    Units: string,
    IsArchived: boolean
}

export interface StrainDataState {
  data: [strain];
  status: 'loaded';
}