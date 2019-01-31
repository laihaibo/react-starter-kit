export function fetchFromLocal(key: string): any {
  return JSON.parse(localStorage.getItem(key) || '');
}

export function saveIntoLocal(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function fetchFromSession(key: string): any {
  return JSON.parse(sessionStorage.getItem(key) || '');
}

export function saveIntoSession(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}
