export default function loadState<T>(key: string): T | undefined {
  try {
    const state = localStorage.getItem(key);
    if (state) {
      return JSON.parse(state);
    }
  } catch (e) {
    console.log(e);
  }
}
