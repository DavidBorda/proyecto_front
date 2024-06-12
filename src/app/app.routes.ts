import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { PATH } from './core/enum/path.enum';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Inicio',
    children: [
      // path por defecto del path padre

      {
        path: PATH.INICIO,
        title: 'Inicio',
        component: InicioComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },

      {
        path: PATH.INVENTARIO,
        title: 'Inventario',
        component: InventarioComponent,
      },
      {
        path: PATH.ACERCADE,
        title: 'Quienes Somos',
        component: AcercaDeComponent,
      },
    ],
  },
];
