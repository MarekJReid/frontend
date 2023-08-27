// api.ts
// Collection of fetch functions to get data from the API
export const fetchDevices = () =>
  fetch("/api/v1/devices").then((res) => res.json());
export const fetchJobs = () => fetch("/api/v1/jobs").then((res) => res.json());
export const fetchManifests = () =>
  fetch("/api/v1/manifests").then((res) => res.json());
