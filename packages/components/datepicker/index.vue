<template>
  <div class="vai-datepicker" ref="picker">
    <input
      type="text"
      :value="displayValue"
      placeholder="选择日期"
      @click="visible = !visible"
      readonly
      class="input"
    />
    <div v-if="visible" class="panel">
      <div class="header">
        <button @click="prevYear">«</button>
        <button @click="prevMonth">‹</button>
        <span>{{ year }}年 {{ month + 1 }}月</span>
        <button @click="nextMonth">›</button>
        <button @click="nextYear">»</button>
      </div>
      <div class="weekdays">
        <span v-for="d in ['日','一','二','三','四','五','六']" :key="d">{{d}}</span>
      </div>
      <div class="days">
        <span
          v-for="(day, i) in days"
          :key="i"
          :class="['day', { today: day.isToday, selected: day.isSelected, other: day.isOther }]"
          @click="selectDate(day)"
        >{{ day.text }}</span>
      </div>
      <div class="footer">
        <button @click="selectToday">今天</button>
        <button @click="clear">清空</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaiDatePicker',
  props: { modelValue: [String, Date] },
  data() {
    return {
      visible: false,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      selectedDate: null
    }
  },
  computed: {
    displayValue() {
      if (!this.selectedDate) return ''
      const d = this.selectedDate
      return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
    },
    days() {
      const days = []
      const first = new Date(this.year, this.month, 1)
      const last = new Date(this.year, this.month + 1, 0)
      const prevLast = new Date(this.year, this.month, 0)
      const today = new Date()
      today.setHours(0,0,0,0)
      
      for (let i = first.getDay() - 1; i >= 0; i--) {
        const day = prevLast.getDate() - i
        const date = new Date(this.year, this.month - 1, day)
        days.push({ text: day, isOther: true, date })
      }
      
      for (let i = 1; i <= last.getDate(); i++) {
        const date = new Date(this.year, this.month, i)
        days.push({
          text: i,
          date,
          isToday: date.getTime() === today.getTime(),
          isSelected: this.selectedDate && date.getTime() === this.selectedDate.getTime()
        })
      }
      
      const remaining = 42 - days.length
      for (let i = 1; i <= remaining; i++) {
        days.push({ text: i, isOther: true, date: new Date(this.year, this.month + 1, i) })
      }
      
      return days
    }
  },
  methods: {
    prevYear() { this.year-- },
    nextYear() { this.year++ },
    prevMonth() {
      if (this.month === 0) { this.month = 11; this.year-- }
      else this.month--
    },
    nextMonth() {
      if (this.month === 11) { this.month = 0; this.year++ }
      else this.month++
    },
    selectDate(day) {
      this.selectedDate = day.date
      this.$emit('update:modelValue', this.displayValue)
      this.$emit('change', this.displayValue)
      this.visible = false
    },
    selectToday() { this.selectDate({ date: new Date() }) },
    clear() {
      this.selectedDate = null
      this.$emit('update:modelValue', '')
      this.visible = false
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (this.$refs.picker && !this.$refs.picker.contains(e.target)) {
        this.visible = false
      }
    })
  }
}
</script>

<style scoped>
.vai-datepicker { position: relative; display: inline-block; width: 220px; }
.input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  background: #fff;
  border: 1px solid var(--vai-border-color);
  border-radius: 4px;
  cursor: pointer;
}
.panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 2000;
  width: 322px;
  padding: 12px;
  background: #fff;
  border: 1px solid var(--vai-border-color-light);
  border-radius: 4px;
  box-shadow: var(--vai-box-shadow);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 12px;
}
.header button {
  padding: 0 8px;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
}
.header span { flex: 1; text-align: center; font-size: 14px; font-weight: 500; }
.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.weekdays { margin-bottom: 8px; }
.weekdays span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  font-size: 12px;
  color: var(--vai-text-color-secondary);
}
.day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
.day:hover { color: var(--vai-color-primary); background: var(--vai-color-primary-light-9); }
.day.today { color: var(--vai-color-primary); font-weight: 600; }
.day.selected { color: #fff; background: var(--vai-color-primary); }
.day.other { color: var(--vai-text-color-placeholder); }
.footer {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-top: 12px;
  border-top: 1px solid var(--vai-border-color-lighter);
}
.footer button {
  padding: 4px 8px;
  font-size: 12px;
  color: var(--vai-color-primary);
  background: none;
  border: none;
  cursor: pointer;
}
</style>
