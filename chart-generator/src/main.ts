import { generateOption } from "./OptionGenerator";

import "./dom_bindings";
import "./style.css";

const myChart = echarts.init(document.getElementById('app') as HTMLDivElement, "vintage");
myChart.setOption(generateOption());

document.dispatchEvent(new Event('echarts:initialized'));
