import { ECharts } from "echarts";
import { generateOption } from "./OptionGenerator";

let echarts: ECharts;

document.addEventListener('echarts:initialized', () => {
    echarts = window.echarts.getInstanceByDom(document.getElementById('app') as HTMLDivElement);
    console.log(echarts);
});

document.querySelector('[data-function="generateChart"]')?.addEventListener('click', () => {
    echarts.setOption(generateOption());
});
