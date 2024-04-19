<template>
  <div class="home-container w-full h-full flex justify-start items-center p-3">
    <a-calendar v-model:value="value" class="calendar w-full h-full rounded py-2 px-4" @panel-change="onPanelChange" @select="onSelect">
      <template #dateCellRender="{ current }">
        <ul class="events">
          <li v-for="item in getListData(current)" :key="item.content">
            <a-badge :status="item.type" :text="item.content" />
          </li>
        </ul>
      </template>
      <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { Dayjs } from 'dayjs'
const value = ref<Dayjs>()

const getListData = (value: Dayjs) => {
  let listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ]
      break
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ]
      break
    case 15:
      listData = [
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' }
      ]
      break
    default:
  }
  return listData || []
}

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394
  }
}

const onPanelChange = (value: Dayjs, mode: string) => {
  message.info(`current value: ${value.format('YYYY-MM-DD')} mode: ${mode}`)
}

const onSelect = (date: Dayjs) => {
  message.info(`You selected date: ${date.format('YYYY-MM-DD')} `)
}
</script>

<style lang="less" scoped>
.home-container {
  .calendar {
    ::v-deep(.ant-picker-calendar-date-content) {
      height: 9.5vh;
    }
    .events {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .events .ant-badge-status {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      font-size: 12px;
    }
    .notes-month {
      text-align: center;
      font-size: 18px;
    }
    .notes-month section {
      font-size: 18px;
    }
  }
}
</style>
