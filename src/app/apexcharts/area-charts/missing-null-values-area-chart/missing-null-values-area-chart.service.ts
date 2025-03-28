import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MissingNullValuesAreaChartService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        {
                            name: "Network",
                            data: [
                                {
                                    x: "Dec 23 2017",
                                    y: null
                                },
                                {
                                    x: "Dec 24 2017",
                                    y: 44
                                },
                                {
                                    x: "Dec 25 2017",
                                    y: 31
                                },
                                {
                                    x: "Dec 26 2017",
                                    y: 38
                                },
                                {
                                    x: "Dec 27 2017",
                                    y: null
                                },
                                {
                                    x: "Dec 28 2017",
                                    y: 32
                                },
                                {
                                    x: "Dec 29 2017",
                                    y: 55
                                },
                                {
                                    x: "Dec 30 2017",
                                    y: 51
                                },
                                {
                                    x: "Dec 31 2017",
                                    y: 67
                                },
                                {
                                    x: "Jan 01 2018",
                                    y: 22
                                },
                                {
                                    x: "Jan 02 2018",
                                    y: 34
                                },
                                {
                                    x: "Jan 03 2018",
                                    y: null
                                },
                                {
                                    x: "Jan 04 2018",
                                    y: null
                                },
                                {
                                    x: "Jan 05 2018",
                                    y: 11
                                },
                                {
                                    x: "Jan 06 2018",
                                    y: 4
                                },
                                {
                                    x: "Jan 07 2018",
                                    y: 15
                                },
                                {
                                    x: "Jan 08 2018",
                                    y: null
                                },
                                {
                                    x: "Jan 09 2018",
                                    y: 9
                                },
                                {
                                    x: "Jan 10 2018",
                                    y: 34
                                },
                                {
                                    x: "Jan 11 2018",
                                    y: null
                                },
                                {
                                    x: "Jan 12 2018",
                                    y: null
                                },
                                {
                                    x: "Jan 13 2018",
                                    y: 13
                                },
                                {
                                    x: "Jan 14 2018",
                                    y: null
                                }
                            ]
                        }
                    ],
                    chart: {
                        type: "area",
                        height: 350,
                        animations: {
                            enabled: false
                        },
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    colors: [
                        "#3761ee"
                    ],
                    stroke: {
                        curve: "straight"
                    },
                    fill: {
                        opacity: 0.8,
                        type: "pattern",
                        pattern: {
                            style: "horizontalLines",
                            width: 5,
                            height: 5,
                            strokeWidth: 3
                        }
                    },
                    markers: {
                        size: 5,
                        hover: {
                            size: 9
                        }
                    },
                    title: {
                        text: "Network Monitoring",
                        align: "left",
                        offsetX: -9,
                        style: {
                            fontWeight: '500',
                            fontSize: '14px',
                            color: '#5b5b98'
                        }
                    },
                    tooltip: {
                        intersect: true,
                        shared: false
                    },
                    theme: {
                        palette: "palette1"
                    },
                    xaxis: {
                        type: "datetime",
                        axisBorder: {
                            show: false,
                            color: '#a9a9c8'
                        },
                        axisTicks: {
                            show: true,
                            color: '#a9a9c8',
                            borderType: 'dotted'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#262626",
                                fontSize: "13px"
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Bytes Received",
                            style: {
                                color: "#475569",
                                fontSize: "14px",
                                fontWeight: 500
                            }
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#a9a9c8",
                                fontSize: "13px"
                            }
                        },
                        axisBorder: {
                            show: false,
                            color: '#edeff5'
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#edeff5",
                        row: {
                            colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
                            opacity: 0.5
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#missing_null_values_area_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}