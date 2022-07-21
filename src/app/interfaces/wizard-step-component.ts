import { WizardStep } from "../enums";

export interface WizardStepComponent {
    step: WizardStep;

    onNext(nextStep: WizardStep): boolean;

    onPrevious(prevStep: WizardStep): boolean;

    validate(): boolean;
}