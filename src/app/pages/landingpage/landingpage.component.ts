import { Component, OnInit } from '@angular/core';
import { ITile } from './../../tile/tile.component';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  headerText: string;
  skillInformation: Array<ITile> = [
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    },
    {
      name: "CSS3",
      description: "I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.",
      imageURL: "assets/images/css.png"
    },
    {
      name: " Responsive Web Design",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.",
      imageURL: "assets/images/responsive.png"
    },
    {
      name: "UI & UX Design",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.I will learn basics of UI & UX Design and use these concepts in build apps that are both functional and usable",
      imageURL: "assets/images/ui-ux.png"
    }
    {
      name: "JavaScript",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.I will define the behavior of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript",
      imageURL: "assets/images/js.jpg"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
    {
      name: "HTML5",
      description: "I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
      imageURL: "assets/images/html.png"
    }
  ];
  constructor() {
    this.headerText = "--We are Learning--";
  }

  ngOnInit() {
  }

}
