import { Component, Input, OnInit, AfterViewInit, Host, Output, EventEmitter } from '@angular/core';
import { Sex, WizardStep } from 'src/app/enums';
import { WizardStepComponent } from 'src/app/interfaces/wizard-step-component';
import { RegistrationDetails } from 'src/app/models/registration-details.model';
import { StepReadyEvent } from 'src/app/models/step-ready-event.model';
import { RegistrationWizardComponent } from '../registration-wizard.component';
import { WorkDetailsComponent } from '../work-details/work-details.component';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.less']
})
export class PersonalDetailsComponent implements WizardStepComponent, OnInit, AfterViewInit {
  @Input() model!: RegistrationDetails;
  @Output() ready = new EventEmitter<StepReadyEvent>();

  step: WizardStep = WizardStep.PersonalDetails;
  Sex = Sex;
  
  constructor(@Host() private parent: RegistrationWizardComponent) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    console.log(this.parent.stepComponents.length);
    setTimeout(() => {
      this.ready.emit({ step: this.step });
    }, 1000);
  }

  validate(): boolean {
    return this.model.personalInfo.firstName.trim().length > 0 && this.model.personalInfo.lastName.trim().length > 0;
  }

  onNext(nextStep: WizardStep): boolean {
    if (this.validate()) {
      return true;
    } else {
      return false;
    }
  }

  onPrevious(prevStep: WizardStep): boolean {
    return false;
  }

  doExternalWork(): void {
    const workCmp = this.parent.stepComponents.find(c => c.step == WizardStep.WorkDetails) as WorkDetailsComponent;
    workCmp.doSomething(true);
  }
}
