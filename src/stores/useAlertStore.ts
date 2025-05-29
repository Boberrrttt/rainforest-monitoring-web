import { create } from 'zustand';

type AlertStore = {
  newAlerts: number;
  setAlerts: (count: number) => void;
  incrementAlert: () => Promise<void>;
};

export const useAlertStore = create<AlertStore>((set, get) => ({
  newAlerts: 0, 

  setAlerts: (count: number) => {
    set({ newAlerts: count });
  },

  incrementAlert: async () => {
    try {
      const current = get().newAlerts;
      const updated = current + 1;
      set({ newAlerts: updated });
      localStorage.setItem('totalAlerts', String(updated));
    } catch (error) {
      console.error('Failed to increment alert:', error);
    }
  },
}));
