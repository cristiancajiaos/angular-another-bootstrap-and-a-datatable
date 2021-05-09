import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "another-bootstrap-and-a-datatable";

  films = [
    {
      title: "How To Train Your Dragon 2",
      year: 2014,
      country: "USA",
      duration: 102,
    },
    {
      title: "How To Train Your Dragon",
      year: 2010,
      country: "USA",
      duration: 98,
    },
    {
      title: "Kung Fu Panda",
      year: 2008,
      country: "USA",
      duration: 92,
    },
    {
      title: "Mr. Peabody and Sherman",
      year: 2014,
      country: "USA",
      duration: 93,
    },
    {
      title: "Megamind",
      year: 2010,
      country: "USA",
      duration: 95,
    },
    {
      title: "Kung Fu Panda 2",
      year: 2011,
      country: "USA",
      duration: 90,
    },
    {
      title: "Madagascar 3: Europe's Most Wanted",
      year: 2012,
      country: "USA",
      duration: 93,
    },
    {
      title: "Rise of the Guardians",
      year: 2012,
      country: "USA",
      duration: 97,
    },
    {
      title: "Penguins of Madagascar",
      year: 2014,
      country: "USA",
      duration: 91,
    },
    {
      title: "Home",
      year: 2015,
      country: "USA",
      duration: 93,
    },
    {
      title: "Kung Fu Panda 3",
      year: 2016,
      country: "USA",
      duration: 95,
    },
  ];

  columns = [
    { prop: "title" },
    { prop: "year" },
    { prop: "country" },
    { prop: "duration" },
  ];

  ngOnInit() {}
}
