import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MachineCardComponent } from '../machine-card/machine-card.component';
import { MachineType } from '../models/models';

@Component({
  selector: 'app-card-flow',
  standalone: true,
  imports: [CommonModule, MachineCardComponent],
  templateUrl: './card-flow.component.html',
  styleUrl: './card-flow.component.scss'
})
export class CardFlowComponent {

  public cardList: MachineType[] =  ['scale','attacher','packer','closer']

}
