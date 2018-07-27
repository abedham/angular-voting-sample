import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Array<Item>;
  constructor() {
    this.items = [
      new Item("Abdelrahman Facebook", "https://www.facebook.com/abedhamada")
    ];
  }
  addItem(item) {
    let index;
    for (index in this.items) {
      console.log(item);
      if (this.items[index].votes < item.votes) {
        this.items.splice(index, 0, item);
        return;
      } else if (this.items[index].votes === item.votes) {
        // this.items.splice(index + 1, 0, item);
        // return;
        continue;
      }
    }
    this.items.splice(index + 1, 0, item);
    // this.items.push(item);
  }
  reorderItems(data) {
    // let item = this.items[data[0]];
    // this.items.splice(data[0], 1);
    // this.addItem(item);
    
    let index = data[0];
    if (index === -1) return;
    if (index === this.items.length) return;

    let item = this.items[index];
    let isIncrement = data[1] === 1;
    if (isIncrement) {
      //the item is first item
      if (index !== 0) {
        let nextItem = this.items[index - 1];
        if (item.votes > nextItem.votes) {
          this.items[index] = nextItem;
          this.items[index - 1] = item;
        }
      }
      this.reorderItems([index - 1, 1]);
    } else {
      //the item is last item
      if (index !== this.items.length - 1) {
        let prevItem = this.items[index + 1];
        if (item.votes < prevItem.votes) {
          this.items[index] = prevItem;
          this.items[index + 1] = item;
        }
      }
      this.reorderItems([index + 1, -1]);
    }
  }
  ngOnInit() {
  }

}
