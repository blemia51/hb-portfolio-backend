export class CreateProfileDto {
  readonly name: string;
  readonly jobTitle: string;
  readonly techStack: string[];
  readonly linkedin?: string;
  readonly github?: string;
  readonly email?: string;
  readonly profilePic?: string;
}
