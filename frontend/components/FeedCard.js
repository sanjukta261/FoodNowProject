// FeedCard.js
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { Feather } from "@expo/vector-icons";
import { formatCount } from "@data/FeedData";

const { width } = Dimensions.get("window");

/* ---------- UI Subcomponents ---------- */

const ProfileHeader = ({ author, isFollowing, onFollowClick }) => (
  <View style={styles.profileHeader}>
    <View style={styles.profileInfo}>
      <Image source={{ uri: author.avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.authorName}>{author.name}</Text>
        <Text style={styles.authorOcc}>{author.occupation}</Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={onFollowClick}
      style={[styles.followBtn, isFollowing ? styles.following : styles.notFollowing]}
    >
      <Text style={styles.followText}>{isFollowing ? "Following" : "Follow"}</Text>
    </TouchableOpacity>
  </View>
);

const Caption = ({ title, caption, hashtags = [] }) => (
  <View style={{ marginVertical: 8 }}>
    {title ? <Text style={styles.title}>{title}</Text> : null}
    {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    {hashtags.length > 0 && (
      <View style={styles.tagsRow}>
        {hashtags.map((t, i) => (
          <View key={i} style={styles.tag}>
            <Text style={styles.tagText}>#{t}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

const InteractionBar = ({ likes, comments, onLike, onComment, onShare, isLiked }) => (
  <View style={styles.interactionBar}>
    <View style={styles.interactionGroup}>
      <TouchableOpacity style={styles.iconBtn} onPress={onLike}>
        <Feather name="heart" size={18} color={isLiked ? "#ef4444" : "#cbd5e1"} />
        <Text style={styles.iconText}>{formatCount(likes)}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconBtn} onPress={onComment}>
        <Feather name="message-circle" size={18} color="#cbd5e1" />
        <Text style={styles.iconText}>{formatCount(comments)}</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.iconBtn} onPress={onShare}>
      <Feather name="share-2" size={18} color="#cbd5e1" />
    </TouchableOpacity>
  </View>
);

/* ---------- Card Components ---------- */

export const PhotoCard = ({ data, onInteraction }) => {
  const [likes, setLikes] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(data.isFollowing);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((s) => (liked ? s - 1 : s + 1));
    onInteraction?.("like", data.id);
  };

  return (
    <View style={styles.card}>
      <ProfileHeader author={data.author} isFollowing={following} onFollowClick={() => setFollowing((f) => !f)} />
      <Image source={{ uri: data.image }} style={styles.mediaImage} />
      <Caption title={data.title} caption={data.caption} hashtags={data.hashtags} />
      <InteractionBar likes={likes} comments={data.comments} isLiked={liked} onLike={handleLike} onComment={() => onInteraction?.("comment", data.id)} onShare={() => onInteraction?.("share", data.id)} />
    </View>
  );
};

export const VideoCard = ({ data, onInteraction, isActive }) => {
  const [likes, setLikes] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(data.isFollowing);
  
  const player = useVideoPlayer(data.videoUrl, (player) => {
    player.loop = true;
    player.muted = false;
  });

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive, player]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((s) => (liked ? s - 1 : s + 1));
    onInteraction?.("like", data.id);
  };

  return (
    <View style={styles.card}>
      <View style={styles.videoBadgeRow}>
        <View style={styles.videoBadge}>
          <Feather name="play" size={14} color="#7c3aed" />
          <Text style={styles.videoBadgeText}>video</Text>
        </View>
        <TouchableOpacity style={styles.boostBtn}>
          <Text style={styles.boostText}>Boost 🚀</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoWrap}>
        <VideoView
          player={player}
          style={styles.mediaVideo}
          contentFit="cover"
          nativeControls={false}
        />
      </View>

      <ProfileHeader author={data.author} isFollowing={following} onFollowClick={() => setFollowing((f) => !f)} />
      <Caption title={data.title} caption={data.caption} hashtags={data.hashtags} />
      <InteractionBar likes={likes} comments={data.comments} isLiked={liked} onLike={handleLike} onComment={() => onInteraction?.("comment", data.id)} onShare={() => onInteraction?.("share", data.id)} />
    </View>
  );
};

export const AudioCard = ({ data, onInteraction }) => {
  const [likes, setLikes] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(data.isFollowing);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((s) => (liked ? s - 1 : s + 1));
    onInteraction?.("like", data.id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.audioLabel}>🎵 audio</Text>
      <View style={styles.waveContainer}>
        <View style={styles.waveBars}>
          {[...Array(10)].map((_, i) => (
            <View key={i} style={[styles.waveBar, { height: 20 + (i % 5) * 6 }]} />
          ))}
        </View>

        <Image source={{ uri: data.audioWaveform }} style={styles.audioThumb} />

        <View style={styles.waveBars}>
          {[...Array(10)].map((_, i) => (
            <View key={i} style={[styles.waveBar, { height: 20 + ((i + 2) % 5) * 6 }]} />
          ))}
        </View>
      </View>

      <ProfileHeader author={data.author} isFollowing={following} onFollowClick={() => setFollowing((f) => !f)} />
      <Caption title={data.title} caption={data.caption} hashtags={data.hashtags} />
      <InteractionBar likes={likes} comments={data.comments} isLiked={liked} onLike={handleLike} onComment={() => onInteraction?.("comment", data.id)} onShare={() => onInteraction?.("share", data.id)} />
    </View>
  );
};

export const TextCard = ({ data, onInteraction }) => {
  const [likes, setLikes] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(data.isFollowing);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((s) => (liked ? s - 1 : s + 1));
    onInteraction?.("like", data.id);
  };

  return (
    <View style={styles.card}>
      <ProfileHeader author={data.author} isFollowing={following} onFollowClick={() => setFollowing((f) => !f)} />
      <Caption title={data.title} caption={data.caption} hashtags={data.hashtags} />
      <InteractionBar likes={likes} comments={data.comments} isLiked={liked} onLike={handleLike} onComment={() => onInteraction?.("comment", data.id)} onShare={() => onInteraction?.("share", data.id)} />
    </View>
  );
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f1724",
    borderRadius: 14,
    padding: 12,
    marginVertical: 10,
    overflow: "hidden",
  },

  profileHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  profileInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 42, height: 42, borderRadius: 22, marginRight: 10, backgroundColor: "#263238" },
  authorName: { color: "#fff", fontSize: 14, fontWeight: "600" },
  authorOcc: { color: "#94a3b8", fontSize: 12 },

  followBtn: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 999 },
  following: { backgroundColor: "#263238" },
  notFollowing: { backgroundColor: "#4f46e5" },
  followText: { color: "#fff", fontWeight: "600", fontSize: 13 },

  mediaImage: { width: width - 32, height: (width - 32) * 0.6, borderRadius: 10, marginTop: 10, alignSelf: "center" },

  videoBadgeRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  videoBadge: { flexDirection: "row", alignItems: "center", gap: 6 },
  videoBadgeText: { color: "#d1d5db", marginLeft: 6, fontSize: 13 },
  boostBtn: { backgroundColor: "#4f46e5", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 9 },
  boostText: { color: "#fff", fontWeight: "700" },

  videoWrap: { width: width - 32, height: (width - 32) * 0.56, borderRadius: 10, overflow: "hidden", alignSelf: "center", backgroundColor: "#000" },
  mediaVideo: { width: "100%", height: "100%" },

  title: { color: "#fff", fontSize: 16, fontWeight: "700" },
  caption: { color: "#cbd5e1", marginTop: 6, fontSize: 13 },

  tagsRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 8, gap: 6 },
  tag: { backgroundColor: "#0b1220", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999, marginRight: 6 },
  tagText: { color: "#cbd5e1", fontSize: 12 },

  interactionBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, borderTopWidth: 1, borderTopColor: "#081124", paddingTop: 10 },
  interactionGroup: { flexDirection: "row", alignItems: "center" },
  iconBtn: { flexDirection: "row", alignItems: "center", marginRight: 12 },
  iconText: { color: "#cbd5e1", marginLeft: 6 },

  audioLabel: { color: "#c7b3ff", fontSize: 14, marginBottom: 8 },
  waveContainer: { backgroundColor: "#fff", borderRadius: 10, padding: 12, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 },
  waveBars: { flexDirection: "column", justifyContent: "center", alignItems: "center", marginHorizontal: 8 },
  waveBar: { width: 3, backgroundColor: "#0b1220", marginVertical: 3, borderRadius: 2 },
  audioThumb: { width: 64, height: 64, borderRadius: 8, marginHorizontal: 8 },
});

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import {COLORS, SIZE} from '@constants/Theme';
// import ProfilePicture from './ProfilePicture';
// import newsChannel from "@assets/Profile.jpg";


// const NewsCard = ({ item }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={item.image } style={styles.image} />
//       <View style={styles.info}>
//         <View style={styles.topRow}>
//           <Text style={styles.date}>{item.date}</Text>
//           <Text style={styles.type}> • Live</Text>
//         </View>
//         <Text style={styles.headline}>{item.title}</Text>
//         <View style={styles.bottomRow}>
//           <ProfilePicture source={newsChannel} width={25} height={25} />
//           <Text style={styles.channel}>Guwahati Now</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.blur,
//     padding: 10,
//     marginBottom: 12,
//     borderRadius: 12,
//   },
//   image: {
//     width: 130,
//     height: 120,
//     borderRadius: 6,
//   },
//   info: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: 'space-between',
//     gap: 10,

//   },
//   topRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   date: {
//     color: COLORS.lightGray,
//     fontSize: 12,
//   },
//   type: {
//     color: '#f08',
//     fontSize: 12,
//   },
//   headline: {
//     fontSize: SIZE.large,
//     fontWeight: '600',
//     color: '#fff',
//     marginVertical: 4,
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   channel: {
//     color: '#888',
//     fontSize: 12,
//   },
// });

// export default NewsCard;
