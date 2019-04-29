import { Component, OnInit } from '@angular/core';
type Event = {
  startTime: string,
  endTime: string,
  title: string,
  location: string,
  description: string,
};

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  isMobile: boolean;
  displayedColumns: string[] = ['title', 'startTime', 'endTime', 'location', 'description'];

  saturday: Array<Event> = [
    {
      title: 'Check-in',
      location: 'Check-in desk',
      startTime: '9:00 AM',
      endTime: '3:00 PM',
      description: 'Check-in and get your event badge',
    },
    {
      title: 'Lunch (Hacking begins)',
      location: 'Food hallway',
      startTime: '11:00 AM',
      endTime: '12:00 PM',
      description: 'Breakfast tacos from Chiloso',
    },
    {
      title: 'GitHub Workshop',
      location: 'B192',
      startTime: '11:00 AM',
      endTime: '12:00 PM',
      description: '',
    },
    {
      title: 'Team-matching',
      location: 'Room B190',
      startTime: '11:30 AM',
      endTime: '12:00 PM',
      description: 'An event to find some teammates!',
    },
    {
      title: 'Sponsor Q&A',
      location: 'Hacking Area',
      startTime: '12:00 PM',
      endTime: '2:00 PM',
      description: 'Learn about our sponsors and their challenge!',
    },
    {
      title: 'Creating an API in Golang',
      location: 'B190',
      startTime: '12:30 PM',
      endTime: '1:30 PM',
      description: 'Learn how to create a simple API in GO with Eric Suedmeier',
    },
    {
      title: 'Intro to Docker/Kubernetes',
      location: 'B192',
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      description: 'Get started with Docker/Kubernetes for deploying and scaling',
    },
    {
      title: 'Deploy All The Apps',
      location: 'B190',
      startTime: '4:00 PM',
      endTime: '5:00 PM',
      description: 'Setting up a simple cloud-dev environment',
    },
    {
      title: 'Dinner',
      location: 'Food Hallway',
      startTime: '5:00 PM',
      endTime: '6:00 PM',
      description: 'Dinner from Halal Guys',
    },
    {
      title: 'Express, Node, and GitLab with StateFarm',
      location: 'B192',
      startTime: '6:00 PM',
      endTime: '7:00 PM',
      description: 'Learn to make server-side applications in JavaScript with StateFarm',
    },
    {
      title: 'MAD Workshop',
      location: 'B190',
      startTime: '7:15 PM',
      endTime: '8:15 PM',
      description: 'TBD',
    },
    {
      title: 'MLH Cupstacking',
      location: 'Projector Area',
      startTime: '8:00 PM',
      endTime: '9:00 PM',
      description: 'Cupstacking competition hosted by MLH',
    },
    {
      title: 'Create your own Phishing Campaign',
      location: 'B192',
      startTime: '8:30 PM',
      endTime: '9:30 PM',
      description: '',
    },
    {
      title: 'Study Session',
      location: 'B190',
      startTime: '9:45 PM',
      endTime: '10:45 PM',
      description: '',
    },
    {
      title: 'Learn how to Protect your code',
      location: 'B192',
      startTime: '11:00 PM',
      endTime: '12:00 AM',
      description: 'Introduction to Static Code Analysis',
    },
  ];

  sunday: Array<Event> = [
    {
      title: 'Midnight Snack',
      location: 'Snack table',
      startTime: '12:00 AM',
      endTime: '12:00 AM',
      description: 'Grab some Insomnia Cookies at the snack table!',
    },
    {
      title: 'Breakfast',
      location: 'Snack table',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      description: 'Breakfast pastries from UNT\'s Clark Bakery',
    },
    {
      title: 'Hacking ends',
      location: 'N/A',
      startTime: '11:00 AM',
      endTime: '11:00 AM',
      description: 'Submissions to DevPost are due',
    },
    {
      title: 'Lunch',
      location: 'Food Hall',
      startTime: '12:00 PM',
      endTime: '1:00 PM',
      description: 'Lunch from Domino\'s Pizza',
    },
    {
      title: 'Setup for judging',
      location: 'Hacking Area',
      startTime: '1:00 PM',
      endTime: '1:30 PM',
      description: 'Those who are presenting will start setting up for the judges',
    },
    {
      title: 'Judging',
      location: 'Hacking Area',
      startTime: '1:30 PM',
      endTime: '3:00 PM',
      description: 'Judges will evaluate the projects!',
    },
    {
      title: 'Closing Ceremony',
      location: 'Hacking Area',
      startTime: '3:00 PM',
      endTime: '5:00 PM',
      description: 'Awards and Wrap-up',
    },
  ];

  constructor() { }

  ngOnInit() {
    
    const desktopQuery: any = window.matchMedia("(min-width: 850px)");
    desktopQuery.addListener((mq) => this.queryCheck(mq));
    this.queryCheck(desktopQuery);
    
    // const mobileQuery: any = window.matchMedia('(min-width: 320px) and (max-width: 850px)');
    // mobileQuery.addListener((mq) => {
    //   console.log('query mobile');
    //   this.displayedColumns = ['title', 'startTime', 'location'];
    //   // if (mq.matchMedia) {
    //   // }
    // });
  }

  queryCheck(mq) {
    if (mq.matches) {
      console.log('query desktop');
      this.displayedColumns = ['title', 'startTime', 'endTime', 'location', 'description'];
    }
    else {
      console.log('query mobile');
      this.displayedColumns = ['title', 'startTime', 'location'];
    }
    // if (mq.matchMedia) {
    // }
  }

}
