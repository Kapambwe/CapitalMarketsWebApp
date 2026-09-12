export function renderNetworkGraph(elementId, nodes, links, title) {
    const chartDom = document.getElementById(elementId);
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);
    
    const option = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'force',
                symbolSize: 50,
                roam: true,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 20
                },
                data: nodes,
                links: links,
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },
                force: {
                    repulsion: 1000,
                    edgeLength: [50, 200]
                }
            }
        ]
    };

    myChart.setOption(option);
    
    window.addEventListener('resize', () => {
        myChart.resize();
    });
}

export function renderSankeyDiagram(elementId, data, title) {
    const chartDom = document.getElementById(elementId);
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                emphasis: {
                    focus: 'adjacency'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.5
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });
}

export function renderHeatmap(elementId, data, xAxisLabels, yAxisLabels, title) {
    const chartDom = document.getElementById(elementId);
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '70%',
            top: '15%'
        },
        xAxis: {
            type: 'category',
            data: xAxisLabels,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: yAxisLabels,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '5%',
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        series: [
            {
                name: 'Risk Intensity',
                type: 'heatmap',
                data: data,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });
}
