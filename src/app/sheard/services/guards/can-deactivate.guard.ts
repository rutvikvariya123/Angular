import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyComponent } from 'src/app/dummy/dummy.component';
import { ReactiveformComponent } from 'src/app/reactiveform/reactiveform.component';


type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}
  
export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: ReactiveformComponent) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};