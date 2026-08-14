export const getDeviceId = (): string => {
  if (typeof window === 'undefined') return 'BP4A.251205.006';
  let deviceId = localStorage.getItem('deviceId');
  if (!deviceId) {
    deviceId = `WEB_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
    localStorage.setItem('deviceId', deviceId);
  }
  return deviceId;
};
