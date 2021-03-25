import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from 'src/app/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Output() goalCompleted = new EventEmitter<boolean>();

  @Input() goal: Goal;

  
 
  constructor() { }

  ngOnInit(): void {
  }

  goalComplete(e:boolean){
     this.goalCompleted.emit(e);
  }

}
