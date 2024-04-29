export default class Reminder {
  id: Date;
  isComplete: boolean;

  constructor(public title: string) {
    this.id = new Date();
    this.isComplete = false;
  }
}
