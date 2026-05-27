import AsyncStorage from '@react-native-async-storage/async-storage';

const savedTipsKey = 'dragon_math_saved_tips';

export async function loadSavedTipIds() {
  const value = await AsyncStorage.getItem(savedTipsKey);
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export async function saveTipIds(ids: string[]) {
  await AsyncStorage.setItem(savedTipsKey, JSON.stringify(ids));
}
