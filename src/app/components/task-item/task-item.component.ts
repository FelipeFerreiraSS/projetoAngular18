import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() tarefa!:Tarefa
  @Output() onDeleteTask = new EventEmitter<Tarefa>()
  @Output() onToggleConcluido = new EventEmitter<Tarefa>()

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa)
  }

  onToggle(tarefa: Tarefa){
    this.onToggleConcluido.emit(tarefa)
  }
}
