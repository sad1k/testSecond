export interface ApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Array<Detail>;
}

export interface IStarWarsPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  url: string;
}

export interface Detail extends IStarWarsPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
