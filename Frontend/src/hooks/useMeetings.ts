import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Meeting from "../entities/Meeting";
import useMeetingQueryStore from "../store";

const apiClient = new APIClient<Meeting>("/meeting");

const useMeetings = () => {
  const meetingQuery = useMeetingQueryStore((s) => s.meetingQuery);

  return useQuery<FetchResponse<Meeting>, Error>({
    queryKey: ["meetings", meetingQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          pictures: meetingQuery.picture,
          names: meetingQuery.name,
          location: meetingQuery.location,
          time: meetingQuery.time,
          description: meetingQuery.description,
        },
      }),
    staleTime: ms("24h"),
  });
};
export default useMeetings;
