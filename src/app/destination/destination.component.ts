import { Component } from '@angular/core';
import { Destination } from '../shared/interfaces/destination.intercafe';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  public destination: Destination | undefined;
  public selectedDestination: string = 'Moon';

  constructor(private dataService: DataService) {
    this.destination = this.dataService.getDestination('Moon');
  }

  public changeDestination(name: string): void {
    this.destination = this.dataService.getDestination(name);
    this.selectedDestination = name;
  }
}
