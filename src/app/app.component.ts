import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Analytics', icon: 'analytics' },
    { title: 'Alerts', url: '/folder/Notifications', icon: 'notifications' },
    { title: 'Issues', url: '/folder/Issues', icon: 'bug' },
    { title: 'Schedules', url: '/folder/Schedules', icon: 'calendar' },
    { title: 'Settings', url: '/folder/Settings', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
