import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disc-item',
  templateUrl: './disc-item.component.html',
  styleUrls: ['./disc-item.component.scss']
})
export class DiscItemComponent {
  @Input() disc: any;
}
