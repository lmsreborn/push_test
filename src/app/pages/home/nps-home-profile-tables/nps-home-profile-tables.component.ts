import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nps-home-profile-tables',
  templateUrl: './nps-home-profile-tables.component.html',
  styleUrls: ['./nps-home-profile-tables.component.less']
})
export class NpsHomeProfileTablesComponent implements OnInit {


  tableListData = [
    {
      name: 'push_gift_fans_ext',
      remark: '',
      lastTime: '2018-05-20 00:00',
      recordCount: 0,
      diskSpace: 1
    },


    {
      name: 'live_active_validate_fans',
      remark: '',
      lastTime: '2018-05-20 00:00',
      recordCount: 0,
      diskSpace: 1
    },

    {
      name: 'live_best_validate_fans',
      remark: '',
      lastTime: '2018-05-20 00:00',
      recordCount: 0,
      diskSpace: 1
    },

    {
      name: 'live_best_validate_fans',
      remark: '',
      lastTime: '2018-05-20 00:00',
      recordCount: 0,
      diskSpace: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
