import {
  ProfileClientType,
  ProfileEthnicity,
  ProfileEyesColor,
  ProfileHairColor,
  ProfileHairSize,
  ProfileSilhouette,
} from '../entities/profile.entity';

export class CreateProfileDto {
  firstname: string;
  lastname: string;
  birthday: string;
  description: string;
  clienTypes: ProfileClientType[];
  ethnicity: ProfileEthnicity;
  eyesColor: ProfileEyesColor;
  hairColor: ProfileHairColor;
  hairSize: ProfileHairSize;
  silhouette: ProfileSilhouette;
  height: number;
  weight: number;
  bustSize: string;
  waistSize: number;
  hipSize: number;
  adId: string;
}
