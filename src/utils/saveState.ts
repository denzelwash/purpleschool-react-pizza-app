export default function saveState<T>(state: T, key: string) {
  if (state === null || state === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(state));
  }
}
