import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexXAxis,
    ApexTooltip,
    ApexTheme,
    ApexGrid
  } from 'ng-apexcharts';
  export interface topcard {
    bgcolor: string,
    icon: string,
    title: number,
    subtitle: string
}
export interface Graph{
    name:string;
    amt:number;
}
export type salesChartOptions ={
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: any;
    theme: ApexTheme;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    colors: string[];
    markers: any;
    grid: ApexGrid;
  };
   export default salesChartOptions;