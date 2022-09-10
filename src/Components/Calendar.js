import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";


const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: true,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {

    const events = [
      {
        id: 1,
        text: "PTA Meeting",
        start: "2022-09-06T10:30:00",
        end: "2022-09-06T13:00:00",
        backColor: "#B0C4DE"
      },
      {
        id: 2,
        text: "Meet the Teacher",
        start: "2022-09-05T09:30:00",
        end: "2022-09-05T11:30:00",
        backColor: "#B0C4DE"
      },
      {
        id: 3,
        text: "Field trip",
        start: "2022-09-08T12:00:00",
        end: "2022-09-08T15:00:00",
        backColor: "#B0C4DE"
      },
      {
        id: 4,
        text: "Pep Rally",
        start: "2022-09-09T11:30:00",
        end: "2022-09-09T14:30:00",
        backColor: "#B0C4DE"
      },
    ];

    const startDate = "2022-09-08";

    this.calendar.update({startDate, events});

  }

  render() {
    return (
        <>
        <h2>Upcoming Events:</h2>
      <div style={styles.wrap}>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
      </>
    );
  }
}

export default Calendar;