import dayjs from "dayjs";

interface TimeFormat {
  type: "date" | "month" | "year" | "time" | "datetime";
  format?: string;
  locale?: string;
}

export const convertTime = (
  date: string | Date,
  format: TimeFormat,
  separator: string = "/"
): string => {
  try {
    const d = dayjs(date);

    if (!d.isValid()) {
      throw new Error("Invalid date");
    }

    if (format.format) {
      return d.format(format.format.replace(/\//g, separator));
    }

    switch (format.type) {
      case "date":
        return d.format(`DD${separator}MM${separator}YYYY`);

      case "month":
        return d.format(`MM${separator}YYYY`);

      case "year":
        return d.format("YYYY");

      case "time":
        return d.format("HH:mm");

      case "datetime":
        return d.format(`DD${separator}MM${separator}YYYY HH:mm`);

      default:
        return d.format(`DD${separator}MM${separator}YYYY`);
    }
  } catch (error) {
    console.error("Error converting date:", error);
    return "";
  }
};
