export interface Strain {
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
  items: Strain[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
