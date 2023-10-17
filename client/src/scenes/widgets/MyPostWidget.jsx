import {
  DeleteOutlined,
  EditOutlined,
  GifBoxOutlined,
  AttachFilesOutlined,
  MicOutlined,
  ImageOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import WidgetWrapper from "components/WidgetWrapper";
import UserImage from "components/UserImage";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
};
