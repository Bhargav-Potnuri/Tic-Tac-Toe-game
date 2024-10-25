import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GameComponent } from './game/game.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
