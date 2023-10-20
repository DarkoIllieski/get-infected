import { useState } from "react";
import Friend from "components/Friend";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import { FavoriteOutlined, SettingsApplications } from "@mui/icons-material";
import WidgetWrapper from "components/WidgetWrapper";
import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUser]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.medium;

  const patchLikes = async () => {
    const response = await fetch(`http://localhost:3001/posts/${likes}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Barear ${token}`,
        "Content-type": "applications/json",
      },
      body: JSON.stringify({ userId: loggedInUser }),
    });
    const updatePost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", margintTop: "0.75rem" }}
          src={`http://localhost:3001/assest/${picturePath}`}
        />
      )}
      <FlexBetween mt="025rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostWidget;
