import { IMyLinks } from "../interfaces/links.interface";
import { resolve } from "path";

export class LoadLinksListApi {
  myLinks: IMyLinks[] = [
    {
      id: 1,
      url: "http://gpdev.live/",
      description: "Site",
    },
    {
      id: 2,
      url: "https://twitter.com/glaydsonp",
      description: "Twitter",
    },
    {
      id: 3,
      url: "https://www.instagram.com/glaydsonp/",
      description: "Instagram",
    },
    {
      id: 4,
      url: "http://blog.glaydsonp.com/",
      description: "Blog",
    },
  ];
  constructor() {}

  onInit() {
    this.loadLinks();
  }

  /**
   * TO DO
   * Implement function of loading links from the api
   *
   * @memberof LoadLinksListApi
   */
  loadLinks() {}

  getLinks(): Promise<IMyLinks[]> {
    return new Promise<IMyLinks[]>((resolve, reject) => resolve(this.myLinks));
  }
}
