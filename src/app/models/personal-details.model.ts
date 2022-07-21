import { Sex } from "../enums";

export class PersonalDetails {
    public firstName: string = "";
    public lastName: string = "";
    public sex: Sex = Sex.Male;
    public mobileNumber: string = "";
    public address: string = "";
}