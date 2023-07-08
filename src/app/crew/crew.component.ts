import { Component, OnInit } from '@angular/core';
import { Crewmate } from '../shared/interfaces/crew.interface';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  public crewmate: Crewmate | undefined;
  public crewList: string[] = [
    'Douglas Hurley',
    'Mark Shuttleworth',
    'Victor Glover',
    'Anousheh Ansari',
  ];
  public selectedCrewmate: string = 'Douglas Hurley';
  private dataLength: number;
  private crewmateIndex: number = 0;

  constructor(private dataService: DataService) {
    this.crewmate = this.dataService.getCrewmate(this.selectedCrewmate);
    this.dataLength = this.dataService.data$.value['crew'].length;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.toggleCrewmate();
    }, 5000);
  }

  public changeCrewmate(name: string) {
    this.crewmate = this.dataService.getCrewmate(name);
    if (this.crewmate) {
      this.selectedCrewmate = this.crewmate.name;
      this.crewmateIndex = this.crewList.indexOf(this.selectedCrewmate);
    }
  }

  private toggleCrewmate(): void {
    let newIndex: number = this.crewmateIndex + 1;

    if (newIndex >= this.dataLength) {
      this.crewmateIndex = 0;
    } else {
      this.crewmateIndex = newIndex;
    }
    this.crewmate = this.dataService.getCrewmate(
      this.crewList[this.crewmateIndex]
    );
    if (this.crewmate) {
      this.selectedCrewmate = this.crewmate.name;
    }
  }
}
