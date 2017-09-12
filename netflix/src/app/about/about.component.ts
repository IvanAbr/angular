import { Component,OnInit } from '@angular/core';

@Component({
  selector:'netflix-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
name: 'Ivan';
  constructor() { }

  ngOnInit() {
  }

}
