import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  effect,
  signal,
} from '@angular/core';
import { AUTH_SERVICE_TOKEN } from '../../services/auth/auth.token';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private readonly authService = inject(AUTH_SERVICE_TOKEN);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainer = inject(ViewContainerRef);

  private readonly requiredRole = signal<string | null>(null);
  private isViewCreated = false;

  @Input('appHasRole') set appHasRole(role: string) {
    this.requiredRole.set(role);
  }

  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      const role = this.requiredRole();

      const hasAccess = user && user.role === role;

      if (hasAccess && !this.isViewCreated) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isViewCreated = true;
      } else if (!hasAccess && this.isViewCreated) {
        this.viewContainer.clear();
        this.isViewCreated = false;
      }
    });
  }
}
