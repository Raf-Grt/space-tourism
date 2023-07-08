import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showMobile: boolean = false;
  public menuLogo: string = '../../assets/shared/icon-hamburger.svg';

  public toggleMenu(): void {
    this.showMobile = !this.showMobile;
    if (this.showMobile) {
      this.menuLogo = '../../assets/shared/icon-close.svg';
    } else {
      this.menuLogo = '../../assets/shared/icon-hamburger.svg';
    }
  }
}
