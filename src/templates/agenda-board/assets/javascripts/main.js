$(function() {
  var countDays, selectFirstDay;
  if ($("[name='active-day']").length > 0) {
    (function selectFirstDay() {
      return $("[name='active-day']").first().attr('checked', 'checked');
    })();
  }
  (function countDays() {
    return $(".section-agenda").addClass("agenda-" + ($("[name='active-day']").length));
  })();
});
