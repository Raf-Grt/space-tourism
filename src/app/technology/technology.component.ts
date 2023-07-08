import { Component } from '@angular/core';
import { Technology } from '../shared/interfaces/technology.interface';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  public selectedTechnology: Technology | undefined;
  public techList: string[] = ['Launch vehicle', 'Spaceport', 'Space capsule'];
  public currentTechName: string = this.techList[0];

  constructor(private dataService: DataService) {
    this.selectedTechnology = this.dataService.getTechnology(
      this.currentTechName
    );
  }

  public changeTechnology(name: string): void {
    this.selectedTechnology = this.dataService.getTechnology(name);
    if (this.selectedTechnology) {
      this.currentTechName = this.selectedTechnology.name;
    }
  }
}
