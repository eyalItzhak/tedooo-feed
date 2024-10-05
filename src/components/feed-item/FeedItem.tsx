import { useEffect, useRef, useState } from "react";
import {
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Post } from "../../models/post";
import PostInfo from "./post-info/PostInfo";
import { styles, topContainerStyles } from "./styles";
import { typography } from "../../assets/consts/typography";
import { colors } from "../../assets/consts/colors";
import Reactions from "./reactions/Reactions";
import Actions from "./actions/Actions";
import { sendImpression } from "../../http/feed";

const MAX_IMAGES = 2;

type FeedItemProps = {
  post: Post;
};

function FeedItem({ post }: FeedItemProps) {
  const { id, didLike, likes, comments, images } = post;

  const [like, setLike] = useState<boolean>(didLike);
  const [likesNum, setLikesNum] = useState<number>(likes);
  const feedItemRef = useRef(null);

  // Every time the user views a feed item, send impression
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendImpression(id);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    if (feedItemRef.current) {
      observer.observe(feedItemRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (feedItemRef.current) {
        observer.unobserve(feedItemRef.current);
      }
    };
  }, []);

  const postImages = images.slice(0, MAX_IMAGES);

  const handleLikeClick = () => {
    setLike((like) => {
      setLikesNum((prev) => (!like ? prev + 1 : prev - 1));
      return !like;
    });
  };

  return (
    <Stack ref={feedItemRef} sx={styles}>
      <Stack sx={topContainerStyles}>
        <PostInfo {...post} />
        <Typography sx={typography.body400} color={colors.black}>
          {post.text}
        </Typography>
      </Stack>
      <ImageList cols={postImages.length}>
        {postImages.map((image) => (
          <ImageListItem key={image}>
            <img src={image} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Reactions likes={likesNum} comments={comments} />
      <Divider variant="middle" />
      <Actions didLike={like} onLikeClick={handleLikeClick} />
    </Stack>
  );
}

export default FeedItem;
