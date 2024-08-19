import { Component } from '@angular/core';
import { MachineCardComponent } from '../machine-card/machine-card.component';
import { CommonModule } from '@angular/common';
import { MachineType } from '../models/models';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [CommonModule, MachineCardComponent],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss'
})
export class NavPanelComponent {

  constructor(private util: UtilService){}
  
  public cardList: MachineType[] =  ['scale','attacher','packer','closer']
  public currentDt = this.util.getCurrentDateTime()
}
