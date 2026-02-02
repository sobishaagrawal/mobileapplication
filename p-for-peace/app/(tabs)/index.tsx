import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function PeaceDashboard() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

  
      <View style={styles.header}>
        <Text style={styles.location}>P for Peace</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search help, doctors, sessions"
        />
      </View>

      <View style={styles.heroimage}>
        <Image
          source={{
            uri: "https://github.com/sobishaagrawal/mobileapplication/blob/main/banner.png?raw=true",
          }}
          style={styles.heroImageStyle}
          resizeMode="cover"
        />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Talk to Psychologist" />
        <CategoryCard title="Psychiatrist Help" />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Anonymous Chat" />
        <CategoryCard title="Medication Records" />
      </View>

      <View style={styles.row}>
        <CategoryCard title="Self Care Tools" />
        <CategoryCard title="Mood Tracker" />
      </View>

      <Text style={styles.sectionTitle}>How are you feeling today?</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FeelingCard label="Anxious" />
        <FeelingCard label="Stressed" />
        <FeelingCard label="Low Mood" />
        <FeelingCard label="Overwhelmed" />
      </ScrollView>

      <Text style={styles.sectionTitle}>Recommended Professionals</Text>

      <DoctorCard
        name="Dr. Sobisha Agrawal"
        detail="20+ yrs • Anxiety & Stress"
        price="NPR 2000 / session"
      />

      <DoctorCard
        name="Dr. Naman Agrawal"
        detail="Calm • Supportive"
        price="NPR 1800 / session"
      />

      <View style={styles.mapCard}>
        <Text style={styles.mapTitle}>Need immediate help?</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Call Helpline</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const CategoryCard = ({ title }) => (
  <TouchableOpacity style={styles.categoryCard}>
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const FeelingCard = ({ label }) => (
  <View style={styles.placeCard}>
    <Text style={styles.placeName}>{label}</Text>
    <Text style={styles.placeDistance}>Tap to log</Text>
  </View>
);

const DoctorCard = ({ name, detail, price }) => (
  <View style={styles.localPick}>
    <Text style={styles.localName}>{name}</Text>
    <Text style={styles.localNote}>{detail}</Text>
    <Text style={styles.localRating}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F9FF",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  location: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 25,
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  heroimage: {
    marginBottom: 20,
  },
  heroImageStyle: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 22,
    borderRadius: 14,
    alignItems: "center",
    elevation: 2,
  },
  categoryText: {
    fontWeight: "600",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
  },
  placeCard: {
    width: 140,
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginRight: 12,
    elevation: 2,
    alignItems: "center",
  },
  placeName: {
    fontWeight: "700",
    fontSize: 15,
  },
  placeDistance: {
    marginTop: 6,
    color: "#555",
  },
  localPick: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 2,
  },
  localName: {
    fontWeight: "700",
    fontSize: 16,
  },
  localNote: {
    marginTop: 4,
    color: "#555",
  },
  localRating: {
    marginTop: 6,
    color: "#2563EB",
    fontWeight: "600",
  },
  mapCard: {
    backgroundColor: "#E8F1FF",
    padding: 18,
    borderRadius: 16,
    marginVertical: 25,
    alignItems: "center",
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  mapButton: {
    backgroundColor: "#E53935",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  mapButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});