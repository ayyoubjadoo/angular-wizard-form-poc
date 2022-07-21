import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { KnowledgeLevel, Sex, WizardStep } from '../enums';
import { WizardStepComponent } from '../interfaces/wizard-step-component';
import { RegistrationDetails } from '../models/registration-details.model';
import { StepReadyEvent } from '../models/step-ready-event.model';

@Component({
  selector: 'registration-wizard',
  templateUrl: './registration-wizard.component.html',
  styleUrls: ['./registration-wizard.component.less']
})
export class RegistrationWizardComponent implements OnInit, AfterViewInit {
  title = "Wizard POC";
  registrationModel: RegistrationDetails = new RegistrationDetails();
  WizardStep = WizardStep;
  
  currentStep: WizardStep = WizardStep.PersonalDetails;
  lastStep: WizardStep = WizardStep.Comments;
  readySteps: WizardStep[] = [];

  @ViewChildren("wizardStep") stepComponents!: QueryList<WizardStepComponent>;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  goNext(): void {
    if (this.currentStep < this.lastStep) {
      const nextStep: WizardStep = this.currentStep + 1;
      const currentStepComponent = this.stepComponents.find(c => c.step == this.currentStep);
      if (currentStepComponent && currentStepComponent.onNext(nextStep)) {
        this.currentStep = nextStep;
      }
    }
  }

  goBack(): void {
    if (this.currentStep > 1) {
      const prevStep: WizardStep = this.currentStep - 1;
      const currentStepComponent = this.stepComponents.find(c => c.step == this.currentStep);
      if (currentStepComponent && currentStepComponent.onPrevious(prevStep)) {
        this.currentStep = prevStep;
      }
    }
  }

  goToStep(step: WizardStep): void {
    const currentStepComponent = this.stepComponents.find(c => c.step == this.currentStep);
    if (step > this.currentStep && step <= this.lastStep) {
      if (currentStepComponent && currentStepComponent.onNext(step)) {
        this.currentStep = step;
      }
      return;
    }

    if (step >= 1 && step < this.currentStep) {
      if (currentStepComponent && currentStepComponent.onPrevious(step)) {
        this.currentStep = step;
      }
      return;
    }
  }

  onStepReady(event: StepReadyEvent) {
    this.readySteps.push(event.step);
    console.log(`Step #${event.step} is ready.`);

    if (this.readySteps.length == this.stepComponents.length) {
      console.log("All step components are ready.");
      this.simulateEdit();
    }
  }

  submitData(): void {
    if (this.stepComponents.toArray().every(c => c.validate())) {
      alert("Submitted successfully!");
    } else {
      alert("Please enter all required fields correctly.");
    }
  }

  clear(): void {
    this.registrationModel = new RegistrationDetails();
  }

  simulateEdit(): void {
    this.title = "Loading...";
    setTimeout(() => {
      const model: RegistrationDetails = {
        personalInfo: { 
          firstName: "Ayyoub", 
          lastName: "Jadoo",
          sex: Sex.Male,
          mobileNumber: "0786360864",
          address: "Zarqa, Jordan"
        },
        workInfo: {
          companyName: "Leaders Mindes",
          position: "Sr. Software Eng. | Team Leader",
          address: "Amman, Jordan"
        },
        skills: [
          { name: "C#", level: KnowledgeLevel.Advanced },
          { name: "OOP", level: KnowledgeLevel.Advanced },
          { name: "Javascript", level: KnowledgeLevel.Advanced },
          { name: "Typescript", level: KnowledgeLevel.Medium },
        ],
        comments: "Likes system design and architecture..."
      };

      this.registrationModel = model;
      this.title = "Wizard POC"
    }, 2000);
  }
}
