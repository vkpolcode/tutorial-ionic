import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  testRadioOpen: boolean;
  testRadioResult: string;
  testCheckboxOpen: boolean;
  testCheckboxResult: any;

  constructor(public alertCtrl: AlertController) {

  }

  showBasic() {
    let alert = this.alertCtrl.create({
      title: 'new Friend!',
      subTitle: 'Your friend, Obi wan kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name for this new album you are so keen on adding',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => console.log('Cancel Click')
        },
        {
          text: 'Save',
          handler: data => console.log('Save click')
        }
      ]
    });
    prompt.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => console.log('Disagree clicked')
        },{
          text: 'Agree',
          handler: () => console.log('Agree clicked')
        }
      ]
    });
    confirm.present();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber Color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    })
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    })
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create({
      title: 'Which planets have you visited?'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }
}
