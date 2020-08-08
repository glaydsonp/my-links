import { IMyLinks } from "../interfaces/links.interface";
import data from "../../../links.json";

export class LoadLinksListApi {
  myLinks: IMyLinks[] = [];
  constructor() {
    this.onInit();
  }

  onInit() {
    this.loadLinks();
  }

  /**
   * TO DO
   * Implement function of loading links from the api
   *
   * @memberof LoadLinksListApi
   */
  loadLinks() {
    this.myLinks = data;
  }

  getLinks(): Promise<IMyLinks[]> {
    return new Promise<IMyLinks[]>((resolve, reject) => resolve(this.myLinks));
  }
}
