import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { StarWarsService } from './services/star-wars.service';
import { LogService } from './services/log.service';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
