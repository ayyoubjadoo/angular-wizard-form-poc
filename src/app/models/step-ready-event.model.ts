import { WizardStep } from "../enums";

export class StepReadyEvent {
    public step!: WizardStep;
    public data?: any;
}