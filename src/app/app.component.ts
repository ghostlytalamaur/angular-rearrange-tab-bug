import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Tab {
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public tabs: Tab[] = [
    { id: 'tab1' },
    { id: 'tab2' },
    { id: 'tab3' }
  ];

  public trackById = (index: number, box: Tab) => box.id;

  public onRearrange(): void {
    this.tabs = this.tabs.slice();
    const buf = this.tabs[0];
    this.tabs[0] = this.tabs[1];
    this.tabs[1] = buf;
  }

}
