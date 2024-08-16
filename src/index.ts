import dayjs from "dayjs";


const monthsThaiShort = [
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
const monthsThaiFull = [
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

export const convertedDate = (date: string, format: string) => {
  const [day, moth, yesr] = dayjs(date).format("DD-MM-YYYY").split("-");
  if (format === "short") {
    return `${day} ${monthsThaiShort[parseInt(moth) - 1]} ${
      parseInt(yesr) + 543
    }`;
  } else if (format === "full") {
    return `${day} ${monthsThaiFull[parseInt(moth) - 1]} ${
      parseInt(yesr) + 543
    }`;
  }
};


