export interface CME {
  time21_5: string;
  latitude: number;
  halfAngle: number;
  speed: number;
  type: string;
  isMostAccurate: boolean;
  associatedCMEID: string;
  note: string;
  catalog: string;
  link: string;
  id?: number;
}