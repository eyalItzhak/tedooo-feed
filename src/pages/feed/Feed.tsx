import { useInfiniteQuery } from "@tanstack/react-query";
import FeedItem from "../../components/feed-item/FeedItem";
import { Fragment } from "react";
import { Stack } from "@mui/material";
import { fetchFeed } from "../../http/feed";
import InfiniteScroll from "react-infinite-scroll-component";
import { styles } from "./styles";
import ErrorAlert from "../../components/ui/error/ErrorAlert";
import Loading from "./Loading";

function Feed() {
  const { data, isPending, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["feed"],
      queryFn: fetchFeed,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        return lastPage.hasMore ? lastPage.nextPage : undefined;
      },
    });

  if (isError) {
    return <ErrorAlert message={error.message} />;
  }

  if (isPending) {
    return <Loading />;
  }

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Loading />}
      dataLength={data.pages.length}
    >
      <Stack sx={styles}>
        {data.pages.map((page, i) => (
          <Fragment key={i}>
            {page.posts.map((feedItem) => (
              <FeedItem key={feedItem.id} post={feedItem} />
            ))}
          </Fragment>
        ))}
      </Stack>
    </InfiniteScroll>
  );
}

export default Feed;
