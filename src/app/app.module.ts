import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NpsHeaderComponent} from './pages/nps-header/nps-header.component';
import {NpsHomeRootContainerComponent} from './pages/home/nps-home-root-container/nps-home-root-container.component';
import {RouterModule, Routes} from '@angular/router';
import { NpsHomePushSettingsComponent } from './pages/home/nps-home-push-settings/nps-home-push-settings.component';
import { NpsHomeProfileTablesComponent } from './pages/home/nps-home-profile-tables/nps-home-profile-tables.component';

registerLocaleData(zh);


const appRoutes: Routes = [
  // // {path: 'overview', component: WinkOverviewRootContainerComponent},
  // {path: 'home', component: NpsHomeRootContainerComponent},
  // // {path: 'operate', component: WinkOperateRootContainerComponent},
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: NpsHomeRootContainerComponent,
    children: [
      {
        path: 'settings/push',
        component: NpsHomePushSettingsComponent,
      },
      {
        path: 'profile/tables',
        component: NpsHomeProfileTablesComponent,
      }
    ]
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NpsHeaderComponent,
    NpsHomeRootContainerComponent,
    NpsHomePushSettingsComponent,
    NpsHomeProfileTablesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    // TODO: in production enableTracing: false;
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
