import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';

import Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;
    
    constructor() { }

    ngOnInit() {
      var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,2)',
                    'rgba(54, 162, 235, 2)',
                    'rgba(255, 206, 86, 2)',
                    'rgba(75, 192, 192, 2)',
                    'rgba(153, 102, 255, 2)',
                    'rgba(255, 159, 64, 2)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    }

}
