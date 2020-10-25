import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PapeletaComponent } from './form/papeleta/papeleta.component';
import { InformacionComponent } from './form/informacion/informacion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';

import { ContribuyenteComponent } from './form/contribuyente/contribuyente.component';
import { MostrarDatosContribuyenteComponent } from './form/mostrar-datos-contribuyente/mostrar-datos-contribuyente.component';
import { DialogContribuyenteComponent } from './form/dialogs/dialog-contribuyente/dialog-contribuyente.component';
import { TablaContribuyenteComponent } from './form/dialogs/tabla-contribuyente/tabla-contribuyente.component';
import { TablaPersonaComponent } from './form/dialogs/tabla-persona/tabla-persona.component';
import { TablaEmpresaComponent } from './form/dialogs/tabla-empresa/tabla-empresa.component';
import { ListEmpresaComponent } from './form/dialogs/list-empresa/list-empresa.component';
import { ListPersonaComponent } from './form/dialogs/list-persona/list-persona.component';
import { BuscarPersonaComponent } from './form/dialogs/buscar-persona/buscar-persona.component';
import { BuscarEmpresaComponent } from './form/dialogs/buscar-empresa/buscar-empresa.component';
import { PropietarioComponent } from './form/propietario/propietario.component';
import { MostrarDatosPropietarioComponent } from './form/mostrar-datos-propietario/mostrar-datos-propietario.component';
import { InfraccionComponent } from './form/infraccion/infraccion.component';
import { MostrarDatosInfraccionComponent } from './form/mostrar-datos-infraccion/mostrar-datos-infraccion.component';
import { DialogInfraccionComponent } from './form/dialogs/dialog-infraccion/dialog-infraccion.component';
import { ListInfraccionComponent } from './form/dialogs/list-infraccion/list-infraccion.component';
import { BuscarInfraccionComponent } from './form/dialogs/buscar-infraccion/buscar-infraccion.component';
import { TablaInfraccionComponent } from './form/dialogs/tabla-infraccion/tabla-infraccion.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { MostrarDatosVehiculoComponent } from './mostrar-datos-vehiculo/mostrar-datos-vehiculo.component';
import { DialogVehiculoComponent } from './form/dialogs/dialog-vehiculo/dialog-vehiculo.component';
import { ListVehiculoComponent } from './form/dialogs/list-vehiculo/list-vehiculo.component';
import { BuscarVehiculoComponent } from './form/dialogs/buscar-vehiculo/buscar-vehiculo.component';
import { TablaVehiculoComponent } from './form/dialogs/tabla-vehiculo/tabla-vehiculo.component';
import { FooterComponent } from './headerfooter/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/papeletas', pathMatch: 'full' },
  { path: 'papeletas', component: PapeletaComponent },
  { path: 'papeletas/:id', component: PapeletaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PapeletaComponent,
    InformacionComponent,
    ContribuyenteComponent,
    MostrarDatosContribuyenteComponent,
    DialogContribuyenteComponent,
    TablaContribuyenteComponent,
    TablaPersonaComponent,
    TablaEmpresaComponent,
    ListEmpresaComponent,
    ListPersonaComponent,
    BuscarPersonaComponent,
    BuscarEmpresaComponent,
    PropietarioComponent,
    MostrarDatosPropietarioComponent,
    InfraccionComponent,
    MostrarDatosInfraccionComponent,
    DialogInfraccionComponent,
    ListInfraccionComponent,
    BuscarInfraccionComponent,
    TablaInfraccionComponent,
    VehiculoComponent,
    MostrarDatosVehiculoComponent,
    DialogVehiculoComponent,
    ListVehiculoComponent,
    BuscarVehiculoComponent,
    TablaVehiculoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
