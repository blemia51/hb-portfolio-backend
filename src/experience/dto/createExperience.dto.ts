export class CreateExperienceDto {
  readonly title: string;
  readonly company: string;
  readonly place: string;
  readonly start_date: Date;
  readonly end_date?: Date;
  readonly stack: string[];
  readonly details: string;
}