import { Pin } from './pin';
import { Training } from './training';

export interface City {
  parent: Pin;
  workshops: Training[];
  camps: Training[];
  trainings: Training[];
}
