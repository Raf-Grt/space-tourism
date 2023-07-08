import { Crewmate } from './crew.interface.js';
import { Destination } from './destination.intercafe';
import { Technology } from './technology.interface.js';

export interface Data {
  destinations: Destination[];
  crew: Crewmate[];
  technology: Technology[];
}
