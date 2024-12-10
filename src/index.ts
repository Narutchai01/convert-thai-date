import dayjs from "dayjs";

const fullMonth = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];
const shortMonth = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

const convertDate = (date: Date, format: string) => {


  if (!date || !format) {
    return "Invalid date or format";
  }

  format = format.toLowerCase();
  const newDate = dayjs(date).format("YYYY-MM-DD");

  let [year, month, day] = newDate.split("-");

  year = (parseInt(year,10) + 543).toString();

  if (format === "full") {
    return `${day} ${fullMonth[parseInt(month, 10) - 1]} ${year}`;
  }else if (format === "short") {
    return `${day} ${shortMonth[parseInt(month, 10) - 1]} ${year}`;
  } else{
    return "Invalid format";
  }

};


export default convertDate;

