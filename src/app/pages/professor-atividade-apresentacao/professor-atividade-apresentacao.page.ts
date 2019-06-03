import { IResposta } from './../../models/resposta';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RespostaService } from 'src/app/services/resposta.service';

declare var google;

@Component({
  selector: 'app-professor-atividade-apresentacao',
  templateUrl: './professor-atividade-apresentacao.page.html',
  styleUrls: ['./professor-atividade-apresentacao.page.scss'],
})
export class ProfessorAtividadeApresentacaoPage implements OnInit {
  
  idAtividade= null;
  respostas: IResposta[];
  
  constructor(private route: ActivatedRoute, private respostaService: RespostaService) { }
  
  ngOnInit() {
    this.idAtividade = this.route.snapshot.params['atividade'];
    
    this.respostaService.getByAtividade(this.idAtividade).subscribe((resultado) => {
      this.respostas = resultado;
      
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      
      var chave = [];
      var valor = [];
      for (var i = 0; i < resultado.length; i++) {
        chave[i]=resultado[i].conteudo;
        valor[i]=resultado[i].votos;
      }
      
      data.addRows(resultado.length);
      for (var i = 0; i < chave.length; i++) {
        data.setCell(i, 0, chave[i]);
        data.setCell(i, 1, valor[i]);
      }

      var options = {
      'width':'80%',
      'height':'80%',
      pieHole: 0.4};
      
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    });
    
    //OUTROS EXEMPLOS
    //colunas grossas
    // var data = google.visualization.arrayToDataTable([
    //   ["Element", "Density", { role: "style" } ],
    //   ["Copper", 8.94, "#b87333"],
    //   ["Silver", 10.49, "silver"],
    //   ["Gold", 19.30, "gold"],
    //   ["Platinum", 21.45, "color: #e5e4e2"]
    // ]);
    
    // var view = new google.visualization.DataView(data);
    // view.setColumns([0, 1,
    //                  { calc: "stringify",
    //                    sourceColumn: 1,
    //                    type: "string"},
    //                  2]);
    
    // var options = {
    //   title: "Density of Precious Metals, in g/cm^3",
    //   width: 600,
    //   height: 400,
    //   bar: {groupWidth: "95%"},
    //   legend: { position: "none" },
    // };
    // var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
    // chart.draw(view, options);
    
    //colunas finas
    // var data = new google.visualization.DataTable();
    // data.addColumn('timeofday', 'Time of Day');
    // data.addColumn('number', 'Motivation Level');
    
    // data.addRows([
    //   [{v: [8, 0, 0], f: '8 am'}, 1],
    //   [{v: [9, 0, 0], f: '9 am'}, 2],
    //   [{v: [10, 0, 0], f:'10 am'}, 3],
    //   [{v: [11, 0, 0], f: '11 am'}, 4],
    //   [{v: [12, 0, 0], f: '12 pm'}, 5],
    //   [{v: [13, 0, 0], f: '1 pm'}, 6],
    //   [{v: [14, 0, 0], f: '2 pm'}, 7],
    //   [{v: [15, 0, 0], f: '3 pm'}, 8],
    //   [{v: [16, 0, 0], f: '4 pm'}, 9],
    //   [{v: [17, 0, 0], f: '5 pm'}, 10],
    // ]);
    
    // var options = {
    //   title: 'Motivation Level Throughout the Day',
    //   hAxis: {
    //     title: 'Time of Day',
    //     format: 'h:mm a',
    //     viewWindow: {
    //       min: [7, 30, 0],
    //       max: [17, 30, 0]
    //     }
    //   },
    //   vAxis: {
    //     title: 'Rating (scale of 1-10)'
    //   }
    // };
    
    // var chart = new google.visualization.ColumnChart(
    //   document.getElementById('chart_div'));
    
    // chart.draw(data, options);
    
    // Pizza
    // var data = new google.visualization.DataTable();
    // data.addColumn('string', 'Topping');
    // data.addColumn('number', 'Slices');
    // data.addRows([
    //   ['Mushrooms', 3],
    //   ['Onions', 1],
    //   ['Olives', 1],
    //   ['Zucchini', 1],
    //   ['Pepperoni', 2]
    // ]);
    
    // // Set chart options
    // var options = {'title':'How Much Pizza I Ate Last Night',
    //                'width':400,
    //                'height':300};
    
    // // Instantiate and draw our chart, passing in some options.
    // var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    // chart.draw(data, options);
  }
  
}
