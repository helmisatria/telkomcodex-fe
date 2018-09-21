<template>
  <div class="list-event">
    <h1>Event</h1>
    <div class="row" v-for="event in events" :key="event.id">
      <div class="date--detail">
        <div>
          <h2>{{date(event.dueDate)}}</h2>
          <h4>{{month(event.dueDate)}}</h4>
          <h4>{{clock(event.dueDate)}}</h4>
        </div>
      </div>
      
      <div class="date--description">
        {{event.notes}}

        <div class="date--description-footer">
          <div class="left-footer">
            <i class="material-icons">location_on</i>
            <span>{{event.location}}</span>
          </div>
          <span class="see-more">SEE MORE</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "ListEvent",
  computed: {
    ...mapGetters("calendar", ["events"])
  },
  methods: {
    date(date) {
      return moment(date).format("DD");
    },
    month(date) {
      return moment(date).format("MMMM");
    },
    clock(date) {
      return moment(date).format("hh:mm A");
    }
  }
};
</script>

<style>
</style>
