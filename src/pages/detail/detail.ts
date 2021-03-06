import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsService } from '../../services/items.services';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item={id:null,title:null,descripcion:null};
  id=null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemServices:ItemsService) {
    this.id=navParams.get('id');
    if(this.id!=0){
      this.item=itemServices.detailItems(this.id);
  }
  }
  addItem(){
  if (this.id !=null){
    this.itemServices.editItem(this.item);
    alert("Item Update")
  }  
  else
  {
    this.item.id = Date.now();
    this.itemServices.createItems(this.item);
    alert("Item create");
  }
  this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
 
}
