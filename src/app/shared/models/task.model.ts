export class Task {
  id: number;
  title: string;
  note: string;
  status: 'finished' | 'unfinished' | 'pending' = 'unfinished';
  difficulty: number = 0;


  constructor(title: string = '', note: string = '', id: number = null, status: 'finished' | 'unfinished' | 'pending' = 'unfinished', difficulty: number = 1) {
    this.title = title;
    this.note = note;
    this.id = id;
    this.status = status;
    this.difficulty = difficulty;
  }
}
