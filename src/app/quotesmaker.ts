export class Quotesmaker {
  public showAuthor: boolean;
  public showSubmitter: boolean;
  public showCreatedDate: boolean;
  public showName: boolean;
  constructor(public id: number, public name: string, public author: string, public submitter: string, public createdDate: Date, public clickCounter:number) {
    this.showAuthor = false;
    this.showSubmitter = false;
    this.showCreatedDate = false;
    this.showName = false;
  }
}
