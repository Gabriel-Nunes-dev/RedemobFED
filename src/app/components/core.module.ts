import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';

import {SharedModule} from '../shared/shared.module';
import {SidebarComponent} from "./sidebar/sidebar.component";

@NgModule({
  imports: [CommonModule, SharedModule, NgxMaskModule.forRoot()],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]

})
export class CoreModule {}
