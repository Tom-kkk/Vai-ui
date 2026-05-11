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
    },
    _handleOutsideClick(e) {
      if (this.$refs.picker && !this.$refs.picker.contains(e.target)) {
        this.visible = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this._handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this._handleOutsideClick)
  }
}
</script>

<style scoped>
.vai-datepicker {
  position: relative;
  display: inline-block;
  width: 220px;
  font-family: var(--vai-font-family);
}
.input {
  width: 100%;
  padding: 9px 13px;
  font-size: var(--vai-font-size-base);
  font-family: var(--vai-font-family);
  background: var(--vai-bg-base);
  border: 1.5px solid var(--vai-border-color);
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  color: var(--vai-text-color-primary);
  transition: var(--vai-transition-fast);
  outline: none;
}
.input:hover { border-color: var(--vai-color-primary-light-3); }
.input:focus { border-color: var(--vai-color-primary); box-shadow: 0 0 0 3px var(--vai-color-primary-light-1); }
.panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: var(--vai-z-dropdown);
  width: 300px;
  padding: 14px;
  background: var(--vai-bg-base);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-lg);
  box-shadow: var(--vai-shadow-lg);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.header button {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  background: var(--vai-fill-color);
  border: 1px solid var(--vai-border-color);
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  color: var(--vai-text-color-secondary);
  transition: var(--vai-transition-fast);
}
.header button:hover {
  color: var(--vai-color-primary);
  border-color: var(--vai-color-primary-light-3);
  background: var(--vai-color-primary-light-1);
}
.header span {
  flex: 1;
  text-align: center;
  font-size: var(--vai-font-size-base);
  font-weight: 600;
  color: var(--vai-text-color-primary);
}
.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}
.weekdays { margin-bottom: 6px; }
.weekdays span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: var(--vai-font-size-xs);
  font-weight: 500;
  color: var(--vai-text-color-tertiary);
}
.day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: var(--vai-font-size-sm);
  cursor: pointer;
  border-radius: var(--vai-radius-sm);
  color: var(--vai-text-color-primary);
  transition: var(--vai-transition-fast);
}
.day:hover {
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-1);
}
.day.today {
  color: var(--vai-color-primary);
  font-weight: 700;
  background: var(--vai-color-primary-light-1);
}
.day.selected {
  color: #fff;
  background: var(--vai-gradient-primary);
  font-weight: 600;
  box-shadow: var(--vai-shadow-primary-sm);
}
.day.other {
  color: var(--vai-text-color-tertiary);
}
.footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid var(--vai-border-color);
}
.footer button {
  padding: 5px 12px;
  font-size: var(--vai-font-size-sm);
  font-family: var(--vai-font-family);
  font-weight: 500;
  color: var(--vai-color-primary);
  background: var(--vai-color-primary-light-1);
  border: 1px solid var(--vai-color-primary-light-2);
  border-radius: var(--vai-radius-sm);
  cursor: pointer;
  transition: var(--vai-transition-fast);
}
.footer button:hover {
  background: var(--vai-color-primary-light-2);
}
</style>
