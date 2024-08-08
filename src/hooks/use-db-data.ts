import { getDbData, GetDbDataActionProps, GetDbDataActionResponse } from "@/actions/get-db-data.action";
import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

interface UseListingDataProps extends
  Omit<UseQueryOptions<GetDbDataActionProps, Error>, "queryKey" | "queryFn">, GetDbDataActionProps { }

export const useListingData = ({ msg, ...props }: UseListingDataProps) => {
  return useQuery<GetDbDataActionResponse>({
    ...props,
    queryKey: [
      "getDbData",
      msg,
    ],
    queryFn: () => getDbData({ msg }),
  });
}
