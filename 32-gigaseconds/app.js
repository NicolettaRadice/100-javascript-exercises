// 1 gigasecond = 1,000,000,000,000 seconds
const GIGASECOND = 1000000000000;


function gigasecond() {
  const startDate = new Date();
  const startTime = startDate.getTime();
  const endDate = new Date(startTime + GIGASECOND);
  console.log(endDate);
  document.getElementById("result").innerHTML = "<br/>Start date: " + startDate + "<br/><br/> End date: "+endDate;
  return endDate;
};

gigasecond();