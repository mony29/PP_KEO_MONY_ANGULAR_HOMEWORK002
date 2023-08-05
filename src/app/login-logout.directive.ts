import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appLoginLogout]'
})
export class LoginLogoutDirective {
  
  private isLoggedIn: boolean = false;
  
  constructor(private tl : TemplateRef<any>, private vc : ViewContainerRef) { }

  @Input() set appLoginLogout(condition : boolean) {
    if( !condition && !this.isLoggedIn ){
      this.vc.createEmbeddedView(this.tl);
      this.isLoggedIn = true;
    }
    else if (condition && this.isLoggedIn) {
      this.vc.clear();
      this.isLoggedIn = false;
    }
  }
}
