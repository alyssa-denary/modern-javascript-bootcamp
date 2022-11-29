const now = moment();
console.log(now.toString());
now.add(1, "year").subtract(20, "days");
console.log(now.format("MMMM Do, YYYY"));
console.log(now.fromNow());

const nowTimestamp = now.valueOf();
console.log(moment(nowTimestamp).toString());