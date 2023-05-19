import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { CompaniesService } from './services/companies.service';
import { CountriesService } from './services/countries.service';
import { CustomersService } from './services/customers.service';
import { PrintLabsService } from './services/printlabs.service';
import { RealmService } from './services/realm.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        RealmService,
        CountriesService,
        CustomersService,
        UserService,
        CompaniesService,
        PrintLabsService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthorizationInterceptor,
          multi: true
        },
      ]
    };
  }
}
