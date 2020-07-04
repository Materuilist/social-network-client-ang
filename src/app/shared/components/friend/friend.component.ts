import { Component, OnInit, Input } from '@angular/core';
import { ButtonElement } from '../../models/UI/button-element.class';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  @Input() login:string = 'Неизвестно';
  @Input() avatar:string = null;

  @Input() buttons:ButtonElement[];

  constructor() { }

  ngOnInit(): void {
  }

}
