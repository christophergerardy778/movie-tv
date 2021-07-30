import {Genre} from "./Genre";

export interface MovieDetail {
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: string;
}
