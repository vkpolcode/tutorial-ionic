import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'action-sheets.html'
})
export class ActionSheetsPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Modify your album",
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => console.log('Archive clicked')
        }, {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => console.log('Cancel clicked')
        }
      ]
    });
    actionSheet.present();
  }
}
