import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZE } from "../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primarySolid,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: SIZE.h2,
    color: COLORS.secondary,
    marginVertical: 30,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: SIZE.xlarge,
    color: COLORS.secondary,
    marginVertical: 20,
    fontWeight: "600",
  },
  sideProfileContainer: {
    paddingHorizontal: 30,
  },
  profileHeader: {
    flexDirection: "column",
    marginBottom: 20,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  profileHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileCompleteNumber: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
  },
  profileCompleteNumberText: {
    color: COLORS.primarySolid,
    fontSize: SIZE.xlarge,
    fontWeight: "bold",
  },
  profileHeaderBottom: {
    marginBottom: 10,
    gap: 3,
  },
  name: {
    fontWeight: "bold",
    fontSize: SIZE.h1,
  },
  sub: {
    fontWeight: "bold",
    fontSize: SIZE.xlarge,
    color: COLORS.gray,
  },
  location: {
    fontSize: SIZE.small,
    color: COLORS.gray,
  },
  stats: {
    flexDirection: "column",
    marginBottom: 20,
  },
  statsPopular: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  statsFollow: {
    alignItems: "center",
    marginBottom: 20,
  },
  statsFollowText: {
    fontSize: SIZE.medium,
    fontWeight: "600",
  },
  statsFollowNumber: {
    fontSize: SIZE.h2,
    fontWeight: "bold",
  },
  statsInteraction: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    gap: 10,
  },
  sidePanelContainer: {
    marginBottom: 20,
    gap: 5,
  },
  screen: { flex: 1, backgroundColor: "#000" },
  headerWrap: { padding: 16, borderBottomColor: "#111", borderBottomWidth: 0 },
  screenTitle: { color: "#fff", fontSize: 24, fontWeight: "700" },
  listPad: { paddingHorizontal: 12, paddingBottom: 40 },
});
