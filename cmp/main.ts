import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CmpModule } from './cmp.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(CmpModule);
