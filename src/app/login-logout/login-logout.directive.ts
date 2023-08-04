import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoginLogout]'
})
export class LoginLogoutDirective {


  private isLoggedIn: boolean = false;
  
  constructor(private el : ElementRef) { }

  @HostListener('click')
  onClick() {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      this.login();
    }
  }

  private login () {
    console.log('Show login content');
    this.isLoggedIn = true;
    this.el.nativeElement.textContent = 'Log Out';
    this.el.nativeElement.style.color = 'black'
  }

  private logout () {
    // console.log('Logged out');
    this.isLoggedIn = false;
    this.el.nativeElement.textContent = 'Log In'; 
    this.el.nativeElement.style.color = 'white';
  }

}
