export interface Cast {
  name: string;
  profile_path: string;
  character: string;
}

export interface CastResponse {
  cast: Cast[];
}
