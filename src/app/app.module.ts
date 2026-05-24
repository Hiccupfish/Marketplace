import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

export class AppModule {
  readonly declarations = [AppComponent];
  readonly imports = [CoreModule, AppRoutingModule];
}