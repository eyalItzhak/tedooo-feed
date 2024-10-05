import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "now",
    ss: "now",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: (days) => (days < 7 ? `${days}d` : `${Math.floor(days / 7)}w`),
    M: "1mo",
    MM: "%dmo",
    y: "1yr",
    yy: "%dyr",
  },
});

export function timeSince(date: Date) {
  return moment(date).fromNow();
}
