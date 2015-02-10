// There's quite a bit of double-handling here. Could be stripped down a lot.
// We'll replace the shared Agenda JS with this in a seperate task.

(function (global) {
  var timeFormat = global.redHatTimeFormat || 'hh:mm a';

  var days = [].slice.call(document.getElementsByClassName('js-time-table')).map(function (dayElem) {
    return {
      element: dayElem,
      sessions: [].slice.call(dayElem.getElementsByClassName('js-session')).map(function (sessionElem) {
        return {
          start: sessionElem.getAttribute('data-start'),
          end: sessionElem.getAttribute('data-end'),
          group: sessionElem.getAttribute('data-group'),
          element: sessionElem
        };
      })
    }
  });

  days.forEach(function (day) {
    day.ranges = day.sessions.reduce(function (ranges, session) {
      var start = moment(session.start, 'HH:mm').format('X');
      var end = moment(session.end, 'HH:mm').format('X');
      var existing = ranges.filter(function (range) {
        return range.start == start;
      })[0];
      if (existing) {
        existing.sessions.push(session);

        if (existing.end < end) {
          existing.end = end;
        }
      } else {
        ranges.push({
          start: start,
          end: end,
          sessions: [session]
        })
      }
      return ranges;
    }, []);
  });

  days.forEach(function (day) {
    var container = day.element;
    day.ranges.forEach(function (range) {
      var rangeRow = document.createElement('div');
      var rangeRowSessions = document.createElement('div');
      var time = moment(range.start, 'X').format(timeFormat);
      var timeElem = document.createElement('h3');

      timeElem.classList.add('agenda-range-row-start-time');
      timeElem.innerHTML = time;

      rangeRowSessions.classList.add('agenda-range-row-sesions-container');

      rangeRow.classList.add('agenda-range-row');
      rangeRow.classList.add('agenda-range-row-sessions-' + range.sessions.length);
      rangeRow.appendChild(timeElem);
      rangeRow.appendChild(rangeRowSessions);

      range.sessions.forEach(function (session) {
        var sessionsElem;

        if (!session.group || session.group === global.attendeeGroup) {
          sessionElem = document.createElement('div');
          sessionElem.classList.add('agenda-session');
          sessionElem.innerHTML = session.element.innerHTML;
          rangeRowSessions.appendChild(sessionElem);
        }

        container.removeChild(session.element);
      });

      container.appendChild(rangeRow);
    });
  });
})(window)
