<template>
  <div>
    <section>Dashboard</section>
    <section class="mt-4 grid gap-4 md:grid-cols-2">
      <div>
        <CommonQuizAccessApp />
        <article class="mt-4">
          <n-card class="h-full">
            <QuoteLineChart class="min-h-[300px]" />
          </n-card>
          <!-- <QuoteRecent /> -->
        </article>
      </div>
      <div>
        <article class="grid grid-cols-1 gap-4">
          <!-- <n-card class="h-full">
            <div class="flex h-full w-full flex-col">
              <span class="font-semibold">Weekly Sales </span>
              <div class="flex h-full w-full gap-8">
                <div
                  class="flex h-full flex-col justify-end gap-4 whitespace-nowrap"
                >
                  <span
                    class="text-3xl font-semibold text-gray-500 dark:text-gray-300"
                    >$74K</span
                  >
                  <div>
                    <span
                      class="rounded-xl bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-500"
                    >
                      $74K
                    </span>
                  </div>
                </div>
                <div ref="lineChart" class="h-28 w-full" />
              </div>
            </div>
          </n-card> -->
          <CommonRecentStatusApp/>
         
        </article>
        <article class="grid mt-4 grid-cols-2 gap-4">
         <n-card class="h-full">
            <QuotePieChart class="min-h-[180px]" />
          </n-card>
          <n-card class="h-full">
            <QuotePieChart class="min-h-[180px]" />
          </n-card>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import theme from '#tailwind-config/theme';
import { type ECOption, useEcharts } from '~/hooks/echart';

definePageMeta({
  middleware: 'auth',
});

const themeColor = theme.colors.primary[500];

const chart1 = ref<ECOption>() as Ref<ECOption>;
const { domRef: lineChart } = useEcharts(chart1);

const setChart = () => {
  chart1.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    grid: {
      left: '-10%',
      right: '-10%',
      bottom: '-20%',
      top: '0%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        show: false,
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        symbolSize: 12,
        showSymbol: false,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(134,92,225,0.4)',
              },
              {
                offset: 1,
                color: 'rgba(134,92,225,0.0001)',
              },
            ],
          },
        },
        color: themeColor,
        emphasis: {
          focus: 'series',
        },
        itemStyle: {
          // color: '#09b287',
          // borderColor: '#000',
          borderWidth: 10,
          borderCap: 'round',
          borderType: 'solid',
        },
        lineStyle: {
          width: 3.5,
        },
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210],
      },
    ],
  };
};

setChart();
</script>
