<template>
  <div class="calendar">
    <div class="date">
      <h1>Date</h1>
      <v-date-picker
        :theme-styles='themeStyles'
        mode="single"
        is-inline
        v-model="selectedDate"
        :min-date='new Date()'
        :select-attribute="{
          contentStyle: {
            backgroundColor: '#66B3CC',
            padding: '1.15em'
          }
        }"
      >
      </v-date-picker>
    </div>
    <div class="event-detail">
      <div class="new-note">
        <div class="title">
          <h1>{{formattedDate}}</h1>
          <button class="btn--save" @click="onCreateNewEvent">SAVE</button>
        </div>
        <div class="input">
          <textarea 
            cols="30"
            rows="10"
            placeholder="Klik untuk menulis notes..."
            v-model="notes"
          >
          </textarea>
        </div>

      </div>
      <ListEvent />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";

import ListEvent from "./components/ListEvent";

export default {
  name: "CalendarPage",
  components: {
    ListEvent
  },
  data() {
    const hSpacing = "15px";
    return {
      localSelectedDate: new Date(),
      themeStyles: {
        wrapper: {
          border: 0,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 6px 20px 0 rgba(0, 0, 0, 0.13)",
          borderRadius: ".5em"
        },
        header: {
          padding: `20px ${hSpacing}`
        },
        headerHorizontalDivider: {
          borderTop: "solid rgba(255, 255, 255, 0.2) 1px",
          width: "80%"
        },
        weekdays: {
          padding: `10px ${hSpacing} 5px ${hSpacing}`
        },
        weeks: {
          padding: `0 ${hSpacing} ${hSpacing} ${hSpacing}`
        },
        dayContent: {
          fontSize: "1.2em",
          padding: "1.2em 1.2em"
        }
      }
    };
  },
  created() {
    this.fetchEvents();
    this.setNewEvent({
      dueDate: new Date()
    });
  },
  computed: {
    ...mapGetters("calendar", ["newEvent"]),
    selectedDate: {
      get() {
        return this.localSelectedDate || new Date();
      },
      set(val) {
        this.localSelectedDate = val || new Date();
        this.setNewEvent({
          dueDate: val
        });
      }
    },
    notes: {
      get() {
        return this.newEvent.notes;
      },
      set(val) {
        this.setNewEvent({
          notes: val
        });
      }
    },
    formattedDate() {
      return moment(this.localSelectedDate).format("D MMMM YYYY");
    }
  },
  methods: {
    ...mapActions("calendar", ["fetchEvents", "setNewEvent", "createNewEvent"]),
    onCreateNewEvent() {
      this.createNewEvent();
    }
  }
};
</script>

<style lang="scss">
@import "./styles/calendar";
</style>
