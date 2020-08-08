import { IMyLinks } from "./interfaces/links.interface";
import { LoadLinksListApi } from "./apis/list-links.api";

document.addEventListener("DOMContentLoaded", () => {
  const loadLinksListApi = new LoadLinksListApi();
  const mainApp = new Main(loadLinksListApi);
});

class Main {
  linksList = document.querySelector("#links-list");
  yearHolderComponent = document.querySelector("#year__holder");

  constructor(private loadLinkslistApi: LoadLinksListApi) {
    this.onInit();
  }

  onInit() {
    this.loadContent();
    this.setFooterYear();
  }

  loadContent() {
    this.loadLinkslistApi.getLinks().then((res) => {
      this.generateHtml(res);
    });
  }

  generateHtml(myLinks: IMyLinks[]) {
    myLinks.some((link) => {
      const listItem = document.createElement("li");

      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.className =
        "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full inline-block";
      a.innerHTML = link.description;

      listItem.id = `list-item-${link.id}`;
      listItem.append(a);

      this.linksList.appendChild(listItem);
    });
  }

  setFooterYear() {
    const date = new Date();
    this.yearHolderComponent.innerHTML = `${date.getFullYear()} ©`;
  }
}
