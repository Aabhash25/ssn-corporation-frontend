// Location, job type and work mode for a job, skipping any that are empty.
// Older jobs return "" (or nothing), so they simply get no tags.
// The Set avoids showing a repeat, e.g. location "Remote" + mode "Remote".
export const getJobTags = (job) => [
  ...new Set(
    [job?.location, job?.job_type_display, job?.work_mode_display]
      .map((value) => value?.trim())
      .filter(Boolean),
  ),
];
