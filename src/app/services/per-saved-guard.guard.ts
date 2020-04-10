import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PermissionsComponent } from '../admin/permissions/permissions.component';

@Injectable()
export class PerSavedGuardGuard implements CanDeactivate<PermissionsComponent> {
  canDeactivate(
    component: PermissionsComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.editsSaved();
  }
}
