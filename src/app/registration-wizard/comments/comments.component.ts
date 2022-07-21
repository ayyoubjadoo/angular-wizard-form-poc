import { Component, OnInit, Input, Host, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { WizardStep } from 'src/app/enums';
import { WizardStepComponent } from 'src/app/interfaces/wizard-step-component';
import { RegistrationDetails } from 'src/app/models/registration-details.model';
import { StepReadyEvent } from 'src/app/models/step-ready-event.model';
import { RegistrationWizardComponent } from '../registration-wizard.component';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements WizardStepComponent, OnInit, AfterViewInit {
  @Input() model!: RegistrationDetails;
  @Output() ready = new EventEmitter<StepReadyEvent>();
  
  step: WizardStep = WizardStep.Comments;
  
  constructor(@Host() private parent: RegistrationWizardComponent) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ready.emit({ step: this.step });
    }, 3000);
  }

  validate(): boolean {
    return this.model.comments.length > 0;
  }

  onNext(nextStep: WizardStep): boolean {
    return false;
  }
  
  onPrevious(prevStep: WizardStep): boolean {
    return true;
  }
}
