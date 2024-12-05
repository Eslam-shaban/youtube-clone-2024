export const parseVideoDuration = (duration: string): string => {
  if (!duration) return "0:00";

  // Remove "P" for period, "T" for time, and split by "D" for days
  const [daysPart, timePart] = duration.replace("P", "").split("T");

  // Parse the days, if present
  let days = 0;
  if (daysPart?.endsWith("D")) {
    days = parseInt(daysPart.replace("D", ""));
  }

  // Split time part and replace H, M, S with colons
  const durationParts: string[] = (timePart || "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":")
    .filter((part) => part !== ""); // Filter out any empty parts

  // Initialize hours, minutes, and seconds
  let hours = days * 24; // Convert days to hours if present
  let minutes = 0;
  let seconds = 0;

  // Assign time parts to hours, minutes, and seconds
  if (durationParts.length === 3) {
    hours += parseInt(durationParts[0]);
    minutes = parseInt(durationParts[1]);
    seconds = parseInt(durationParts[2]);
  } else if (durationParts.length === 2) {
    minutes = parseInt(durationParts[0]);
    seconds = parseInt(durationParts[1]);
  } else if (durationParts.length === 1) {
    seconds = parseInt(durationParts[0]);
  }

  // Format time to HH:MM:SS or MM:SS if hours are zero
  return hours > 0
    ? `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    : `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/*export const parseVideoDuration = (duration: string): string => {
  if (!duration) return "0:00";

  const durationParts: string[] = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  if (durationParts.length === 3) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
    }:${
      parseInt(durationParts[2]) < 9 ? `0${durationParts[2]}` : durationParts[2]
    }`;
  }

  if (durationParts.length === 2) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 9 ? `0${durationParts[1]}` : durationParts[1]
    }`;
  }

  if (durationParts.length === 1) {
    return `0:${
      parseInt(durationParts[0]) < 9 ? `0${durationParts[0]}` : durationParts[0]
    }`;
  }

  return "";
};
*/
