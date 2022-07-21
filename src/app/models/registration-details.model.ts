import { PersonalDetails } from "./personal-details.model";
import { Skill } from "./skill.model";
import { WorkDetails } from "./work-details.model";

export class RegistrationDetails {
    public personalInfo: PersonalDetails = new PersonalDetails();
    public workInfo: WorkDetails = new WorkDetails();
    public skills: Skill[] = [];
    public comments: string = "";
}