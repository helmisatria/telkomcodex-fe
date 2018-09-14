<template>
  <div class="calendar">
    <div class="date">
      <h1>Date</h1>
      <v-calendar 
        :theme-styles='themeStyles'
      />
    </div>
    <div class="event-detail">
      <div class="new-note">
        <div class="title">
          <h1>Rabu, 6 Juni 2018</h1>
          <button class="btn--save">SAVE</button>
        </div>
        <div class="input">
          <textarea 
            cols="30" 
            rows="10" 
            placeholder="Klik untuk menulis notes..."
          >
          </textarea>
        </div>

      </div>
      <div class="list-event">
        <h1>Event</h1>
        <div class="row">
          <div class="date--detail">
            <div>
              <h2>4</h2>
              <h4>Juni</h4>
              <h4>10:00 AM</h4>
            </div>
          </div>
          <div class="date--description">
            Bertemu dengan pak Rudi di Bandara Halim membawa dokumen terkait projek.

            <div class="date--description-footer">
              <div class="left-footer">
                <i class="material-icons">location_on</i>
                <span>Bandara Halim Kusuma</span>
              </div>
              <span class="see-more">SEE MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarPage",
  data() {
    const hSpacing = "15px";
    return {
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
          fontSize: "1rem",
          padding: "1.2em 1em"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/calendar";
</style>
