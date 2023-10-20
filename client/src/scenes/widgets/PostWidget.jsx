import { useState } from "react";
import Friend from "components/Friend";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import { SettingsApplications } from "@mui/icons-material";

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
    dispatch(setPost({ post: updatePost }));
  };
};

export default PostWidget;
