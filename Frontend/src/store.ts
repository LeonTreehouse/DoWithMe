import { create } from "zustand";

interface MeetingQuery {
  picture?: string;
  name?: string;
  location?: string;
  time?: string;
  description?: string;
  searchText?: string;
}

interface MeetingQueryStore {
  meetingQuery: MeetingQuery;
  setSearchText: (searchText: string) => void;
}

const useMeetingQueryStore = create<MeetingQueryStore>((set) => ({
  meetingQuery: {},
  setSearchText: (searchText) => set(() => ({ meetingQuery: { searchText } })),
}));

export default useMeetingQueryStore;
