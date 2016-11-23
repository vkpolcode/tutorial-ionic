import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { CardsPage } from '../pages/cards/cards';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    CardsPage,
    GesturesPage,
    GridPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    CardsPage,
    GesturesPage,
    GridPage
  ],
  providers: []
})
export class AppModule {}
